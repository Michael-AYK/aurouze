import React from 'react'
import logo from '../../assets/logo.jpg'
import { Link, BrowserRouter } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { faFacebookSquare, faInstagram, faYoutubeSquare } from '@fortawesome/free-brands-svg-icons'
import { ButtonOval } from '../Buttons/ButtonOval'
import palette from '../../styles/CONSTANTS'

import "./Footer.css"

export function Footer(props) {

    return(
        <BrowserRouter>
            <div className="">
                <div className="row center-flex foot pr-darken-bg">
                    <div className="c1 column center-flex">
                        <img src={logo} />
                        <h6 className="montserrat">Conseils, prestations et vente en ligne de solutions insecticides, raticides, souricides et produits pour la lutte contre les nuisibles, rongeurs et parasites. </h6>
                    </div>


                    <div className="row">
                        <div className="column c2">
                            <Link to="#">A propos de Aurouze</Link>
                            <Link to="#">Horaires d'ouverture</Link>
                            <Link to="#">Délais et garanties</Link>
                        </div>

                        <div className="column c2">
                            <Link to="#">Mon compte</Link>
                            <Link to="#">Votre panier</Link>
                            <Link to="#">Conditions générales de ventes</Link>
                        </div>

                        <div className="column c2">
                            <Link to="#">Vie privée</Link>
                            <Link to="#">Plan du site</Link>
                            <Link to="#">Contactez-nous</Link>
                        </div>
                    </div>

                    <div className="column c3">
                        <h6 className="noto_sans">Social media</h6>
                        <div>
                            <Link to="#"><FontAwesomeIcon icon={faInstagram} size="2x" color="#fff" /> </Link>
                            <Link to="#"><FontAwesomeIcon icon={faFacebookSquare} size="2x" color="#fff" /> </Link>
                            <Link to="#"><FontAwesomeIcon icon={faYoutubeSquare} size="2x" color="#fff" /> </Link>
                        </div>
                    </div>
                </div>

                <div className="row foot-bx-2 pr-darken-bg center-flex">
                    <h6 className="roboto foot-adresse">AUROUZE - 8 rue des halles, 75001 Paris . Tous droits réservés</h6>
                </div>
            </div>
        </BrowserRouter>
        
    )
}