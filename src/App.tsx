import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MainLayout } from "./layouts/MainLayout";
import { AuthProvider } from "./components/AuthProvider";
import Login from "./pages/Login";
import ChatAssistant from "./pages/ChatAssistant";
import StudentERP from "./pages/StudentERP";
import ERPPortal from "./pages/ERPPortal";
import Timetable from "./pages/Timetable";
import Examinations from "./pages/Examinations";
import Programs from "./pages/Programs";
import FacultyDirectory from "./pages/FacultyDirectory";
import CampusLocations from "./pages/CampusLocations";
import Analytics from "./pages/Analytics";
import FAQManagement from "./pages/FAQManagement";
import AdminFAQ from "./pages/AdminFAQ";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route
              path="/*"
              element={
                <MainLayout>
                  <Routes>
                    <Route path="/" element={<ChatAssistant />} />
                    <Route path="/student-erp" element={<StudentERP />} />
                    <Route path="/erp-portal" element={<ERPPortal />} />
                    <Route path="/timetable" element={<Timetable />} />
                    <Route path="/examinations" element={<Examinations />} />
                    <Route path="/programs" element={<Programs />} />
                    <Route path="/faculty" element={<FacultyDirectory />} />
                    <Route path="/campus" element={<CampusLocations />} />
                    <Route path="/analytics" element={<Analytics />} />
                    <Route path="/faq" element={<FAQManagement />} />
                    <Route path="/admin/faq" element={<AdminFAQ />} />
                    <Route path="*" element={<NotFound />} />
                  </Routes>
                </MainLayout>
              }
            />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
