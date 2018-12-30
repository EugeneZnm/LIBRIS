import React from 'react';
import BooksSection from '../components/books-section';
import Header from '../components/header';
import Footer from '../components/footer';
let BooksSectionPage = (props) => {
    return(
        <div className="has-fixed-footer">
            <Header/>
            <BooksSection/>
            <Footer/>    
        </div>
    
    )
}

export default BooksSectionPage;