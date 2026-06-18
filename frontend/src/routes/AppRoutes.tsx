import { BrowserRouter, Routes, Route } from "react-router-dom";

import AIAssistantPage from "../pages/AIAssistantPage";
import AdminDashboardPage from "../pages/AdminDashboardPage";
import AnalyticsPage from "../pages/AnalyticsPage";
import ThreatCenterPage from "../pages/ThreatCenterPage";
import LandingPage from "../pages/LandingPage";
import FileManagerPage from "../pages/FileManagerPage";
import ActivityPage from "../pages/ActivityPage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import ProtectedRoute from "../components/ProtectedRoute";
import DashboardPage from "../pages/DashboardPage";


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