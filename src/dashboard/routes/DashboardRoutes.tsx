import { Navigate, Route, Routes } from "react-router-dom"
import { Home,ClientList, Analitics } from "../index";



export const DashboardRoutes = () => {
  return (
    <>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/clients" element={<ClientList />} />
            <Route path="/analytics" element={<Analitics />} />

            {/* redirect / to /admin */}
            <Route path="/" element={<Navigate to="/" />} />
            

        </Routes>
    </>
  )
}
