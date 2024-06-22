import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${id}`)
            .then(res => res.json())
            .then(json => setProduct(json))
            .catch(e => console.error(e));
    }, [id]);

    if (!product) return <div>Loading...</div>;

    return (
        <div>
            <h1>{product.title}</h1>
            <p>{product.description}</p>
            <p>${product.price}</p>
            <img src={product.image} alt={product.title} />
        </div>
    );
}

export default ItemDetailContainer;
