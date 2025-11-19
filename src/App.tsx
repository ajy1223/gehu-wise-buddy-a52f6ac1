import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MainLayout } from "./layouts/MainLayout";
import ChatAssistant from "./pages/ChatAssistant";
import StudentERP from "./pages/StudentERP";
import ERPPortal from "./pages/ERPPortal";
import Timetable from "./pages/Timetable";
import Programs from "./pages/Programs";
import FacultyDirectory from "./pages/FacultyDirectory";
import CampusLocations from "./pages/CampusLocations";
import Analytics from "./pages/Analytics";
import FAQManagement from "./pages/FAQManagement";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <MainLayout>
          <Routes>
            <Route path="/" element={<ChatAssistant />} />
            <Route path="/student-erp" element={<StudentERP />} />
            <Route path="/erp-portal" element={<ERPPortal />} />
            <Route path="/timetable" element={<Timetable />} />
            <Route path="/programs" element={<Programs />} />
            <Route path="/faculty" element={<FacultyDirectory />} />
            <Route path="/campus" element={<CampusLocations />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/faq" element={<FAQManagement />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </MainLayout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
