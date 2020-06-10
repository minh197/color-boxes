import React from 'react'
import { useSelector } from "react-redux"
import './App.css';

export default function Box() {
    let box = useSelector(state => state.box)
    return (
        <div className="minh-Box">
            <h2>This is box</h2>
        </div>
    )
}
