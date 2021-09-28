import React from 'react'
import "./InputNumber.css"

export default function InputNumber(props) {

    const handleOnChange = (e) => {
        const v = e.target.value
        if (new RegExp(/^\d{0,10}$/).test(v)) {
            if (props.min && v < props.min)
                props.onChange(0)
            else if (props.max && v > props.max)
                props.onChange(props.max)
            else if (v.length > 0)
                props.onChange(parseInt(v))
            else
                props.onChange(0)
        }
    }

    const handlePlusOne = () => {
        const n = props.value + 1
        if (props.max && n <= props.max)
        props.onChange(parseInt(n))
    }
    
    const handleMinusOne = () => {
        const n = props.value - 1
        console.log(n)
        if (Number.isInteger(props.min) && n >= props.min)
            props.onChange(parseInt(n))
    }

    return (
        <>
            <button className="InputNumber__button py-2" onClick={handleMinusOne}>-</button>
            <input className="InputNumber__input py-2" value={props.value} onChange={handleOnChange} type="text" />
            <button className="InputNumber__button py-2" onClick={handlePlusOne}>+</button>
        </>
    )
}
