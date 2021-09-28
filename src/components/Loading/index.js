import React from 'react'
import { Modal, Spinner } from 'react-bootstrap'

export default function Loading(props) {
    return (
        <Modal
            centered
            show={props.show}
        >
            <Modal.Body className="text-center">
                <Spinner animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </Spinner>
            </Modal.Body>
        </Modal>
    )
}
