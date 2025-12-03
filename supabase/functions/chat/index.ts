import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

// Input validation
function validateMessages(messages: unknown): { valid: boolean; error?: string } {
  if (!Array.isArray(messages)) {
    return { valid: false, error: "messages must be an array" };
  }
  if (messages.length === 0) {
    return { valid: false, error: "messages cannot be empty" };
  }
  if (messages.length > 20) {
    return { valid: false, error: "messages cannot exceed 20 items" };
  }
  for (let i = 0; i < messages.length; i++) {
    const msg = messages[i];
    if (!msg || typeof msg !== "object") {
      return { valid: false, error: `message at index ${i} is invalid` };
    }
    if (!msg.role || typeof msg.role !== "string") {
      return { valid: false, error: `message at index ${i} must have a string role` };
    }
    if (!["user", "assistant", "system"].includes(msg.role)) {
      return { valid: false, error: `message at index ${i} has invalid role` };
    }
    if (typeof msg.content !== "string") {
      return { valid: false, error: `message at index ${i} must have string content` };
    }
    if (msg.content.length > 4000) {
      return { valid: false, error: `message at index ${i} content exceeds 4000 characters` };
    }
  }
  return { valid: true };
}

serve(async (req) => {
  if (req.method === "OPTIONS") return new Response(null, { headers: corsHeaders });

  try {
    const body = await req.json();
    const { messages } = body;
    
    // Validate input
    const validation = validateMessages(messages);
    if (!validation.valid) {
      console.error("Validation error:", validation.error);
      return new Response(JSON.stringify({ error: validation.error }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    if (!LOVABLE_API_KEY) throw new Error("LOVABLE_API_KEY is not configured");

    const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-2.5-flash",
        messages: [
          { 
            role: "system", 
            content: `You are an AI assistant for Graphic Era Hill University (GEHU) Dehradun. 
            
You are knowledgeable about:
- GEHU university programs, courses, and admissions
- BCA (Bachelor of Computer Applications) program details
- B.Tech programs including Computer Science & Engineering and Cyber Security
- Faculty information and their specializations
- Campus facilities and locations
- Academic schedules and timetables
- University policies and procedures

Always provide accurate, helpful information about GEHU. If you don't know something specific, suggest the user check the official GEHU website or contact the administration.

Keep your responses clear, concise, and friendly.` 
          },
          ...messages,
        ],
        stream: true,
      }),
    });

    if (!response.ok) {
      if (response.status === 429) {
        return new Response(JSON.stringify({ error: "Rate limits exceeded, please try again later." }), {
          status: 429,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      if (response.status === 402) {
        return new Response(JSON.stringify({ error: "Payment required, please add funds to your Lovable AI workspace." }), {
          status: 402,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      const t = await response.text();
      console.error("AI gateway error:", response.status, t);
      return new Response(JSON.stringify({ error: "AI gateway error" }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    return new Response(response.body, {
      headers: { ...corsHeaders, "Content-Type": "text/event-stream" },
    });
  } catch (e) {
    console.error("chat error:", e);
    return new Response(JSON.stringify({ error: e instanceof Error ? e.message : "Unknown error" }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
