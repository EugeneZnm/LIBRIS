import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
let PageNotFound = (props) => {
    return (
        <div class="has-fixed-footer">
        <Header/>
            <section id="page-not-found">
                <div className="container" id="">
                    <h1>Page not found!</h1>
                </div>  
            </section>
        <Footer/>    
        </div>
        
    )
}

export default PageNotFound;