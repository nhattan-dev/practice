import React, { useContext } from 'react'
import { Col, Row } from 'react-bootstrap'
import { ThemeContext } from '../../context/ThemeContext'
import FirstHeader from './components/FirstHeader'
import SecondHeader from './components/SecondHeader'
import './Header.css'

export default function Header() {
    const theme = useContext(ThemeContext)
    return (
        <div style={{ backgroundColor: theme.background }} className="header">
            <Row>
                <Col sm={{ span: 10, offset: 1 }}>
                    <FirstHeader />
                    <SecondHeader />
                </Col>
            </Row>
        </div>
    )
}
