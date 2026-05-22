import { useAuthStore } from "../store/useAuthStore";
import { Navigate, Outlet } from "react-router-dom"

export default function ProtectedRoute(){
    const isAuthenticited = useAuthStore((state) => state.isAuthenticated);
    
    if (!isAuthenticited){
        return <Navigate to="/login" replace/>;
    
    }
    return <Outlet />;
}