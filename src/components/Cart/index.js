import React, { useEffect, useState } from 'react'
import { Col, Form, Row } from 'react-bootstrap'
import Footer from '../Footer'
import Header from '../Header'
import { RiCoupon3Fill } from "react-icons/ri"
import "./Cart.css"
import CartItem from './components/CartItem'
import CalculatorTotalPayment from './components/CalculatorTotalPayment'

export default function Cart() {
    const [products, setProducts] = useState([])
    const [selectAll, setSelectAll] = useState(true)

    const getProductsFromLocalStorage = () => {
        if (localStorage.getItem("cart__practice"))
            setProducts(JSON.parse(localStorage.getItem("cart__practice")).map(e => { return { ...e, selected: true } }))
    }

    useEffect(() => {
        getProductsFromLocalStorage()
        // eslint-disable-next-line
    }, [])

    const handleSelectAll = () => {
        setProducts(products.map(e => { return { ...e, selected: !selectAll } }))
        setSelectAll(!selectAll)
    }

    const handleSelect = (id) => {
        setProducts(products.map(e => {
            if (e.id === id)
                e.selected = !e.selected
            return e
        }))
    }

    return (
        <>
            <Header />
            <Row className="m-0 py-3 Cart__container">
                <Col md={{ span: 10, offset: 1 }} className="px-5">
                    <Row>
                        <p className="Cart__f">
                            <RiCoupon3Fill className="Cart__icon__voucher mx-2" />
                            <span className="Cart__span">
                                Nhấn vào mục Mã giảm giá ở cuối trang để hưởng miễn phí vận chuyển bạn nhé!
                            </span>
                        </p>
                    </Row>
                    <Row className="Cart__s">
                        <div className="Cart__w-40 d-inline">
                            <Form.Check className="d-inline pe-4 Cart__all" checked={selectAll} onChange={handleSelectAll} />
                            <span className="Cart__span__strong-gray">Sản Phẩm</span>
                        </div>
                        <div className="Cart__w-15 text-center d-inline">
                            <span className="Cart__span__gray">Đơn Giá</span>
                        </div>
                        <div className="Cart__w-15 text-center d-inline">
                            <span className="Cart__span__gray">Số Lượng</span>
                        </div>
                        <div className="Cart__w-15 text-center">
                            <span className="Cart__span__gray">Số Tiền</span>
                        </div>
                        <div className="Cart__w-15 text-center">
                            <span className="Cart__span__gray">Thao Tác</span>
                        </div>
                    </Row>
                    {products && products.map(e => <CartItem product={e} onChange={(id) => handleSelect(id)} />)}
                    <CalculatorTotalPayment products={products} selectAll={selectAll} onChange={handleSelectAll} />
                </Col>
            </Row>
            <Footer />
        </>
    )
}
