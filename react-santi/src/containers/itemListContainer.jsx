import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const ItemListContainer = () => {
    const [products, setProducts] = useState([]);
    const { idCategory } = useParams();

    useEffect(() => {
        const url = idCategory 
            ? `https://fakestoreapi.com/products/category/${idCategory}`
            : 'https://fakestoreapi.com/products';

        fetch(url)
            .then(res => res.json())
            .then(json => setProducts(json))
            .catch(e => console.error(e));
    }, [idCategory]);
    
    return (
        <div>
            {products.map(product => (
                <div key={product.id}>
                    <Link to={`/item/${product.id}`}>
                        <p>{product.title}</p>
                    </Link>
                </div>
            ))}
        </div> 
    );
}

export default ItemListContainer;
