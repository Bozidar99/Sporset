import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function SingleProductPage() {
    const [singleProduct, setSingleProduct] = useState(null); // Promenio ime state-a u singleProduct
    const { id } = useParams();

    useEffect(() => {
        fetch(`https://dummyjson.com/products/${id}`)
            .then(res => res.json())
            .then(data => setSingleProduct(data))
            .catch(error => console.error('Error fetching product:', error));
    }, [id]); // Dodajte id kao zavisnost

    if (!singleProduct) {
        return <div>Loading...</div>; // Prikazuje "Loading..." dok se podaci učitavaju
    }

    return (
        <div className='container mx-auto  items-center justify-center bg-gray-200 text-center text-2xl text-bold'>
            <strong><h2 className='text-center uppercase text-3xl '>Single Product</h2></strong>
            {singleProduct.images && singleProduct.images.length > 0 && (
                <img src={singleProduct.images[0]} alt={singleProduct.title} /> // Pretpostavljam da je images niz
            )}
            <strong><h1><em>Naziv:</em> {singleProduct.title}</h1></strong>
            <strong><p><em>Kategorija:</em> {singleProduct.category}</p></strong>
            <strong><p><em>Opis:</em> {singleProduct.description}</p></strong>
            <strong><p><em>Cijena:</em> {singleProduct.price} BAM</p></strong>
            <strong><p><em>Brend:</em> {singleProduct.brand}</p></strong>
        </div>
    );
}

export default SingleProductPage;

