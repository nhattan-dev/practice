import React, { useContext, useState } from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap'
import { BsSearch } from 'react-icons/bs'
import './Search.css'
import { ThemeContext } from '../../../../../../context/ThemeContext'
import { Link } from 'react-router-dom'

export default function Search() {
    const theme = useContext(ThemeContext)

    const [keySearch, setKeySearch] = useState('')

    return (
        <Row>
            <Col sm="10" className="px-0">
                <Form.Control
                    className="search__h-150 search__input"
                    value={keySearch}
                    onChange={e => setKeySearch(e.target.value)}
                />
            </Col>
            <Col sm="2" className="p-0">
                <Link to={`/search?${keySearch}`}>
                    <Button className="search__button" style={{ backgroundColor: theme.background, borderColor: theme.background }}>
                        <BsSearch className="search__icon" />
                    </Button>
                </Link>
            </Col>
        </Row >
    )
}
