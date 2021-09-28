import React from 'react'
import { Col, Row } from 'react-bootstrap'
import './SupportHeader.css'
import { AiOutlineBell, AiOutlineQuestionCircle, AiFillInstagram } from 'react-icons/ai'
import { SiFacebook } from 'react-icons/si'
import ValueStored from '../../../../helper/key'

export default function SupportHeader() {
    return (
        <Row className="justify-content-center">
            <Col md='6'>
                <p>
                    <span className="SupportHeader__font-size">Kênh Người Bán</span>
                    <span className="SupportHeader__font-size mx-1">|</span>
                    <span className="SupportHeader__font-size">Trở thành Người bán Shopee</span>
                    <span className="SupportHeader__font-size mx-1">|</span>
                    <span className="SupportHeader__font-size">Tải Ứng Dụng</span>
                    <span className="SupportHeader__font-size mx-1">|</span>
                    <span className="SupportHeader__font-size">Kết Nối
                        <SiFacebook className="mx-2"/>
                        <AiFillInstagram style={{fontSize: '130%'}}/>
                    </span>
                </p>
            </Col>
            <Col md='6' className="text-end">
                <p>
                    <span className="SupportHeader__font-size mx-3"> <AiOutlineBell /> Thông Báo</span>
                    <span className="SupportHeader__font-size mx-3"> <AiOutlineQuestionCircle />  Hỗ Trợ</span>
                    {localStorage.getItem(ValueStored.User) ? (
                        <>
                            <span className="SupportHeader__font-size ms-3">Đăng Nhập</span>
                            <span className="SupportHeader__font-size mx-1">|</span>
                            <span className="SupportHeader__font-size">Đăng Ký</span>
                        </>
                    ) : (
                        <span className="SupportHeader__font-size mx-2"> <AiOutlineQuestionCircle /> Hỗ Trợ</span>
                    )}
                </p>
            </Col>
        </Row>
    )
}
