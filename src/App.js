import React, { Component } from 'react';
import Header from '../src/components/header';
import Footer from '../src/components/footer';
import BooksSection from '../src/pages/books-section';
import BookDetail from './pages/book-detail';
import PageNotFound from './pages/page-not-found';
class App extends Component {
  render() {
    return (
      <div>
      <Header/>
      <BooksSection/>
      <BookDetail/>
      <PageNotFound/>
      
      <Footer/>
      </div>
    );
  }
}

export default App;
