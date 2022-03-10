import React, { useContext } from 'react'
import { Button, Form, Row } from 'react-bootstrap'
import { ThemeContext } from '../../../../context/ThemeContext'
import "./CalculatorTotalPayment.css"

export default function CalculatorTotalPayment(props) {
    const theme = useContext(ThemeContext)

    return (
        <Row className="Cart__s">
            <div className="w-50 d-inline d-flex">
                <Form.Check
                    className="d-inline pe-4 Cart__all"
                    checked={props.selectAll}
                    onChange={props.onChange}
                />
                <span className="CalculatorTotalPayment__span mt-1">Chọn tất cả ({props.products ? props.products.length : 0})</span>
            </div>
            <div className="w-50 d-inline d-flex">
                <div className="text-end w-100">
                    <span className="CalculatorTotalPayment__span">Tổng thanh toán: </span>
                    <Button
                        className="ms-3 mt-3 py-3 px-5 CalculatorTotalPayment__buy-now"
                        style={{ borderColor: theme.background, backgroundColor: theme.background }}>
                        Mua Hàng
                    </Button>
                </div>
            </div>
        </Row>
    )
}
