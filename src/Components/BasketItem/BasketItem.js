import React from 'react'
import { useStateValue } from '../StateProvider'
import './BasketItem.css'

const BasketIetm = (props) => {

    const [{ basket }, dispatch] = useStateValue()
    // console.log(basket);
    const removeFromBasket = () => {
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            title: props.title

        })
    }
    return (
        <div className="BasketItem">
            <div className="bi_left">
                <img src={props.img} alt="" />
            </div>

            <div className="bi_right">
                <h2>{props.title}</h2>
                <p>
                    <small>₹</small>
                    <strong>{props.price}</strong>
                </p>
                <div className='rating'>{Array(props.rating).fill().map((_, i) => (
                    <p>⭐</p>
                ))}
                </div>
                <button onClick={removeFromBasket}>
                    Remove from Basket
                </button>
            </div>
        </div >
    )
}

export default BasketIetm