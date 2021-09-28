import React, { useEffect, useReducer, useState } from 'react'
import Header from '../Header'
import Content from '../Content'
import Footer from '../Footer'
import { Col, Row } from 'react-bootstrap'
import PagingBar from '../Pagination'

let elementPerPage = 10

const initState = {
    loading: false,
    data: [],
    error: null,
}

const productsReducer = (state, action) => {
    switch (action.type) {
        case 'FETCH_PRODUCT':
            return {
                ...state,
                loading: true,
            }
        case 'FETCH_PRODUCT_SUCCESS':
            return {
                ...state,
                loading: false,
                data: action.data,
            }
        case 'FETCH_PRODUCT_ERROR':
            return {
                ...state,
                loading: false,
                data: [],
                error: action.data,
            }
        default:
    }
}

export default function Home() {
    const [products, productsDispatch] = useReducer(productsReducer, initState)

    const [currentPage, setCurrentPage] = useState(1)

    const fetchProducts = () => {
        productsDispatch({
            type: 'FETCH_PRODUCT',
        })
        console.log('FETCH_PRODUCT')
        setTimeout(() => {
            productsDispatch({
                type: 'FETCH_PRODUCT_SUCCESS',
                data: Products,
            })
            console.log('FETCH_PRODUCT_SUCCESS')
        }, 500)
    }

    useEffect(() => {
        fetchProducts()
    }, [])

    return (
        <>
            <Header />
            <Row className="m-0">
                <Col md={{ span: 10, offset: 1 }}>
                    <Content products={products.data.slice((currentPage - 1) * elementPerPage, currentPage * elementPerPage)} />
                    <div className="text-center">
                        <PagingBar
                            currentPage={currentPage}
                            totalItemsCount={products.data.length}
                            elementPerPage={elementPerPage}
                            setCurrentPage={setCurrentPage}
                        />
                    </div>
                </Col>
            </Row>
            <Footer />
        </>
    )
}



