import React from 'react';

let Header = (props) => {
    return(
        <header id="header">
            <div className="container" id="">
                <nav>
                    <a href="#" className="logo"><i className="fas fa-book-open"></i></a>
                    <ul className="categories">
                    <li className="active"><a href="#">HTML</a></li>
                    <li><a href="">CSS</a></li>
                    <li><a href="">JAVASCRIPT</a></li>
                    <li><a href="">REACT</a></li>
                    <li><a href="">NODEJS</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header;