import React, { Component } from 'react';

// importing browser router switch and route from react router dom
import {BrowserRouter, Switch, Route}  from 'react-router-dom';
import Header from '../src/components/header';
import Footer from '../src/components/footer';
import BooksSectionPage from '../src/pages/books-section';
import BookDetail from './pages/book-detail';
import PageNotFound from './pages/page-not-found';
class App extends Component {
  render() {
    return ( 
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={BooksSectionPage} />
          <Route path="/books/category/:categoryName" exact render={(props) =>{
            let {categoryName} = props.match.params;
            return <BooksSectionPage categoryName={categoryName}/>
            }}/>
          <Route path="/book/:bookID" component={BookDetail}/>
          <Route component={PageNotFound}/>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
