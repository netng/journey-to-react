import * as React from 'react'

export default function BlueButton({ onCustomClick, caption }) {
    return(
        <button style={{border: '1px solid green'}} onClick={onCustomClick}>{caption}</button>
    )
}