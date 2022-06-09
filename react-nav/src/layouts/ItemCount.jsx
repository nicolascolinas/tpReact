import { useState } from "react"
function ItemCount({stock, initial}){
    const [ count, setCount  ] = useState((initial= 0))

    function agregar() {
        setCount(count + 1)
        if (count > (9)) {
           setCount(count + 1)
        }
    }
    function restar() {
        
        setCount(count - 1)
        if (count <= (0)) {
        setCount(count - 1)
                  
        }
    }
    return (
        <div>
            <h2>la cantidad es = {count} </h2>
            <button onClick={agregar}>SUMAR</button>
            <button onClick={restar} id='botond'>RESTAR</button>
            <button onClick={()=> console.log(count)}>Agregar</button>
        </div>
    )
}

export default ItemCount