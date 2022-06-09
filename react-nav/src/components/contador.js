const Carrito = () => {
    const [products, setProducts] = useState([]);
    const [count, setCount] = useState(1)
    const [cart, setCart] = useState(0);
    let stock = 5;

    const handleAdd = () => {
        count == stock ? alert('No hay mas stock') : setCount(count + 1);
    };
    const handleRest = () => {
        count == 0 ? alert('No hay mas productos') : setCount(count - 1);
    };
    const handleCart = () => {
        setCart(count)
        console.log(cart);
    };
    
    useEffect(() => {
        const get_data = () => {
            return new Promise((resolve) => {
                setTTimeout(() => {
                    resolveTo(data);
                }, 2000)
            });
        };
        get_data()
            .then((resp) =>{
            setProducts(resp);
            })
        .catch ((err) => console.log(err))
    }, [])

return (
    <>
        <div className="container py-5">
            <ItemList products={products} />
            <ItemCount
                stock={stock}
                add={handleAdd}
                rest={handleRest}
                addCart={handleCart}
                count={count}
         />
        </div>
    </>
)
}

export default Carrito