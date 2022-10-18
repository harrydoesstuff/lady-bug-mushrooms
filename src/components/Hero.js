import React from 'react';


function Hero() {
    return (
        <div className="hero min-h-screen bg-hero-image" >
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold text-gray-50">LadyBug Mushrooms</h1>
                    <p className="mb-5 text-gray-100">We aim to provide fresh gourmet mushrooms and mushroom kits to our local community.</p>
                    
                    <div className="btn-group btn-group-vertical lg:btn-group-horizontal">
                        <button className="btn hover:bg-primary-focus">Store</button>
                        <button className="btn hover:bg-primary-focus">Recipes</button>
                        <button className="btn hover:bg-primary-focus">About Us</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero;