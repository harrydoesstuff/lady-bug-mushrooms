import React from 'react';


function Header() {
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><a>About Us</a></li>
                        <li><a>Store</a></li>
                        <li><a>Recipes</a></li>
                        <li><a>Blog</a></li>
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-xl">LadyBug Mushrooms</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    <li><a>About Us</a></li>
                    <li><a>Store</a></li>
                    <li><a>Recipes</a></li>
                    <li><a>Blog</a></li>
                </ul>
            </div>
            <div className="navbar-end">
                {/* <a className="btn">Get started</a> */}
                <div className="grid grid-flow-col gap-4 mr-4">
                    <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg></a>
                </div>
            </div>
        </div>
    );
}

export default Header;