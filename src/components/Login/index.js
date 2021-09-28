import React, { useState } from 'react'
import { Button, Col, Form, Modal, Row } from 'react-bootstrap'
import { useHistory } from 'react-router'
import validators from '../../shared/Regex'
import './Login.css'

export default function Login() {
    const history = useHistory()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [disableButton, setDisableButton] = useState(true)


    const validator = (e, p) => {
        if (validators.email(e) === true && validators.password(p) === true)
            setDisableButton(false)
        else
            setDisableButton(true)
    }

    const emailOnChange = (e) => {
        setEmail(e.target.value)
        validator(e.target.value, password)
    }

    const passwordOnChange = (e) => {
        setPassword(e.target.value)
        validator(email, e.target.value)
    }

    const handleLogin = () => {
        setDisableButton(true)
        localStorage.setItem('accessToken_user_practice', 'this is token')
        history.replace('/')
    }
    return (
        <div className='login-container' style={{ backgroundImage: 'url(./bg.jpg)', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
            <Modal.Dialog
                aria-labelledby="contained-modal-title-vcenter"
                centered
                show={true}
            >
                <Modal.Header>
                    <Modal.Title id="contained-modal-title-vcenter">
                        LOGIN
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group as={Row} controlId="formPlaintextEmail">
                            <Form.Label column md={{ span: 3, offset: 1 }} sm="2">
                                Email
                            </Form.Label>
                            <Col sm="10" md={7}>
                                <Form.Control placeholder="Email" value={email} onChange={emailOnChange} />
                            </Col>
                        </Form.Group>
                        <Row className='mb-3'>
                            <Col md={{ span: 8, offset: 3 }}>
                                <span className='float-end error'>{email.length > 0 && validators.email(email, 'invalid email')} </span>
                            </Col>
                        </Row>

                        <Form.Group as={Row} controlId="formPlaintextPassword">
                            <Form.Label column md={{ span: 3, offset: 1 }} sm="2">
                                Password
                            </Form.Label>
                            <Col sm="10" md={7}>
                                <Form.Control type="password" placeholder="Password" value={password} onChange={passwordOnChange} />
                            </Col>
                        </Form.Group>
                        <Row className='mb-3'>
                            <Col md={{ span: 8, offset: 4 }}>
                                <span className='float-end error'>{password.length > 0 && validators.password(password, 'Length between 8-36 characters, at least one letter and one number')}</span>
                            </Col>
                        </Row>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button disabled={disableButton} onClick={handleLogin}>Login</Button>
                </Modal.Footer>
            </Modal.Dialog>
        </div>
    )
}
