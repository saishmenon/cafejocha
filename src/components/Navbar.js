import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar(props){
    return(
        <nav className="flex justify-between items-center h-16 bg-white text-black relative shadow-sm" role="navigation">
            <Link to="/" className="pl-8">CJ</Link>
            <div className="px-4 cursor-pointer md:hidden" onClick={ props.toggle }>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
            </div>
            <div className="div pr-8 md:block hidden">
                <Link className="p-4" to="/">Home</Link>
                <Link className="p-4" to="/menu">Menu</Link>
                <Link className="p-4" to="/about">About</Link>
                <Link className="p-4" to="/contact">Contact</Link>
            </div>
        </nav>
    );
}