import React, { useEffect, useState } from 'react'

const ItemListContainer = ({categoria}) => {
    const [products, setProducts] = useState([])
    
    useEffect(() => {

        if(categoria === 'todos'){
            fetch('https://fakestoreapi.com/products')
                .then(res=>res.json())
                .then(json => setProducts(json))
                .catch(e => console.error(e))
        } else {
            fetch(`https://fakestoreapi.com/products/category/${categoria}`)
            .then(res=>res.json())
            .then(json => setProducts(json))
            .catch(e => console.error(e))
        }

    }, [categoria])
console.log(categoria)
    return (
        
        <div>
            {products.map((product) => <p key={product.id}>{product.title}</p>)}
        </div>
    )
}

export default ItemListContainer