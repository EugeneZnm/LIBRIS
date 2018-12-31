import React from 'react';

let BookInfo = (props) => {
    return (
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
    )
}

export default BookInfo;