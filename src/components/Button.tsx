import React from 'react'
import {Item} from "../types/Items"

type ButtonProps = {
    totalIncome: number
    sumTotal: (items: Item[]) => void
    items: Item[]
}

const Button = ({totalIncome, sumTotal, items}: ButtonProps) => {

    const styling = {
        fontWeight: "900",
        fontFamily: "arial",
        background: "black",
        color: "white",
        border: "none",
        padding: "6px 10px",
        letterSpacing: "2px",
        borderRadius: "5px",
        marginTop: "1.5rem"
    }


  return (
    <div className="row">
        <div className="col-12 my-3">
            <div style={styling}>{totalIncome}</div>
            <div className="text-center">
                <button className='btn btn-primary form-button me-2' id="btn" onClick={() => sumTotal(items)} >Sum Total</button>
            </div>
        </div>
    </div>
  )
}

export default Button