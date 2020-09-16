import React from 'react'
import {Link} from 'react-router-dom';
import '../App.css';


function Header()
{
    return (
        
        <header className="header">
            <h2> Todo List </h2>
            <div>
            <Link to="/" className='navbar-link'> Home </Link> | 
            <Link to="about" className='navbar-link'> About </Link>
            </div>
        </header>
    )
}

export default Header;