import React from 'react';

let BookDetail = (props) => {
    return(
        <section id="book-detail">
            <div className="container">
                <div className="book-container">
                    <div className="book-img">
                        <img src="https://via.placeholder.com/250x200" alt=""/>
                    </div>
                    <div className="book-info">
                        <div className="book-title">
                            <h1>Book Title</h1>
                        </div>
                        <div className="book-author">
                            <h1>Book Author</h1>
                        </div>
                        <div className="book-description">
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        </div>
                    </div>
                    <div className="book-review-container">
                        <div className="book-stars">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        </div>
                        <div className="book-review" id="">
                        <p>(11)</p>
                        </div>
                    </div>
                </div>
            </div> 
        </section>
    )
}

export default BookDetail;