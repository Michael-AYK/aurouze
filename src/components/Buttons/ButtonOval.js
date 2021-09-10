import React from 'react'
import "./Button.css"

export function ButtonOval({action, label, bgColor, iconBox, nameSup}) {

    return <button className={`button button-oval button-${bgColor}`} onClick={() => action !== undefined? action(nameSup): null}> {iconBox? iconBox: null} {iconBox && label? <h5></h5> : null} {label? label: null} </button>
}