
import { DashboardLayout } from "../../Layouts/DashboardLayout"

export const ServicesList = () => {
    const tableData = [
        {
            'id': 1,
            'name': 'Servicio 1',
            'description': 'Descripcion del servicio 1',
            'type': 'Tipo 1',
            'tax': '10%',
            'taxIncluded': 'No',
            'price': '$100',
        }
    ]

    return (
        <DashboardLayout>
        <div className="table-responsive mb-5">
            <div className="flex flex-col gap-4 p-4">
                <h1 className="text-2xl font-bold">Services List</h1>
                <p className="text-gray-600">List of all services</p>
            </div>
            <table>
                <thead>
                    <tr>
                        <th># </th>
                        <th>Nombre de Servicio</th>
                        <th>Descripcion</th>
                        <th>Tipo de servicio</th>
                        <th>
                            Impuesto
                        </th>
                        <th>
                            ¿Impuesto esta incluido?
                        </th>
                        <th>
                            Precio
                        </th>
                        <th className="text-center">Estado</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {tableData.map((data) => {
                        return (
                            <tr key={data.id}>
                                <td>{data.id}</td>
                                <td>{data.name}</td>
                                <td>{data.description}</td>
                                <td>{data.type}</td>
                                <td>{data.tax}</td>
                                <td>{data.taxIncluded}</td>
                                <td>{data.price}</td>
                                <td className="text-center">
                                    <span className="text-green-500">Activo</span>
                                </td>
                                <td className="text-center">
                                    <button className="text-blue-500">Editar</button>
                                    <button className="text-red-500">Eliminar</button>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
        </DashboardLayout>
    )
}
