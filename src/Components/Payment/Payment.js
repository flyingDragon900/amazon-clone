import React from 'react'
import { Link } from 'react-router-dom'
import BasketItem from '../BasketItem/BasketItem'
import { useStateValue } from '../StateProvider'
import './Payment.css'
const Payment = () => {
    const [{ basket, user }, dispatch] = useStateValue()
    return (
        <div className="payment">
            <h1>Checkout {<Link to='/checkout'>({basket?.length} Items )</Link>}</h1>
            {/* User info */}
            <div className="payment__section">
                <div className="dilivery__info">
                    <div className="dilivery__title">
                        <h1>Delivery Address</h1>
                    </div>
                    <div className="dilivery__user">
                        <h2><span>Name :</span> {user?.email.split('@')[0]}</h2>
                        <p><span>Address :</span> abc lane </p>
                        <p>React nagar Patna Bihar</p>
                    </div>
                </div>
            </div>

            <div className="payment__section">
                {/* Items */}
                <div className="item__info">
                    <div className="item__title">
                        <h1>Dilivery Products</h1>
                    </div>
                    <div className="item__products">
                        {
                            basket?.map(item => (
                                <BasketItem
                                    img={item.img}
                                    title={item.title}
                                    price={item.price}
                                    rating={item.rating}
                                />
                            ))
                        }
                    </div>
                </div>

            </div>

            <div className="payment__section">
                <div className="payment__section__total">
                    <div className="total_title">
                        <h1>Payment Method</h1>
                    </div>

                    <div className="total__details">
                        {/* Stripe code */}
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Payment