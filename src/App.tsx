import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import WorkspacePicker from "./pages/workspace/WorkspacePicker";
import { Overview } from "./components/dashboard/Overview";
import Profile from "./pages/Profile";
import Listings from "./pages/Listings";
import Transactions from "./pages/Transactions";
import NotFound from "./pages/NotFound";
import Index from "./pages/Index";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <TooltipProvider>
          <Toaster />
          <Sonner />

          {/* Clerk Authentication UI */}
          <header style={{ padding: "1rem", display: "flex", justifyContent: "space-between" }}>
            <SignedOut>
              <SignInButton />
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </header>

          <Routes>
            <Route path="/" element={<WorkspacePicker />} />
            <Route path="/dashboard" element={<Overview />} />
            <Route path="/listings" element={<Listings />} />
            <Route path="/transactions" element={<Transactions />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </TooltipProvider>
      </BrowserRouter>
    </QueryClientProvider>
  );
};

export default App;