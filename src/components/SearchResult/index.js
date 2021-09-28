import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Footer from '../Footer'
import Header from '../Header'
import SearchResultSideBar from './components/SearchResultSideBar'
import SearchResultList from './components/SearchResultList'

export default function SearchResult() {
    return (
        <>
            <Header />
            <Row>
                <Col md={{ span: 10, offset: 1 }}>
                    <Row>
                        <Col md={2}>
                            <SearchResultSideBar />
                        </Col>
                        <Col md={10}>
                            <SearchResultList />
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Footer />
        </>
    )
}
