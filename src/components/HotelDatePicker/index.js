import React, { useState } from 'react';
import Datepicker from './Datepicker';
import { Col, Row } from 'reactstrap';

export default function HotelDatePicker() {

    const [date, setDate] = useState(new Date())
    const [secondDate, setSecondDate] = useState(new Date())

    return (
        <Row>
            <Col md="auto" className="p-5 m-5">
                <Datepicker
                    label="IN"
                    label2="OUT"
                    min="2000-01-01"
                    max="2021-12-31"
                    date={date}
                    date2={secondDate}
                    onDateChange={(e) => {
                        console.log(e)
                        setDate(e)
                    }}
                    onDateChange2={(e) => {
                        console.log(e)
                        setSecondDate(e)
                    }}
                />
            </Col>
        </Row>
    )
}
