import { useEffect, useState } from "react";
import { getProductoById } from "../../../asyncMock";
import {ItemDetail } from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";


export const ItemDetailContainer = () => {
    const { id } = useParams();
    const [item, setItem] = useState(null);

    useEffect ( () => {
        getProductoById(id)
        .then(resp => setItem(resp))
        .catch(error => console.log(error));

    }, [])
    return(
        <>
        {item && <ItemDetail {...item} />}
        </>
    )

}