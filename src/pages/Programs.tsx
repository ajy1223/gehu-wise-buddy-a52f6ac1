import { GraduationCap, Clock, Award, BookOpen } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const programs = [
  {
    id: 1,
    name: "Bachelor of Computer Applications (BCA)",
    level: "Undergraduate",
    duration: "3 Years",
    description: "A comprehensive program focusing on computer applications, programming, and software development.",
    highlights: ["Programming Languages", "Database Management", "Web Development", "Software Engineering"],
    color: "primary"
  },
  {
    id: 2,
    name: "BCA in Artificial Intelligence & Data Science",
    level: "Undergraduate",
    duration: "3 Years",
    description: "Specialized program combining AI, machine learning, and data science principles.",
    highlights: ["Machine Learning", "Data Analytics", "Python Programming", "AI Fundamentals"],
    color: "accent"
  },
  {
    id: 3,
    name: "B.Tech Computer Science & Engineering",
    level: "Undergraduate",
    duration: "4 Years",
    description: "Engineering program covering all aspects of computer science and engineering.",
    highlights: ["Data Structures", "Algorithms", "Computer Networks", "Operating Systems"],
    color: "primary"
  },
  {
    id: 4,
    name: "B.Tech CSE (Cyber Security)",
    level: "Undergraduate",
    duration: "4 Years",
    description: "Focused engineering program on information and security aspects.",
    highlights: ["Network Security", "Cryptography", "Ethical Hacking", "Digital Forensics"],
    color: "destructive"
  },
];

const Programs = () => {
  return (
    <div className="p-6 max-w-7xl mx-auto">
      <div className="mb-8">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
            <GraduationCap className="w-8 h-8 text-primary" />
          </div>
          <div>
            <h1 className="text-4xl font-bold">Academic Programs</h1>
            <p className="text-muted-foreground mt-2">Explore our undergraduate and postgraduate programs</p>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-6 mb-8">
        <Card className="p-6 bg-primary/5">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-12 h-12 rounded-lg bg-primary flex items-center justify-center">
              <GraduationCap className="w-6 h-6 text-white" />
            </div>
            <div>
              <p className="text-2xl font-bold text-primary">6</p>
              <p className="text-sm text-muted-foreground">Total Programs</p>
            </div>
          </div>
        </Card>

        <Card className="p-6 bg-accent/5">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-12 h-12 rounded-lg bg-accent flex items-center justify-center">
              <Award className="w-6 h-6 text-white" />
            </div>
            <div>
              <p className="text-2xl font-bold text-accent">5</p>
              <p className="text-sm text-muted-foreground">Undergraduate</p>
            </div>
          </div>
        </Card>

        <Card className="p-6 bg-primary/5">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-12 h-12 rounded-lg bg-primary flex items-center justify-center">
              <Award className="w-6 h-6 text-white" />
            </div>
            <div>
              <p className="text-2xl font-bold text-primary">1</p>
              <p className="text-sm text-muted-foreground">Postgraduate</p>
            </div>
          </div>
        </Card>
      </div>

      <div className="grid gap-6">
        {programs.map((program) => (
          <Card key={program.id} className="p-6 hover:shadow-lg transition-shadow">
            <div className="flex gap-6">
              <div className={`w-16 h-16 rounded-xl bg-${program.color}/10 flex items-center justify-center flex-shrink-0`}>
                <GraduationCap className={`w-8 h-8 text-${program.color}`} />
              </div>
              <div className="flex-1">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-2xl font-bold mb-2">{program.name}</h3>
                    <div className="flex gap-2 mb-3">
                      <Badge variant="secondary">{program.level}</Badge>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Clock className="w-4 h-4" />
                    <span className="text-sm">{program.duration}</span>
                  </div>
                </div>
                
                <p className="text-muted-foreground mb-4">{program.description}</p>
                
                <div>
                  <p className="font-semibold mb-2 flex items-center gap-2">
                    <BookOpen className="w-4 h-4" />
                    Key Highlights:
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {program.highlights.map((highlight, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Programs;
