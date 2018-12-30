import React from 'react';
import {NavLink, Link} from 'react-router-dom';

let Header = (props) => {
    return(
        <header id="header">
            <div className="container" id="">
                <nav>
                    <Link to="/" className="logo"><i className="fas fa-book-open"></i></Link>
                    <ul className="categories">
                        <li className="active"><NavLink to="/books/category/HTML">HTML</NavLink></li>
                        <li><NavLink to="/books/category/CSS">CSS</NavLink></li>
                        <li><NavLink to="/books/category/JAVASCRIPT">JAVASCRIPT</NavLink></li>
                        <li><NavLink to="/books/category/REACT">REACT</NavLink></li>
                        <li><NavLink to="/books/category/NODEJS">NODEJS</NavLink></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header;