export const Products = [
    {
        id: 0,
        image: 'https://cf.shopee.vn/file/ff466fb31b00a39fa82a1d43a13564c2_tn',
        name: '[CHÍNH HÃNG] KINH ĐÔ BÁNH TRUNG THU BÁNH NƯỚNG - 1 Bánh Nướng 1 Trứng 150g0',
        sold: 10,
        price: 150000,
        sale: 100,
        quantity: 930,
    },
    {
        id: 1,
        image: '	https://cf.shopee.vn/file/327ccc07892a0c9b5bea06bc3c075dfb_tn',
        name: 'Tai Nghe TWS Bluetooth Nhét Tai Không Dây - Full Tính Năng - Định Vị - Đổi Tên - Bảo Hành 1 Đổi 11',
        sold: 100,
        price: 500000,
        sale: 10,
        quantity: 199,
    }, 
    {
        id: 2,
        image: 'https://cf.shopee.vn/file/ff466fb31b00a39fa82a1d43a13564c2_tn',
        name: '[CHÍNH HÃNG] KINH ĐÔ BÁNH TRUNG THU BÁNH NƯỚNG - 1 Bánh Nướng 1 Trứng 150g2',
        sold: 10,
        price: 150000,
        sale: 100,
        quantity: 930,
    },
    {
        id: 3,
        image: '	https://cf.shopee.vn/file/327ccc07892a0c9b5bea06bc3c075dfb_tn',
        name: 'Tai Nghe TWS Bluetooth Nhét Tai Không Dây - Full Tính Năng - Định Vị - Đổi Tên - Bảo Hành 1 Đổi 13',
        sold: 100,
        price: 500000,
        sale: 10,
        quantity: 199,
    }, {
        id: 4,
        image: 'https://cf.shopee.vn/file/ff466fb31b00a39fa82a1d43a13564c2_tn',
        name: '[CHÍNH HÃNG] KINH ĐÔ BÁNH TRUNG THU BÁNH NƯỚNG - 1 Bánh Nướng 1 Trứng 150g4',
        sold: 10,
        price: 150000,
        sale: 100,
        quantity: 930,
    },
    {
        id: 5,
        image: '	https://cf.shopee.vn/file/327ccc07892a0c9b5bea06bc3c075dfb_tn',
        name: 'Tai Nghe TWS Bluetooth Nhét Tai Không Dây - Full Tính Năng - Định Vị - Đổi Tên - Bảo Hành 1 Đổi 15',
        sold: 100,
        price: 500000,
        sale: 10,
        quantity: 199,
    }, {
        id: 6,
        image: 'https://cf.shopee.vn/file/ff466fb31b00a39fa82a1d43a13564c2_tn',
        name: '[CHÍNH HÃNG] KINH ĐÔ BÁNH TRUNG THU BÁNH NƯỚNG - 1 Bánh Nướng 1 Trứng 150g6',
        sold: 10,
        price: 150000,
        sale: 100,
        quantity: 930,
    },
    {
        id: 7,
        image: '	https://cf.shopee.vn/file/327ccc07892a0c9b5bea06bc3c075dfb_tn',
        name: 'Tai Nghe TWS Bluetooth Nhét Tai Không Dây - Full Tính Năng - Định Vị - Đổi Tên - Bảo Hành 1 Đổi 17',
        sold: 100,
        price: 500000,
        sale: 10,
        quantity: 199,
    }, {
        id: 8,
        image: 'https://cf.shopee.vn/file/ff466fb31b00a39fa82a1d43a13564c2_tn',
        name: '[CHÍNH HÃNG] KINH ĐÔ BÁNH TRUNG THU BÁNH NƯỚNG - 1 Bánh Nướng 1 Trứng 150g8',
        sold: 10,
        price: 150000,
        sale: 100,
        quantity: 930,
    },
    {
        id: 9,
        image: '	https://cf.shopee.vn/file/327ccc07892a0c9b5bea06bc3c075dfb_tn',
        name: 'Tai Nghe TWS Bluetooth Nhét Tai Không Dây - Full Tính Năng - Định Vị - Đổi Tên - Bảo Hành 1 Đổi 19',
        sold: 100,
        price: 500000,
        sale: 10,
        quantity: 199,
    },
    {
        id: 10,
        image: 'https://cf.shopee.vn/file/ff466fb31b00a39fa82a1d43a13564c2_tn',
        name: '[CHÍNH HÃNG] KINH ĐÔ BÁNH TRUNG THU BÁNH NƯỚNG - 1 Bánh Nướng 1 Trứng 150g10',
        sold: 10,
        price: 150000,
        sale: 100,
        quantity: 930,
    },
    {
        id: 11,
        image: '	https://cf.shopee.vn/file/327ccc07892a0c9b5bea06bc3c075dfb_tn',
        name: 'Tai Nghe TWS Bluetooth Nhét Tai Không Dây - Full Tính Năng - Định Vị - Đổi Tên - Bảo Hành 1 Đổi 111',
        sold: 100,
        price: 500000,
        sale: 10,
        quantity: 199,
    }, 
    {
        id: 12,
        image: 'https://cf.shopee.vn/file/ff466fb31b00a39fa82a1d43a13564c2_tn',
        name: '[CHÍNH HÃNG] KINH ĐÔ BÁNH TRUNG THU BÁNH NƯỚNG - 1 Bánh Nướng 1 Trứng 150g12',
        sold: 10,
        price: 150000,
        sale: 100,
        quantity: 930,
    },
    {
        id: 13,
        image: '	https://cf.shopee.vn/file/327ccc07892a0c9b5bea06bc3c075dfb_tn',
        name: 'Tai Nghe TWS Bluetooth Nhét Tai Không Dây - Full Tính Năng - Định Vị - Đổi Tên - Bảo Hành 1 Đổi 113',
        sold: 100,
        price: 500000,
        sale: 10,
        quantity: 199,
    }, {
        id: 14,
        image: 'https://cf.shopee.vn/file/ff466fb31b00a39fa82a1d43a13564c2_tn',
        name: '[CHÍNH HÃNG] KINH ĐÔ BÁNH TRUNG THU BÁNH NƯỚNG - 1 Bánh Nướng 1 Trứng 150g14',
        sold: 10,
        price: 150000,
        sale: 100,
        quantity: 930,
    },
    {
        id: 15,
        image: '	https://cf.shopee.vn/file/327ccc07892a0c9b5bea06bc3c075dfb_tn',
        name: 'Tai Nghe TWS Bluetooth Nhét Tai Không Dây - Full Tính Năng - Định Vị - Đổi Tên - Bảo Hành 1 Đổi 1142',
        sold: 100,
        price: 500000,
        sale: 10,
        quantity: 199,
    }, {
        id: 16,
        image: 'https://cf.shopee.vn/file/ff466fb31b00a39fa82a1d43a13564c2_tn',
        name: '[CHÍNH HÃNG] KINH ĐÔ BÁNH TRUNG THU BÁNH NƯỚNG - 1 Bánh Nướng 1 Trứng 150g21',
        sold: 10,
        price: 150000,
        sale: 100,
        quantity: 930,
    },
    {
        id: 17,
        image: '	https://cf.shopee.vn/file/327ccc07892a0c9b5bea06bc3c075dfb_tn',
        name: 'Tai Nghe TWS Bluetooth Nhét Tai Không Dây - Full Tính Năng - Định Vị - Đổi Tên - Bảo Hành 1 Đổi 122',
        sold: 100,
        price: 500000,
        sale: 10,
        quantity: 199,
    }, {
        id: 18,
        image: 'https://cf.shopee.vn/file/ff466fb31b00a39fa82a1d43a13564c2_tn',
        name: '[CHÍNH HÃNG] KINH ĐÔ BÁNH TRUNG THU BÁNH NƯỚNG - 1 Bánh Nướng 1 Trứng 150g23',
        sold: 10,
        price: 150000,
        sale: 100,
        quantity: 930,
    },
    {
        id: 19,
        image: '	https://cf.shopee.vn/file/327ccc07892a0c9b5bea06bc3c075dfb_tn',
        name: 'Tai Nghe TWS Bluetooth Nhét Tai Không Dây - Full Tính Năng - Định Vị - Đổi Tên - Bảo Hành 1 Đổi 124',
        sold: 100,
        price: 500000,
        sale: 10,
        quantity: 199,
    },
    {
        id: 20,
        image: 'https://cf.shopee.vn/file/ff466fb31b00a39fa82a1d43a13564c2_tn',
        name: '[CHÍNH HÃNG] KINH ĐÔ BÁNH TRUNG THU BÁNH NƯỚNG - 1 Bánh Nướng 1 Trứng 150g25',
        sold: 10,
        price: 150000,
        sale: 100,
        quantity: 930,
    },
    {
        id: 21,
        image: '	https://cf.shopee.vn/file/327ccc07892a0c9b5bea06bc3c075dfb_tn',
        name: 'Tai Nghe TWS Bluetooth Nhét Tai Không Dây - Full Tính Năng - Định Vị - Đổi Tên - Bảo Hành 1 Đổi 126',
        sold: 100,
        price: 500000,
        sale: 10,
        quantity: 199,
    }, 
    {
        id: 22,
        image: 'https://cf.shopee.vn/file/ff466fb31b00a39fa82a1d43a13564c2_tn',
        name: '[CHÍNH HÃNG] KINH ĐÔ BÁNH TRUNG THU BÁNH NƯỚNG - 1 Bánh Nướng 1 Trứng 150g27',
        sold: 10,
        price: 150000,
        sale: 100,
        quantity: 930,
    },
    {
        id: 23,
        image: '	https://cf.shopee.vn/file/327ccc07892a0c9b5bea06bc3c075dfb_tn',
        name: 'Tai Nghe TWS Bluetooth Nhét Tai Không Dây - Full Tính Năng - Định Vị - Đổi Tên - Bảo Hành 1 Đổi 128',
        sold: 100,
        price: 500000,
        sale: 10,
        quantity: 199,
    }, {
        id: 24,
        image: 'https://cf.shopee.vn/file/ff466fb31b00a39fa82a1d43a13564c2_tn',
        name: '[CHÍNH HÃNG] KINH ĐÔ BÁNH TRUNG THU BÁNH NƯỚNG - 1 Bánh Nướng 1 Trứng 150g29',
        sold: 10,
        price: 150000,
        sale: 100,
        quantity: 930,
    },
    {
        id: 25,
        image: '	https://cf.shopee.vn/file/327ccc07892a0c9b5bea06bc3c075dfb_tn',
        name: 'Tai Nghe TWS Bluetooth Nhét Tai Không Dây - Full Tính Năng - Định Vị - Đổi Tên - Bảo Hành 1 Đổi 130',
        sold: 100,
        price: 500000,
        sale: 10,
        quantity: 199,
    }, {
        id: 26,
        image: 'https://cf.shopee.vn/file/ff466fb31b00a39fa82a1d43a13564c2_tn',
        name: '[CHÍNH HÃNG] KINH ĐÔ BÁNH TRUNG THU BÁNH NƯỚNG - 1 Bánh Nướng 1 Trứng 150g31',
        sold: 10,
        price: 150000,
        sale: 100,
        quantity: 930,
    },
    {
        id: 27,
        image: '	https://cf.shopee.vn/file/327ccc07892a0c9b5bea06bc3c075dfb_tn',
        name: 'Tai Nghe TWS Bluetooth Nhét Tai Không Dây - Full Tính Năng - Định Vị - Đổi Tên - Bảo Hành 1 Đổi 132',
        sold: 100,
        price: 500000,
        sale: 10,
        quantity: 199,
    }, {
        id: 28,
        image: 'https://cf.shopee.vn/file/ff466fb31b00a39fa82a1d43a13564c2_tn',
        name: '[CHÍNH HÃNG] KINH ĐÔ BÁNH TRUNG THU BÁNH NƯỚNG - 1 Bánh Nướng 1 Trứng 150g33',
        sold: 10,
        price: 150000,
        sale: 100,
        quantity: 930,
    },
    {
        id: 29,
        image: '	https://cf.shopee.vn/file/327ccc07892a0c9b5bea06bc3c075dfb_tn',
        name: 'Tai Nghe TWS Bluetooth Nhét Tai Không Dây - Full Tính Năng - Định Vị - Đổi Tên - Bảo Hành 1 Đổi 134',
        sold: 100,
        price: 500000,
        sale: 10,
        quantity: 199,
    },
    {
        id: 30,
        image: 'https://cf.shopee.vn/file/ff466fb31b00a39fa82a1d43a13564c2_tn',
        name: '[CHÍNH HÃNG] KINH ĐÔ BÁNH TRUNG THU BÁNH NƯỚNG - 1 Bánh Nướng 1 Trứng 150g35',
        sold: 10,
        price: 150000,
        sale: 100,
        quantity: 930,
    },
    {
        id: 31,
        image: '	https://cf.shopee.vn/file/327ccc07892a0c9b5bea06bc3c075dfb_tn',
        name: 'Tai Nghe TWS Bluetooth Nhét Tai Không Dây - Full Tính Năng - Định Vị - Đổi Tên - Bảo Hành 1 Đổi 136',
        sold: 100,
        price: 500000,
        sale: 10,
        quantity: 199,
    }, 
    {
        id: 32,
        image: 'https://cf.shopee.vn/file/ff466fb31b00a39fa82a1d43a13564c2_tn',
        name: '[CHÍNH HÃNG] KINH ĐÔ BÁNH TRUNG THU BÁNH NƯỚNG - 1 Bánh Nướng 1 Trứng 150g41',
        sold: 10,
        price: 150000,
        sale: 100,
        quantity: 930,
    },
    {
        id: 33,
        image: '	https://cf.shopee.vn/file/327ccc07892a0c9b5bea06bc3c075dfb_tn',
        name: 'Tai Nghe TWS Bluetooth Nhét Tai Không Dây - Full Tính Năng - Định Vị - Đổi Tên - Bảo Hành 1 Đổi 141',
        sold: 100,
        price: 500000,
        sale: 10,
        quantity: 199,
    }, {
        id: 34,
        image: 'https://cf.shopee.vn/file/ff466fb31b00a39fa82a1d43a13564c2_tn',
        name: '[CHÍNH HÃNG] KINH ĐÔ BÁNH TRUNG THU BÁNH NƯỚNG - 1 Bánh Nướng 1 Trứng 150g43',
        sold: 10,
        price: 150000,
        sale: 100,
        quantity: 930,
    },
    {
        id: 35,
        image: '	https://cf.shopee.vn/file/327ccc07892a0c9b5bea06bc3c075dfb_tn',
        name: 'Tai Nghe TWS Bluetooth Nhét Tai Không Dây - Full Tính Năng - Định Vị - Đổi Tên - Bảo Hành 1 Đổi 144',
        sold: 100,
        price: 500000,
        sale: 10,
        quantity: 199,
    }, {
        id: 36,
        image: 'https://cf.shopee.vn/file/ff466fb31b00a39fa82a1d43a13564c2_tn',
        name: '[CHÍNH HÃNG] KINH ĐÔ BÁNH TRUNG THU BÁNH NƯỚNG - 1 Bánh Nướng 1 Trứng 150g45',
        sold: 10,
        price: 150000,
        sale: 100,
        quantity: 930,
    },
    {
        id: 37,
        image: '	https://cf.shopee.vn/file/327ccc07892a0c9b5bea06bc3c075dfb_tn',
        name: 'Tai Nghe TWS Bluetooth Nhét Tai Không Dây - Full Tính Năng - Định Vị - Đổi Tên - Bảo Hành 1 Đổi 146',
        sold: 100,
        price: 500000,
        sale: 10,
        quantity: 199,
    }, {
        id: 38,
        image: 'https://cf.shopee.vn/file/ff466fb31b00a39fa82a1d43a13564c2_tn',
        name: '[CHÍNH HÃNG] KINH ĐÔ BÁNH TRUNG THU BÁNH NƯỚNG - 1 Bánh Nướng 1 Trứng 150g47',
        sold: 10,
        price: 150000,
        sale: 100,
        quantity: 930,
    },
    {
        id: 39,
        image: '	https://cf.shopee.vn/file/327ccc07892a0c9b5bea06bc3c075dfb_tn',
        name: 'Tai Nghe TWS Bluetooth Nhét Tai Không Dây - Full Tính Năng - Định Vị - Đổi Tên - Bảo Hành 1 Đổi 148',
        sold: 100,
        price: 500000,
        sale: 10,
        quantity: 199,
    },
    {
        id: 40,
        image: 'https://cf.shopee.vn/file/ff466fb31b00a39fa82a1d43a13564c2_tn',
        name: '[CHÍNH HÃNG] KINH ĐÔ BÁNH TRUNG THU BÁNH NƯỚNG - 1 Bánh Nướng 1 Trứng 150g51',
        sold: 10,
        price: 150000,
        sale: 100,
        quantity: 930,
    },
    {
        id: 41,
        image: '	https://cf.shopee.vn/file/327ccc07892a0c9b5bea06bc3c075dfb_tn',
        name: 'Tai Nghe TWS Bluetooth Nhét Tai Không Dây - Full Tính Năng - Định Vị - Đổi Tên - Bảo Hành 1 Đổi 152',
        sold: 100,
        price: 500000,
        sale: 10,
        quantity: 199,
    }, 
    {
        id: 42,
        image: 'https://cf.shopee.vn/file/ff466fb31b00a39fa82a1d43a13564c2_tn',
        name: '[CHÍNH HÃNG] KINH ĐÔ BÁNH TRUNG THU BÁNH NƯỚNG - 1 Bánh Nướng 1 Trứng 150g53',
        sold: 10,
        price: 150000,
        sale: 100,
        quantity: 930,
    },
    {
        id: 43,
        image: '	https://cf.shopee.vn/file/327ccc07892a0c9b5bea06bc3c075dfb_tn',
        name: 'Tai Nghe TWS Bluetooth Nhét Tai Không Dây - Full Tính Năng - Định Vị - Đổi Tên - Bảo Hành 1 Đổi 154',
        sold: 100,
        price: 500000,
        sale: 10,
        quantity: 199,
    }, {
        id: 44,
        image: 'https://cf.shopee.vn/file/ff466fb31b00a39fa82a1d43a13564c2_tn',
        name: '[CHÍNH HÃNG] KINH ĐÔ BÁNH TRUNG THU BÁNH NƯỚNG - 1 Bánh Nướng 1 Trứng 150g55',
        sold: 10,
        price: 150000,
        sale: 100,
        quantity: 930,
    },
    {
        id: 45,
        image: '	https://cf.shopee.vn/file/327ccc07892a0c9b5bea06bc3c075dfb_tn',
        name: 'Tai Nghe TWS Bluetooth Nhét Tai Không Dây - Full Tính Năng - Định Vị - Đổi Tên - Bảo Hành 1 Đổi 156',
        sold: 100,
        price: 500000,
        sale: 10,
        quantity: 199,
    }, {
        id: 46,
        image: 'https://cf.shopee.vn/file/ff466fb31b00a39fa82a1d43a13564c2_tn',
        name: '[CHÍNH HÃNG] KINH ĐÔ BÁNH TRUNG THU BÁNH NƯỚNG - 1 Bánh Nướng 1 Trứng 150g111',
        sold: 10,
        price: 150000,
        sale: 100,
        quantity: 930,
    },
    {
        id: 47,
        image: '	https://cf.shopee.vn/file/327ccc07892a0c9b5bea06bc3c075dfb_tn',
        name: 'Tai Nghe TWS Bluetooth Nhét Tai Không Dây - Full Tính Năng - Định Vị - Đổi Tên - Bảo Hành 1 Đổi 1123',
        sold: 100,
        price: 500000,
        sale: 10,
        quantity: 199,
    }, {
        id: 48,
        image: 'https://cf.shopee.vn/file/ff466fb31b00a39fa82a1d43a13564c2_tn',
        name: '[CHÍNH HÃNG] KINH ĐÔ BÁNH TRUNG THU BÁNH NƯỚNG - 1 Bánh Nướng 1 Trứng 150g12312',
        sold: 10,
        price: 150000,
        sale: 100,
        quantity: 930,
    },
    {
        id: 49,
        image: '	https://cf.shopee.vn/file/327ccc07892a0c9b5bea06bc3c075dfb_tn',
        name: 'Tai Nghe TWS Bluetooth Nhét Tai Không Dây - Full Tính Năng - Định Vị - Đổi Tên - Bảo Hành 1 Đổi 13121',
        sold: 100,
        price: 500000,
        sale: 10,
        quantity: 199,
    },
]