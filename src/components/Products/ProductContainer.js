import React from 'react';
import ProductCard from './ProductCard';
import mushroom1 from './productImages/mushroom1.jpeg';
import mushroom2 from './productImages/mushroom2.jpeg';
import mushroomgod from './productImages/mushroomgod.jpeg';


const products = [
    {
        id: 1,
        name: "Mushroom",
        description: "I'm a mushroom. You can eat me.",
        price: 120,
        image: mushroom1
    },
    {
        id: 2,
        name: "Also a mushroom",
        description: "Ignore that first guy. I'm the only mushroom here. I'm a really fungi (lol get it?)",
        price: 79,
        image: mushroom2
    },
    {
        id: 3,
        name: "Mushroom maker",
        description: "Well to be honest, fuck both of those guys. I MAKE mushrooms. I AM GOD",
        price: 25,
        image: mushroomgod
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