import React, {Component} from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import BookDetail from '../components/book-detail';
import axios from 'axios';
import Loader from '../components/loader';

class BookDetailPage extends Component{

    constructor(props){
        super(props);
        this.state = {
            book:{},
            isLoading: true,
        }
    }
    componentDidMount(){
        axios.get("https://www.googleapis.com/books/v1/volumes/" + this.props.bookID)
            .then((response)=> {
            this.setState({
                isLoading: false,
                book:response.data,
            })
        })
    }
    render(){
        return(
            <div className="has-fixed-footer">
                <Header/>
                {this.state.isLoading?
                    <Loader/>:
                    <BookDetail book={this.state.book}/>
                }
                <Footer/>
            </div>
            
        )
    }
    
}

export default BookDetailPage;