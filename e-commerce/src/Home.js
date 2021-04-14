import React from 'react'
import './Home.css';
import Product from './Product';

function Home() {
    return (
        <div className ="home">
            <div className="home__container">
                <img className= "home__image" src="https://i.gadgets360cdn.com/large/best_movies_on_amazon_prime_august_2020_1597408336879.jpg" alt="prime video source" />
            
            <div className="home__row">
                <Product title='Life After Death' price={29.99} image="https://www.amazon.ca/images/I/41a20gOZbcL._SX327_BO1,204,203,200_.jpg" />

                <Product title='Fitness Bracelet PPG Photoelectric Monitoring Technology' price={80.99} image="https://www.amazon.ca/images/I/71Mv9KAwAzL._AC_UL480_FMwebp_QL65_.jpg" />
            </div>

            <div className="home__row">
                <Product title = "SAMSUNG 27-inch M5 Smart Monitor with Mobile Connectivity, FHD, Remote Access, Office 365 (LS27AM500NNXZA), Black" price={200.00} image = "https://www.amazon.ca/images/I/71tHINjxrCL._AC_SX425_.jpg" />
                <Product title = "Canon Rebel SL3 Digital Camera with 18-55mm Lens, Black" price={650.87} image = "https://www.amazon.ca/images/I/71-YNbmRcDL._AC_SL1500_.jpg"  />
                <Product title = "HeimVision HM203 Security Camera, 1080P Surveillance WiFi Camera with Night Vision" price={54.99} image = "https://www.amazon.ca/images/I/71yKQ6vWgiL._AC_SL1500_.jpg"  />
            </div>

            <div className="home__row">
                <Product title = "Samsung 55' TU8000 4K Ultra HD HDR Smart TV (UN55TU8000FXZC)" price={845.28} image = "https://www.amazon.ca/images/I/914kUfj3ypL._AC_SL1500_.jpg" />
            </div>

            </div>  
        </div>
    )
}

export default Home
