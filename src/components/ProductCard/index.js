import React, { useContext } from 'react'
import { Card, Row, Col } from 'react-bootstrap'
import { useHistory } from 'react-router'
import { ThemeContext } from '../../context/ThemeContext'
import "./ProductCard.css"

export default function ProductCard(props) {
    const theme = useContext(ThemeContext)
    let history = useHistory();

    const redirect = () => {
        history.push(`/product/${props.product && props.product.name.replaceAll(' ', '').toLowerCase()}`)
    }

    return (
        // <Link>
        <Card style={{ width: '18rem' }} onClick={redirect} type="button">
            <Card.Img variant="top" src={props.product && props.product.image} />
            <Card.Body>
                <Card.Title className="ProductCard__title">{props.product && props.product.name}</Card.Title>
                <Card.Text className="ProductCard__sale d-inline px-2" style={{ backgroundColor: '#F69113' }}>
                    <strong>Giảm {props.product && props.product.sale} %</strong>
                </Card.Text>
                <Row>
                    <Col md="6">
                        <Card.Title className="ProductCard__no-underline" style={{ color: theme.background }}>đ {props.product && props.product.price}</Card.Title>
                    </Col>
                    <Col md="6">
                        <Card.Title className="float-end ProductCard__sold ProductCard__no-underline">Đã bán {props.product && props.product.sold}</Card.Title>
                    </Col>
                </Row>
            </Card.Body>
        </Card>
        // </Link>
    )
}
