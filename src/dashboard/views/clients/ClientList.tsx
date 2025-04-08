import { DashboardLayout } from "../../Layouts/DashboardLayout"


export const ClientList = () => {
  return (
    <DashboardLayout>
      <div className="flex flex-col gap-4 p-4">
        <h1 className="text-2xl font-bold">Client List</h1>
        <p className="text-gray-600">List of all clients</p>
      </div>
    </DashboardLayout>
  )
}
