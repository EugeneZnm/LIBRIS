import React, { Component } from 'react';
import Header from '../src/components/header';
import Footer from '../src/components/footer';
import BooksSection from '../src/pages/books-section';
import BookDetail from './pages/book-detail';
class App extends Component {
  render() {
    return (
      <div>
      <Header/>
      <BooksSection/>
      <BookDetail/>


    

      <section id="page-not-found">
        <div className="container" id="">
            <h1>Page not found!</h1>
        </div>
        
      </section>
      
      <Footer/>
    </div>
    );
  }
}

export default App;
