import { getProductos } from "../../../asyncMock";
import { useState, useEffect } from "react"
import { ItemList } from "../ItemList/ItemList"
import { useParams } from "react-router-dom";

export const ItemListContainer = () => {

    const { category } = useParams();

    const [productos, setProductos] = useState([])
    const [isLoading, setIsLoading] = useState(true);


    useEffect(() => {
        setIsLoading(true)
        getProductos()
            .then(resp => {
                if (category) {
                    const productosFilter = resp.filter((producto) => producto.category === category);
                    
                    if(productosFilter.length > 0) {
                        setProductos(productosFilter)
                    }else {
                        setProductos(resp);
                    }

                }else {
                    setProductos(resp);
                }
                setIsLoading(false);
            })
            .catch((error) => console.log(error));
        }, [category]);
    return (
        <>
            {isLoading ? <h3>Se estan cargando los productos</h3> : <ItemList productos={productos} />}
        </>
    )
        ;



}



export default ItemListContainer;