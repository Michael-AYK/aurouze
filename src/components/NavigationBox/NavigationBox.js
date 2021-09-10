import React from 'react'
import { Link, BrowserRouter } from 'react-router-dom'
import { ACCUEIL, SERVICES, PRODUITS, PRODUITSPRO, PANIER, QUISOMMESNOUS, MARQUES, FAQ } from '../../navigation/CONSTANTS'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart, faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { PanierIcon } from '../PanierIcon/PanierIcon'
import {ButtonOval} from '../Buttons/ButtonOval'
import  { useSelector } from 'react-redux'
import "./NavigationBox.css"
import "./NavigationBoxMobile.css"
import "../../styles/ui.css"

export const NavigationBox = (props) => {
    const countPanier = useSelector(state => state)
    console.log(countPanier)
    return(
        <BrowserRouter>
            <div className="navigation-box">
                <ul>
                    <li> <Link to={SERVICES}> SERVICES <FontAwesomeIcon icon={faChevronDown} size="10px" color="#275101" />  </Link> </li>
                    <li> <Link to={PRODUITS}> NOS PRODUITS <FontAwesomeIcon icon={faChevronDown} size="10px" color="#275101" /> </Link> </li>
                    <li> <Link to={PRODUITSPRO}> PRODUITS PRO </Link> </li>
                    <li> <Link to={MARQUES}> MARQUES </Link> </li>
                    <li> <Link to={FAQ}> FAQ </Link> </li>
                    <li> <Link to={QUISOMMESNOUS}> QUI SOMMES NOUS ? </Link> </li>
                    <li> <Link to={PANIER} className="panierIconBox"> <PanierIcon counter={countPanier} /> </Link> </li>
                </ul>
            </div>
        </BrowserRouter>
        
    )
}