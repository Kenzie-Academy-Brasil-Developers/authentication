import { Route, Routes } from "react-router-dom"
import { ProtectedRoutes } from "../components/ProtectedRoutes"
import { DashboardPage } from "../pages/DashboardPage"
import { LoginPage } from "../pages/LoginPage"
import { RegisterPage } from "../pages/RegisterPage"

export const RoutesMain = () => {
    return(
        <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/dashboard" element={<ProtectedRoutes />}>
                <Route index element={<DashboardPage />} />
            </Route>            
        </Routes>
    )
}