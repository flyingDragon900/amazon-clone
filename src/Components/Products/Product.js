
import React from 'react'
import { useStateValue } from '../StateProvider'
import './Product.css'

const Product = (props) => {

    const [{ basket }, dispatch] = useStateValue()

    const addToBasket = () => {
        // Dispatch the item into the data layer
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                title: props.title,
                desc: props.desc,
                img: props.img,
                price: props.price,
                rating: props.rating
            }
        })

    }

    return (
        <>
            <div className="product">
                <div className="pt">
                    <h2>{props.title}</h2>
                </div>
                <div className="p_price">
                    <span>₹</span>
                    <strong>{props.price}</strong><small>.99</small>
                </div>
                <div className="p_rating">
                    {Array(props.rating).fill().map((_, i) => <p>⭐</p>)}
                </div>
                <div className="p_desc">
                    <p>{props.desc.substring(0, 100)}...</p>
                </div>
                <div className="pm">
                    <div className="pmi">
                        <img src={props.img} alt="" />
                    </div>
                </div>
                <div className="pb">
                    <button onClick={addToBasket}>Add to basket</button>
                </div>
            </div>
        </>
    )
}

export default Product