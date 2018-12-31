import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import BookDetail from '../components/book-detail';

let BookDetailPage = (props) => {
    return(
        <div className="has-fixed-footer">
            <Header/>
            <BookDetail/>
            <Footer/>
        </div>
        
    )
}

export default BookDetailPage;