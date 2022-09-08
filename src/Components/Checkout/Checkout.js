import React from 'react'
import './Checkout.css'
import CurrencyFormat from 'react-currency-format'
import { useStateValue } from '../StateProvider'
import BasketItem from '../BasketItem/BasketItem'
import { getBasketTotal } from '../reducer'

import { useNavigate } from 'react-router-dom'

const Checkout = () => {
  const navigate = useNavigate()

  const [{ basket, user }] = useStateValue()

  return (
    <>
      <div className="checkout">
        <div className="ct_left">
          <div className="ct_left_heading">
            <h2>Your shopping Cart</h2>
            <h3>Hello, {user?.email.split("@")[0]}</h3>
          </div>

          {/* CheckOutProduct */}
          <div className="ct_left_checkoutproduct">
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
        <div className="ct_right">
          <div className="ct_right_top">
            <p>
              Your order is eligible for FREE Delivery. <br /> Select this option at checkout.</p>
            <a href="#">Details</a>
          </div>
          <div className="ct_right_middle">

            {/* Currency Format */}
            <CurrencyFormat
              renderText={(value) => (
                <>
                  <h4>Subtotal</h4>
                  <span>({basket?.length} item)</span>
                  :
                  <strong>{value}</strong>
                  <div className="ct_right_middle_chbk">
                    <input type="checkbox" name="giftbox" id="giftbox" />
                    <span>This order contains a gift</span>
                  </div>
                </>
              )}
              decimalScale={2}
              // value={getBasketTotal(basket)}
              value={getBasketTotal(basket)}
              displayType={'text'}
              thousandSeparator={true}
              prefix={'₹'}
            />
          </div>
          <div className="ct_right_bottom">
            <button onClick={e => { navigate('/payment') }}>
              Proceed to Buy
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Checkout