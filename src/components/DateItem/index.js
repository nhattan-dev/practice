import React from 'react'
import "./DateItem.css"

export default function DateItem(props) {
    const show = () => props.percent && props.percent > 0 
    return (
        <div style={{ position: "relative", width: "45px", height: "45px", textAlign: "center" }}>
            <div className={`DateItem__trapezoid ${show() || "DateItem__hide"}`}>
                <div>
                    <span className="DateItem__percent" >{props.percent}</span>
                </div>
            </div>
            <div className="pt-1">
                <span style={{ fontSize: "25px" }}>{props.value}</span>
            </div>
        </div>
    )
}
