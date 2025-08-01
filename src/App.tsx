
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Services from "./pages/Services";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import BecomeProvider from "./pages/BecomeProvider";
import Connect from "./pages/Connect";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import FunFacts from "./pages/FunFacts";
import TalkSupport from "./pages/TalkSupport";
import CareTakers from "./pages/CareTakers";
import Tutors from "./pages/Tutors";
import OtherServices from "./pages/OtherServices";
import Childcare from "./pages/Childcare";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/become-provider" element={<BecomeProvider />} />
          <Route path="/connect" element={<Connect />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/fun-facts" element={<FunFacts />} />
          <Route path="/talk-support" element={<TalkSupport />} />
          <Route path="/care-takers" element={<CareTakers />} />
          <Route path="/tutors" element={<Tutors />} />
          <Route path="/other-services" element={<OtherServices />} />
          <Route path="/childcare" element={<Childcare />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
