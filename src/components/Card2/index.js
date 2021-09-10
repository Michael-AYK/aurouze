import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { ButtonOval } from '../Buttons/ButtonOval'
import palette from '../../styles/CONSTANTS'
import "./Card2.css"
import "../../styles/ui.css"

export function Card2({imgSrc, name, price, action}){
    console.log(action)
    return(
        <div className="card2 column center-flex">
            <img alt={name} src={imgSrc} />
            <h6 className="montserrat pr-darken-fore"> {name} </h6>
            <h5 className="montserrat pr-darken-fore"> {price} </h5>
            <ButtonOval bgColor={palette.palette.primary.main} label="Ajouter au panier" action={action} nameSup={name} />
            
        </div>
    )
}