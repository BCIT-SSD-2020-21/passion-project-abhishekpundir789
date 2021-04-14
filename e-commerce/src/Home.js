import React from 'react'
import './Home.css';
import Product from './Product';

function Home() {
    return (
        <div className ="home">
            <div className="home__container">
                <img className= "home__image" src="https://i.gadgets360cdn.com/large/best_movies_on_amazon_prime_august_2020_1597408336879.jpg" alt="prime video source" />
            
            <div className="home__row">
                <Product />
                <Product />
            </div>

            <div className="home__row">
                { /*Product*/ }
                { /*Product*/ }
                { /*Product*/ }
            </div>

            <div className="home__row">
                { /*Product*/ }
            </div>

            </div>  
        </div>
    )
}

export default Home
