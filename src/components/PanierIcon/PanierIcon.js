import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { ButtonOval } from '../Buttons/ButtonOval'
import palette from '../../styles/CONSTANTS'
import "./PanierIcon.css"

export function PanierIcon({counter}) {
    return(
        <div className="panierIconBox">
            <ButtonOval bgColor={palette.palette.primary.main} iconBox={<FontAwesomeIcon icon={faShoppingCart} size="19px" color="#fff" /> } />
            <span> {counter} </span>
        </div>
    )
}