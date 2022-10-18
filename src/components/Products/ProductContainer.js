import React from 'react';
import ProductCard from './ProductCard';

const products = [
    {
        id: 1,
        name: "Shoes",
        description: "Please put your feet in me. I'm not spiky or mouldy I promise. Please",
        price: 120,
        image: ""
    },
    {
        id: 2,
        name: "Pants",
        description: "You need me to hide your parts that need hiding. I won't touch them. I just need to hide them. I don't get any pleasure from this.",
        price: 79,
        image: ""
    },
    {
        id: 3,
        name: "Shirts",
        description: "Once again. I promise I don't get pleasure from this. Now let me cover your chesticles. Please. I'm begging you.",
        price: 25,
        image: ""
    },
];

function ProductContainer() {

    const productList = products.map(product => 
        <ProductCard 
            key={product.id} 
            name={product.name} 
            description={product.description} 
            price={product.price}
            image={product.image}
            />)
    
    return (  
        <div className="flex justify-center align-center p-20 space-x-9">
                {productList}
        </div>
    );
}

export default ProductContainer;