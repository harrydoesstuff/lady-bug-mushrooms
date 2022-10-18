import React from 'react';

function Home() {
    return (
        <div className="hero min-h-screen bg-hero-image" >
        {/* // <div className="hero min-h-screen bg-gradient-to-r from-indigo-300 to-purple-400" > */}
            <div className="hero-overlay"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold text-gray-50">LadyBug Mushrooms</h1>
                    <p className="mb-5 text-gray-100">We aim to provide fresh gourmet mushrooms and mushroom kits to our local community.</p>
                    
                    {/* <div className="btn-group btn-group-vertical lg:btn-group-horizontal shadow-2xl">
                        <button className="btn hover:bg-primary-focus"><Link to="/store">Store</Link></button>
                        <button className="btn hover:bg-primary-focus"><Link to="/recipes">Recipes</Link></button>
                        <button className="btn hover:bg-primary-focus"><Link to="/aboutus">About Us</Link></button>
                    </div> */}
                </div>
            </div>
        </div>
    );
}

export default Home;