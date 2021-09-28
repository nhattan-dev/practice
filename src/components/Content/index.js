import React from 'react'
import { Col, Row } from 'react-bootstrap'
import ProductCard from '../ProductCard'

export default function Content(props) {
    return (
        <Row>
            {props.products && props.products.map(e => (
                <Col md='auto' className="p-3">
                    <ProductCard product={e} />
                </Col>
            ))}
        </Row>
    )
}
