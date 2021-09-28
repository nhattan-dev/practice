import React, { useContext, useEffect, useReducer, useState } from 'react'
import { Button, Card, Col, Figure, Row } from 'react-bootstrap'
import { useParams } from 'react-router'
import { ThemeContext } from '../../context/ThemeContext'
import Footer from '../Footer'
import Header from '../Header'
import { Products } from '../Home'
import InputNumber from '../InputNumber'
import Loading from '../Loading'
import "./Product.css"
import { MdAddShoppingCart } from "react-icons/md"

const initState = {
    loading: false,
    data: [],
    error: null,
}

const productReducer = (state, action) => {
    switch (action.type) {
        case 'FETCH_PRODUCT':
            return {
                ...state,
                loading: true,
            }
        case 'FETCH_PRODUCT_SUCCESS':
            return {
                ...state,
                loading: false,
                data: action.data,
            }
        case 'FETCH_PRODUCT_ERROR':
            return {
                ...state,
                loading: false,
                data: [],
                error: action.data,
            }
        default:
    }
}

export default function Product() {
    let params = useParams()
    const theme = useContext(ThemeContext)
    const [product, productDispatch] = useReducer(productReducer, initState)
    const [value, setValue] = useState(1)

    const findProduct = () => {
        productDispatch({
            type: 'FETCH_PRODUCT'
        })
        setTimeout(() => {
            const arr = Products.filter(e => e.name.replaceAll(' ', '').toLowerCase() === params.keyword)
            if (arr.length !== 1)
                productDispatch({
                    type: 'FETCH_PRODUCT_ERROR',
                    data: 'too many product match',
                })
            productDispatch({
                type: 'FETCH_PRODUCT_SUCCESS',
                data: arr[0],
            })
        }, 10)
    }

    useEffect(() => {
        findProduct()
        // eslint-disable-next-line
    }, [])

    const getFromLocalStorage = () => {
        let cart
        if (localStorage.getItem('cart__practice'))
            cart = JSON.parse(localStorage.getItem('cart__practice')).find(e => e.name.replaceAll(' ', '').toLowerCase() === params.keyword)
        cart && cart.selectedQuantity && setValue(cart.selectedQuantity)
    }

    useEffect(() => {
        getFromLocalStorage()
        // eslint-disable-next-line
    }, [])

    const addToCart = (id) => {
        let cart
        if (localStorage.getItem('cart__practice')) {
            cart = JSON.parse(localStorage.getItem('cart__practice'))
        } else {
            cart = []
            localStorage.setItem('cart__practice', JSON.stringify(cart))
        }
        let p = cart.find(e => e.id === id)
        if (p)
            cart = cart.filter(e => e.id !== id)
        cart.push({
            id: id,
            selectedQuantity: value,
            image: product && product.data && product.data.image,
            name: product && product.data && product.data.name
        })
        localStorage.setItem('cart__practice', JSON.stringify(cart))
    }

    return (
        <>
            <Header />
            <Row className="m-0">
                <Col md={{ span: 10, offset: 1 }}>
                    <Row className="pt-3">
                        <Col md="auto">
                            <Figure.Image
                                width={500}
                                alt="171x180"
                                src={product && product.data && product.data.image}
                            />
                        </Col>
                        <Col md="auto" className="pt-2">
                            <Card.Title>{product && product.data && product.data.name}</Card.Title>
                            <Row>
                                <Col md={2} className="py-1">
                                    <span className="Product__span">Số Lượng</span>
                                </Col>
                                <Col md={10}>
                                    <InputNumber
                                        min={1}
                                        max={product && product.data && product.data.quantity}
                                        value={value}
                                        onChange={(v) => setValue(v)}
                                    />
                                    <span className="Product__span ps-3">
                                        {product && product.data && product.data.quantity} sản phẩm có sẵn
                                    </span>
                                </Col>
                            </Row>
                            <Button
                                className="ms-3 mt-3 p-3 Product__add"
                                style={{ color: theme.background, borderColor: theme.background }}
                                onClick={() => addToCart(product && product.data && product.data.id)}
                            >
                                <MdAddShoppingCart className="Product__icon me-1" />
                                Thêm vào giỏ hàng
                            </Button>
                            <Button
                                className="ms-3 mt-3 py-3 px-5 Product__buy-now"
                                style={{ borderColor: theme.background, backgroundColor: theme.background }}>
                                Mua Ngay
                            </Button>
                        </Col>
                    </Row>
                    <Loading show={product.loading} />
                </Col>
            </Row>
            <Footer />
        </>
    )
}
