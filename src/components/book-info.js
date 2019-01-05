import React from 'react';

let BookInfo = (props) => {
    return (
        <div className="book-info">
            <div className="book-title">
                <h1>{props.title}</h1>
            </div>
            <div className="book-author">
                <h1>{ "By: " + props.authors}</h1>
            </div>
            <div className={props.description}>
            </div>
        </div>
    )
}

export default BookInfo;