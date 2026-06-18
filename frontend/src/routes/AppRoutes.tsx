import { BrowserRouter, Routes, Route } from "react-router-dom";

import LandingPage from "../pages/LandingPage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";

import DashboardPage from "../pages/DashboardPage";
import FileManagerPage from "../pages/FileManagerPage";
import ThreatCenterPage from "../pages/ThreatCenterPage";
import ActivityPage from "../pages/ActivityPage";
import AnalyticsPage from "../pages/AnalyticsPage";
import AIAssistantPage from "../pages/AIAssistantPage";
import AdminDashboardPage from "../pages/AdminDashboardPage";

import ProtectedRoute from "../components/ProtectedRoute";


export default function AppRoutes() {

return (

<BrowserRouter>

<Routes>


{/* Public */}

<Route 
path="/" 
element={<LandingPage />} 
/>


<Route 
path="/login" 
element={<LoginPage />} 
/>


<Route 
path="/register" 
element={<RegisterPage />} 
/>




{/* Protected */}

<Route
path="/dashboard"
element={
<ProtectedRoute>
<DashboardPage/>
</ProtectedRoute>
}
/>



<Route
path="/files"
element={
<ProtectedRoute>
<FileManagerPage/>
</ProtectedRoute>
}
/>



<Route
path="/threats"
element={
<ProtectedRoute>
<ThreatCenterPage/>
</ProtectedRoute>
}
/>



<Route
path="/activity"
element={
<ProtectedRoute>
<ActivityPage/>
</ProtectedRoute>
}
/>



<Route
path="/analytics"
element={
<ProtectedRoute>
<AnalyticsPage/>
</ProtectedRoute>
}
/>



<Route
path="/assistant"
element={
<ProtectedRoute>
<AIAssistantPage/>
</ProtectedRoute>
}
/>



<Route
path="/admin"
element={
<ProtectedRoute>
<AdminDashboardPage/>
</ProtectedRoute>
}
/>


</Routes>


</BrowserRouter>

);

}