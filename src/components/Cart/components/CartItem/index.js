import React, { useEffect, useReducer } from 'react'
import { Card, Col, Figure, Form, Row } from 'react-bootstrap'
import InputNumber from "../../../InputNumber"
import { Products } from '../../../Home'

const initState = {
    loading: false,
    data: null,
    error: null,
}

const productReducer = (state, action) => {
    switch (action.type) {
        case 'FETCH_PRODUCT':
            return {
                ...state,
                loading: true
            }
        case 'FETCH_PRODUCT_SUCCESS':
            return {
                ...state,
                loading: false,
                data: action.data
            }
        case 'FETCH_PRODUCT_ERROR':
            return {
                ...state,
                loading: false,
                data: null,
                error: action.data
            }
        default:
    }
}

export default function CartItem(props) {
    const [product, productDispatch] = useReducer(productReducer, initState)

    const fetchProduct = () => {
        productDispatch({
            type: 'FETCH_PRODUCT'
        })
        const p = props.product && Products.find(e => e.id === props.product.id)
        p
            ?
            productDispatch({
                type: 'FETCH_PRODUCT_SUCCESS',
                data: p,
            })
            :
            productDispatch({
                type: 'FETCH_PRODUCT_ERROR',
                data: 'No product match',
            })
    }

    useEffect(() => {
        fetchProduct()
        // eslint-disable-next-line
    }, [])

    const formatCurrency = (e) => {
        return e.toString().split("").reverse().join("").match(/.{1,3}/g).join(',').split("").reverse().join("")
    }

    return (
        <Row className="Cart__s">
            <div className="Cart__w-40 d-inline d-flex">
                <Form.Check
                    className="d-inline pe-4 Cart__all"
                    checked={props.product && props.product.selected}
                    onChange={() => props.onChange(props.product && props.product.id)}
                />  
                <Row>
                    <Col md="auto">
                        <Figure.Image
                            width={100}
                            alt="171x180"
                            src={props.product && props.product.image}
                        />
                    </Col>
                    <Col md="8">
                        <Card.Title>{props.product && props.product.name}</Card.Title>
                    </Col>
                </Row>
                <span className="Cart__span__strong-gray">{props.name}</span>
            </div>
            <div className="Cart__w-15 text-center d-inline">
                <span className="Cart__span__strong-gray">{product && product.data && formatCurrency(product.data.price)}</span>
            </div>
            <div className="Cart__w-15 text-center d-inline">
                <InputNumber value={props.product && formatCurrency(props.product.selectedQuantity)} />
            </div>
            <div className="Cart__w-15 text-center">
                <span className="Cart__span__strong-gray">
                    {props.product && product && product.data && formatCurrency(product.data.price * props.product.selectedQuantity)}
                </span>
            </div>
            <div className="Cart__w-15 text-center">
                <span className="Cart__span__gray">Thao Tác</span>
            </div>
        </Row>
    )
}
