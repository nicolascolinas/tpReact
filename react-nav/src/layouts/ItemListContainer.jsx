import { useEffect, useState } from "react"
import { getFetch } from "../Helpers/getFetch"



const ItemListContainer = () => {
    const [productos, setProductos] = useState([])

    useEffect(() => {
        getFetch()//llamada a la api
            .then((resp) => {
                setProductos(resp)
            }).catch(err => console.log(err))
            .finally(() => console.log())
    }, [])
    console.log(productos)

    return (
        <div>
            {productos.map(prod => <div className='col-md-4 p-1' key={prod.id}>
                <div className="card w-100 mt-5" >
                    <div className="card-header">
                        {`${prod.nombre} - ${prod.descripcion}`}
                    </div>
                    <div className="card-body">
                    stock disponible: {prod.stock} 
                    </div>
                    <div className="card-footer">
                        <button className="btn btn-outline-primary btn-block">
                            detalle de la compra
                        </button>
                    </div>

                </div>
            </div>
            )}
        </div>
    )
}
export default ItemListContainer 