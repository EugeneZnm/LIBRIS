import React from 'react';
import BooksContainer from '../components/books-container';
let BooksSection =(props) => {
    return (
        <section id="books-section">
        <div className="container">
            <div className="section-title">
                <h1>HTML BOOKS</h1> 
            </div>
            <BooksContainer/>        
        </div>
    </section>
    )

}
export default BooksSection;