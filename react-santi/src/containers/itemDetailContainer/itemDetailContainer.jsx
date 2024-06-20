import { Button } from 'antd'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const ItemDetailContainer = ({ idProduct }) => {
    const [product, setProduct] = useState()
    const { id } = useParams()

    console.log("ID del producto:", id)

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${idProduct}`)
            .then(res => res.json())
            .then(json => setProduct(json))
            .catch(e => console.error(e))
    }, [idProduct])

    return (
        <>  
        <div>
            <Link to={'/productDetail/:id'}>
                <Button>Ver detalles</Button>
            </Link>
        </div>
        </>

    )
}

export default ItemDetailContainer