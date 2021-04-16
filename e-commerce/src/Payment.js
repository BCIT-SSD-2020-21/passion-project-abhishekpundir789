import React, { useState } from 'react'
import CheckoutProduct from './CheckoutProduct';
import './Payment.css';
import { useStateValue } from './StateProvider';
import { Link } from 'react-router-dom';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js'
import CurrencyFormat from 'react-currency-format';
import { getBasketTotal } from './reducer';

function Payment() {
    const [{basket, user}, dispatch] = useStateValue();

    const stripe = useStripe();
    const elements = useElements();

    const [error, setError] = useState(null);
    const [disabled, setDisabled] = useState(true);

    const handleSubmit = e => {

    }

    const handleChange = event => {
        setDisabled(event.empty);
        setError(event.error ? event.error.message : "");
    }

    return (
        <div className='payment'>
            <div className='payment__container'>
                <h1> Checkout (<Link to = '/checkout'>{basket?.length} items</Link>)</h1>
                <div className="payment__section">
                    <div className='payment__title'>
                        <h3>Delivery Address</h3>
                    </div>
                    <div className='payment__address'>
                        <p>{user?.email}</p>
                        <p>123 Surrey</p>
                        <p>BC, CA</p>
                    </div>
                </div>

                <div className="payment__section">
                    <div className='payment__title'>
                        <h3> Review Item and Delivery </h3>
                    </div>
                    <div className="payment__items">
                        {basket.map(item =>(
                            <CheckoutProduct 
                                title={item.title}
                                price={item.price}
                                image={item.image}
                            />
                        ))}
                    </div>
                </div>

                <div className="payment__section">
                    <div className='payment__title'>
                        <h3> Payment Method </h3>
                    </div>
                    <div className='payment__details'>
                        <form onSubmit={handleSubmit}>
                            <CardElement onChange={handleChange}/>
                            <div className='payment__priceContainer'>
                                <CurrencyFormat 
                                    renderText={(value) => (
                                        <>
                                        <h3>Order Total: {value}</h3>
                                        </>
                                    )}
                                    decimalScale={2}
                                    value={getBasketTotal(basket)}
                                    displayType={"text"}
                                    thousandSeparator={true}
                                    prefix={"$"}
                                />
                            </div>
                        </form>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Payment
