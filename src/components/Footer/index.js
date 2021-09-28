import React from 'react'
import { Col, Row } from 'react-bootstrap'
import CustomerCare from './components/CustomerCare'
import "./Footer.css"

export default function Footer() {
    return (
        <div className="Footer__container py-5">
            <Row className="m-0">
                <Col md={{ span: 10, offset: 1 }}>
                    <Row>
                        <div className="Footer__w-20">
                            <CustomerCare />
                        </div>
                        <div className="Footer__w-20">
                            <CustomerCare />
                        </div>
                        <div className="Footer__w-20">
                            <CustomerCare />
                        </div>
                        <div className="Footer__w-20">
                            <CustomerCare />
                        </div>
                        <div className="Footer__w-20">
                            <CustomerCare />
                        </div>
                    </Row>
                    <hr />
                    <Row className="text-center">
                        <p>
                            <span className="Footer__cs"> CHÍNH SÁCH BẢO MẬT </span>
                            <span className="Footer__br mx-5"> | </span>
                            <span className="Footer__cs"> QUY CHẾ HOẠT ĐỘNG </span>
                            <span className="Footer__br mx-5"> | </span>
                            <span className="Footer__cs"> CHÍNH SÁCH VẬN CHUYỂN </span>
                            <span className="Footer__br mx-5"> | </span>
                            <span className="Footer__cs"> CHÍNH SÁCH TRẢ HÀNG VÀ HOÀN TIỀN </span>
                        </p>
                        <p className="Footer__p">
                            Công ty TNHH Shopee
                        </p>
                        <p className="Footer__p">
                            Địa chỉ: Tầng 4-5-6, Tòa nhà Capital Place, số 29 đường Liễu Giai, Phường Ngọc Khánh, Quận Ba Đình, Thành phố Hà Nội, Việt Nam. Tổng đài hỗ trợ: 19001221 - Email: cskh@hotro.shopee.vn
                        </p>
                        <p className="Footer__p">
                            Chịu Trách Nhiệm Quản Lý Nội Dung: Nguyễn Đức Trí - Điện thoại liên hệ: 024 73081221 (ext 4678)
                        </p>
                        <p className="Footer__p">
                            Mã số doanh nghiệp: 0106773786 do Sở Kế hoạch & Đầu tư TP Hà Nội cấp lần đầu ngày 10/02/2015
                        </p>
                        <p className="Footer__p">
                            © 2015 - Bản quyền thuộc về Công ty TNHH Shopee
                        </p>
                    </Row>
                </Col>
            </Row >
        </div >
    )
}
