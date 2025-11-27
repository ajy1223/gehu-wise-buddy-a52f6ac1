import { MessageSquare, LayoutGrid, Calendar, GraduationCap, Users, MapPin, BarChart3, HelpCircle, GraduationCapIcon, FileText, LogOut, User } from "lucide-react";
import { NavLink } from "@/components/NavLink";
import { supabase } from "@/integrations/supabase/client";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarProvider,
  useSidebar,
} from "@/components/ui/sidebar";

const menuItems = [
  { title: "Chat Assistant", url: "/", icon: MessageSquare },
  { title: "Student ERP", url: "/student-erp", icon: LayoutGrid },
  { title: "Timetable", url: "/timetable", icon: Calendar },
  { title: "Examinations", url: "/examinations", icon: FileText },
  { title: "Programs", url: "/programs", icon: GraduationCap },
  { title: "Faculty Directory", url: "/faculty", icon: Users },
  { title: "Campus Locations", url: "/campus", icon: MapPin },
  { title: "Analytics", url: "/analytics", icon: BarChart3 },
  { title: "FAQ Management", url: "/faq", icon: HelpCircle },
];

function AppSidebar() {
  const { state } = useSidebar();
  const collapsed = state === "collapsed";
  const navigate = useNavigate();
  const [userEmail, setUserEmail] = useState<string>("");

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session?.user?.email) {
        setUserEmail(session.user.email);
      }
    });
  }, []);

  const handleLogout = async () => {
    try {
      await supabase.auth.signOut();
      toast.success("Logged out successfully");
      navigate("/login");
    } catch (error: any) {
      toast.error("Error logging out");
    }
  };

  return (
    <Sidebar className={collapsed ? "w-16" : "w-64"} collapsible="icon">
      <div className="p-4 border-b border-border">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
            <GraduationCap className="w-6 h-6 text-white" />
          </div>
          {!collapsed && (
            <div>
              <h1 className="text-lg font-semibold">GEHU Assistant</h1>
              <p className="text-xs text-muted-foreground">Graphic Era Hill University</p>
            </div>
          )}
        </div>
      </div>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className={collapsed ? "px-2" : ""}>STUDENT PORTAL</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink
                      to={item.url}
                      end
                      className="flex items-center gap-3 px-3 py-2 hover:bg-muted/50 rounded-md transition-colors"
                      activeClassName="bg-primary/10 text-primary font-medium"
                    >
                      <item.icon className="w-5 h-5 flex-shrink-0" />
                      {!collapsed && <span>{item.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup className="mt-auto">
          <SidebarGroupLabel className={collapsed ? "px-2" : ""}>QUICK STATS</SidebarGroupLabel>
          <div className={`${collapsed ? "px-2" : "px-4"} py-3 space-y-2`}>
            <div className="flex items-center justify-between">
              <span className="text-sm">Campus Status</span>
              {!collapsed && (
                <span className="flex items-center gap-1 text-sm">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  Online
                </span>
              )}
            </div>
            {!collapsed && (
              <>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Languages</span>
                  <span className="text-sm">EN • HI</span>
                </div>
              </>
            )}
          </div>
        </SidebarGroup>
      </SidebarContent>

      <div className="p-4 border-t border-border space-y-2">
        <div className="flex items-center gap-3 p-2 rounded-md bg-muted">
          <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
            <User className="w-4 h-4 text-white" />
          </div>
          {!collapsed && (
            <div className="flex-1 min-w-0">
              <p className="text-xs font-medium truncate">{userEmail}</p>
              <p className="text-xs text-muted-foreground">Student</p>
            </div>
          )}
        </div>
        {!collapsed && (
          <Button
            variant="outline"
            size="sm"
            className="w-full"
            onClick={handleLogout}
          >
            <LogOut className="w-4 h-4 mr-2" />
            Logout
          </Button>
        )}
      </div>
    </Sidebar>
  );
}

export function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <AppSidebar />
        <main className="flex-1 overflow-auto bg-background">
          {children}
        </main>
      </div>
    </SidebarProvider>
  );
}
