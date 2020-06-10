import React from 'react'
import { useSelector } from "react-redux"

export default function Children() {
    let count = useSelector(state => state.count)
    return (
        <div >
            
            <div className="minh-Box pl-5">

            </div>
            <h2>{count}</h2>
        </div>
    )
}
