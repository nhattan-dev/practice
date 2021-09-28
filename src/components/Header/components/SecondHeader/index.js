import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Cart from './components/Cart'
import Logo from './components/Logo'
import Search from './components/Search'

export default function SecondHeader() {
    return (
        <Row>
            <Col sm={2}>
                <Logo />
            </Col>
            <Col sm={9}>
                <Search />
            </Col>
            <Col sm={1}>
                <Cart />
            </Col>
        </Row>
    )
}
