import React from 'react';
import { Link } from "react-router-dom";
import './Header.css'

const Header = () => {
    return (
        <div >
            <div>
                <h2 style={{ color: 'white', textAlign: 'center' }}>NEWS</h2>
            </div>
            <nav className="nav">
                <ul>

                    <li>
                        <Link to="/home">Home</Link>
                    </li>
                    <li>
                        <Link to="/work">Work</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/blog">Blog</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>

                </ul>
            </nav>
        </div>
    );
};

export default Header;