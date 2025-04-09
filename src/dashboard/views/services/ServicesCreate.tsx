import { DashboardLayout } from "../../Layouts/DashboardLayout"


export const ServicesCreate = () => {
    return (
        <DashboardLayout>
            <div className="flex flex-col gap-4 p-4">
                <h1 className="text-2xl font-bold">Create Service</h1>
                <p className="text-gray-500">Create a new service.</p>
            </div>

            <form className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                        <label htmlFor="gridEmail">Nombre</label>
                        <input id="gridEmail" type="text" placeholder="Servicio de prueba" className="form-input" />
                    </div>
                    <div>
                        <label htmlFor="gridPassword">Tipo de Servicio</label>

                        <select id="gridPassword" className="form-select text-white-dark">
                            <option>Servicio</option>
                            <option>...</option>
                        </select>
                    </div>
                </div>
                <div>
                    <label htmlFor="gridPrice">Valor</label>
                    <input id="gridPrice" type="text" placeholder="Enter Value" className="form-input" />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div >
                        <label htmlFor="gridTaxes">Impuesto (%)</label>
                        <select name="taxes" id="gridTaxes" className="form-select text-white-dark">
                            <option value="">IVA</option>
                            <option value="">...</option>
                        </select>
                    </div>
                    <div >
                        {/* esta inluido */}
                        <label htmlFor="gridIncluded">Incluido</label>
                        <select name="included" id="gridIncluded" className="form-select text-white-dark">
                            <option value="">No</option>
                            <option value="">...</option>
                        </select>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
                    <div >
                        <label htmlFor="gridStatus">Estado</label>
                        <select name="status" id="gridStatus" className="form-select text-white-dark">
                            <option value="">Activo</option>
                            <option value="">Inactivo</option>
                        </select>
                    </div>
                    
                </div>

                <label htmlFor="gridPassword">Descripción</label>

                <textarea name="description" id="gridPassword"
                    cols={30} rows={10} placeholder="Enter Description" className="form-textarea mt-2"
                ></textarea>

               <div className="flex justify-start mt-4">
                <button type="submit" className="btn btn-primary !mt-6">
                        Crear
                    </button>
                <button type="button" className="btn btn-secondary !mt-6 ml-2">
                        Cancelar
                    </button>
               </div>
            </form>
        </DashboardLayout>
    )
}
