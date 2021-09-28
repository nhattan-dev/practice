import React from 'react'
import { Pagination } from 'react-bootstrap'

export default function PagingBar(props) {
    return (
        <Pagination size="lg" className="d-inline-flex">
            <Pagination.First
                onClick={() => props.setCurrentPage(1)}
                disabled={props.currentPage === 1}
            />

            <Pagination.Prev
                disabled={props.currentPage < 2}
                onClick={() => props.setCurrentPage(props.currentPage - 1)}
            />

            <Pagination.Ellipsis hidden={props.currentPage < 4} disabled />

            <Pagination.Item
                onClick={() => props.setCurrentPage(props.currentPage - 2)}
                hidden={props.currentPage < 3}
            >{props.currentPage - 2}</Pagination.Item>

            <Pagination.Item
                onClick={() => props.setCurrentPage(props.currentPage - 1)}
                hidden={props.currentPage < 2}
            >{props.currentPage - 1}</Pagination.Item>

            <Pagination.Item active>{props.currentPage}</Pagination.Item>

            <Pagination.Item
                hidden={props.currentPage >= Math.ceil((props.totalItemsCount / props.elementPerPage))}
                onClick={() => props.setCurrentPage(props.currentPage + 1)}
            >{props.currentPage + 1}</Pagination.Item>

            <Pagination.Item
                hidden={props.currentPage >= Math.ceil((props.totalItemsCount / props.elementPerPage)) - 1}
                onClick={() => props.setCurrentPage(props.currentPage + 2)}
            >{props.currentPage + 2}</Pagination.Item>

            <Pagination.Ellipsis
                hidden={props.currentPage >= Math.ceil((props.totalItemsCount / props.elementPerPage)) - 2}
                disabled
            />

            <Pagination.Next
                disabled={props.currentPage >= Math.ceil(props.totalItemsCount / props.elementPerPage)}
                onClick={() => props.setCurrentPage(props.currentPage + 1)}
            />

            <Pagination.Last
                onClick={() => props.setCurrentPage(Math.ceil(props.totalItemsCount / props.elementPerPage))}
                disabled={props.currentPage === Math.ceil(props.totalItemsCount / props.elementPerPage)}
            />

        </Pagination>
    )
}
