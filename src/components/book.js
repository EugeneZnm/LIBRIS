import React from 'react';
import {Link} from 'react-router-dom';

let Book = (props) => {
    console.log(props.book)
        // variable to access information on books from api
    let bookInfo = {
        image: props.book.volumeInfo.imageLinks? props.book.volumeInfo.imageLinks.thumbnail: "https://via.placeholder.com/350x150",
        title:props.book.volumeInfo.title,
        author:props.book.volumeInfo? props.book.volumeInfo.authors:"Author Unknown",
        id:props.book.volumeInfo.id,
    }
    return (
        <div className="book">
            <div className="book-img">
                <img src={bookInfo.image} alt={bookInfo.title}/>
            </div>
            <div className="book-info">
                <div className="book-title">
                    <h3>{bookInfo.title}</h3>
                </div> 
                <div className="book-author">
                    <p><em>{bookInfo.author}</em></p>
                </div>
                <div className="book-call-to-action">
                    <Link to={"/book/" + bookInfo.id} className="btn btn-highlight">Detail</Link> 
                </div>
            </div>
        </div>
    )
}
 export default Book;