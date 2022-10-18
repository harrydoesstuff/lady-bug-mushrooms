import React from 'react';
import { Link } from 'react-router-dom';


function Header() {
    return (
        <div className="navbar bg-gradient-to-r from-indigo-300 to-purple-400 flex justify-center drop-shadow-2xl rounded-b-full opacity-90 absolute">
            <div className="btn-group btn-group-vertical lg:btn-group-horizontal">
                <button className="btn hover:bg-primary-focus"><Link to="/store">Store</Link></button>
                <button className="btn hover:bg-primary-focus"><Link to="/recipes">Recipes</Link></button>
                <button className="btn hover:bg-primary-focus"><Link to="/aboutus">About Us</Link></button>
            </div>
        </div>
    );
}

export default Header;