import { Button } from 'antd'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

const ItemListContainer = ({categoria}) => {
    const [products, setProducts] = useState([])
    const {idCategory} = useParams()

    console.log("Parametros:", idCategory)
    useEffect(() => {

        if(categoria === 'todos'){
            fetch('https://fakestoreapi.com/products')
                .then(res=>res.json())
                .then(json => setProducts(json))
                .catch(e => console.error(e))
        } else {
            fetch(`https://fakestoreapi.com/products/category/${idCategory}`)
            .then(res=>res.json())
            .then(json => setProducts(json))
            .catch(e => console.error(e))
        }

    }, [idCategory])
    
    return (
        <div>
            {products.map((product) => <p key={product.id}>{product.title}</p>)}
            
        </div> 
    )
}

export default ItemListContainer