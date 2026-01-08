import { BrowserRouter, Routes, Route } from "react-router";
import Home from "../pages/home";
import NotFound from "../pages/notFound";
import Login from "../pages/login";
import Register from "../pages/register";
import Dashboard from "../pages/dashboard";
import Settings from "../pages/settings";
import Report from "../pages/report";
import Advisory from "../pages/advisory";
import Expenses from "../pages/expenses";
import Destination from "../pages/destination";
import History from "../pages/history";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        {/* index route: renders at root "/" by default */}
        <Route index element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/report" element={<Report />} />
        <Route path="/advisory" element={<Advisory />} />
        <Route path="/expenses" element={<Expenses />} />
        <Route path="/destinations" element={<Destination />} />
        <Route path="/destinations/:id" element={<Destination />} />
        <Route path="/history" element={<History />} />
        {/* redirect unknown routes to Home as the default landing page */}
  
      </Routes>
    </BrowserRouter>
  );
}
