import React, {Component} from 'react';
import BooksSection from '../components/books-section';
import Header from '../components/header';
import Footer from '../components/footer';
import axios from 'axios';

// "https://www.googleapis.com/books/v1/volumes?q=" + this.props.category + "&key=AIzaSyBzXK4qvC_w2HzHdro30RsoknE204BUBZA"

class BooksSectionPage extends Component {
    constructor(props){
        super(props);
        this.state = {
            books: [],
            isLoading: true,
        }
    }

    componentDidMount(){
        axios.get("https://www.googleapis.com/books/v1/volumes?q=" + this.props.categoryName + "&key=AIzaSyBzXK4qvC_w2HzHdro30RsoknE204BUBZA").then((response)=> {
            this.setState({
                books:response.data.items,
                isLoading: false,
            })
        })
    }

     render(){
        return(
            <div className="has-fixed-footer">
                <Header/>
                {this.state.isLoading?
                    <p>is Loading..</p>:
                    <BooksSection title={this.props.categoryName} books={this.state.books}/>
                }
                
                <Footer/>    
            </div>
                
                )
            }
        } 

BooksSectionPage.defaultProps ={
    categoryName: "HTML",
}
export default BooksSectionPage;