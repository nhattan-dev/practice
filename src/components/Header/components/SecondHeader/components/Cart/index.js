import React from 'react'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import EndPoint from '../../../../../../helper/endpoint'
import "./Cart.css"

export default function Cart() {
    return (
        <div className="cart__content__icon">
            <Link to={EndPoint.Cart}>
                <AiOutlineShoppingCart className="cart__icon" type="button" />
            </Link>
        </div>
    )
}
