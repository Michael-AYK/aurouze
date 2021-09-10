import React from 'react'
import { Link, BrowserRouter } from 'react-router-dom'
import { ENSAVOIRPLUS } from '../../navigation/CONSTANTS'
import "./Card1.css"
import "../../styles/ui.css"

export function Card1({imgSrc, title, content}){
    
    return(
        <div className="card1 column center-flex">
            <img alt={title} src={imgSrc} />
            <h5 className="montserrat"> {title} </h5>
            <h6 className="montserrat"> {content} </h6>
            <Link to={ENSAVOIRPLUS} className="pr-darken-fore" >En savoir plus</Link>
        </div>
    )
}