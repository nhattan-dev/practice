import React from 'react'
import { Link } from 'react-router-dom'
import "./Logo.css"
import EndPoint from '../../../../../../helper/endpoint'

export default function Logo() {
    return (
        <Link to={EndPoint.Home}>
            <div style={{ backgroundImage: 'url(/logo.png)' }} className="logo" />
        </Link>
    )
}
