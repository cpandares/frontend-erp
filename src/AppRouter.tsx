import {  Navigate, Route, Routes } from "react-router-dom";
import { AuthRoutes } from "./auth";
import { DashboardRoutes } from "./dashboard/routes/DashboardRoutes";
import { useAuthStore } from "./hooks";
import { useEffect } from "react";




export const AppRouter = () => {

   const { status,startRenewToken } = useAuthStore();
    
   useEffect(()=>{
    startRenewToken();
   },[])

   if(status === 'checking') {
        return (
            <div className="flex justify-center items-center h-screen">
                <h1 className="text-2xl text-white">Loading...</h1>
            </div>
        )
    }

  return (
    <>
        <Routes>
            {
                

                (status === 'not-authenticated') 
                ? (
                    <>
                     <Route path="/auth/*" element={<AuthRoutes />} />
                        <Route path="/*" element={<Navigate to="/auth/login" />} />
                    </>
                ) : (
                    <>
                    <Route path="/admin/*" element={<DashboardRoutes />} />
                   <Route path="/*" element={<Navigate to="/admin" />} />
                    </>
                )



            }
            
            
           
           
            
            
            
        </Routes>
    </>
  )
}
