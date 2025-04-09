import { Navigate, Route, Routes } from "react-router-dom"
import { Home,ClientList, Analitics, ServicesList, ServicesCreate } from "../index";



export const DashboardRoutes = () => {
  return (
    <>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/clients" element={<ClientList />} />
            <Route path="/analytics" element={<Analitics />} />

            {/* servicios */}
            <Route path="/services" element={<ServicesList />} />
            <Route path="/services/create" element={<ServicesCreate/>} />

            {/* redirect / to /admin */}
            <Route path="/" element={<Navigate to="/" />} />
            

        </Routes>
    </>
  )
}
