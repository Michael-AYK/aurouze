import React, {useState} from 'react'
import { NavigationBox } from '../../components/NavigationBox/NavigationBox'
import {ButtonOval} from '../../components/Buttons/ButtonOval'
import {SearchBar} from '../../components/SearchBar/SearchBar'
import  { Card1 } from '../../components/Card1'
import  { Card2 } from '../../components/Card2'
import palette from '../../styles/CONSTANTS'
import logo from '../../assets/logo.jpg'
import img3 from '../../assets/img3.jpeg'
import magasin from '../../assets/magasin.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhoneAlt, faUserAlt, faCheck, faBars, faTimesCircle } from '@fortawesome/free-solid-svg-icons'
import { data } from '../../helpers/h_items_data'
import { b_data_1, b_data_2 } from '../../helpers/b_items_data'
import { Footer } from '../../components/Footer'
import { useDispatch } from 'react-redux'
import { acheter, annuler } from '../../redux/actions/panierActions'
import { MessageBox } from '../../components/MessageBox'
import MediaQuery from 'react-responsive'
import "./accueil.css"
import "./accueilMobile.css"
import "../../styles/ui.css"

export default function Accueil(){
    const dispatch = useDispatch()
    const [succesMsg, setSuccesMsg] = useState(false)
    const [productToAdd, setProductToAdd] = useState('')
    const [toogleMobileMenu, setToogleMobileMenu] = useState('hide')
    
    function onToggleMobileMenuPressed() {
        setToogleMobileMenu(toogleMobileMenu === 'hide'? 'show-flex': 'hide')
    }

    function ajouterAuPanier(nomDuProduit){
        dispatch(acheter())
        setProductToAdd(nomDuProduit)
        setSuccesMsg(true)
    }

    function closeMsg(){
        setSuccesMsg(false)
        setProductToAdd('')
    }

  function callHello(){
    alert("HELLO WORLD !")
  }

  function onSearchChange(text){
    console.log(text)
  }


    return(
        <div>
            <div className="accueil-first-row row center-flex pr-darken-bg">
                <h6 className="montserrat">POUR UNE LUTTE RAISONNÉE CONTRE LES NUISIBLES ET PARASITES</h6>
            </div>
            <div className="accueil-search-logo-container row center-flex">
                <img src={logo} alt="logo" />
                <MediaQuery minWidth={1224}>{/* pc */}
                    <SearchBar placeholder="Recherchez dans la boutique..." onChange={(e) => onSearchChange(e)} />
                    <h6> <FontAwesomeIcon icon={faPhoneAlt} size="10px" color={`#${palette.palette.primary.darken}`} /> 01 40 41 16  20</h6>
                    <ButtonOval bgColor={palette.palette.primary.main} iconBox={<FontAwesomeIcon icon={faUserAlt} size="19px" color="#fff" />} label="   Sign in" />
                </MediaQuery>

                <MediaQuery maxWidth={1224}> {/* tablettes et mobiles */}
                    <SearchBar placeholder="Recherchez..." onChange={(e) => onSearchChange(e)} />
                    <h6> <FontAwesomeIcon icon={faPhoneAlt} size="10px" color={`#${palette.palette.primary.darken}`} /></h6>
                    <ButtonOval bgColor={palette.palette.primary.main} iconBox={<FontAwesomeIcon icon={faUserAlt} size="19px" color="#fff" />}/>
                </MediaQuery>
                
            </div>
            <MediaQuery minWidth={1224}>{/* pc */}
                <NavigationBox />
            </MediaQuery>

            <MediaQuery maxWidth={1224}>{/* tablettes et mobiles */}
                <ButtonOval action={onToggleMobileMenuPressed} bgColor={palette.palette.primary.main} iconBox={<FontAwesomeIcon icon={faBars} size="10px" color="#fff" />} />
            </MediaQuery>
                
            <img className="souris_img" src={img3} alt="souris" />

            <div id="after_souris_row" className="row center pr-darken-bg">
                <img className="magasin_img" src={magasin} alt="magasin" />
                <h6>"SPECIALISTE DE LA DERATISATION ET DE LA LUTTE ANTINUISIBLES A PARIS DEPUIS 1872"</h6>
            </div>
        
            <div className="spacing-text-box row center-flex">
                <h6></h6>
                <h6>Une gamme de produits efficaces pour votre bien-être </h6>
            </div>
            <div className="after-space-text row center-flex">
                <h5>Découvrez nos services et prestations</h5>
            </div>
            
            <div className="row center-flex">
                {
                    data.map((item, index) => {
                        return <Card1 key={index} imgSrc={item.imgSrc} title={item.title} content={item.content} />
                    })
                }
            </div>

            <div className="spacing-text-box row center-flex">
                <h6></h6>
                <h6>Quelques produits pour une lutte efficace</h6>
            </div>
            <div className="after-space-text row center-flex">
                <h5>Vous ne pouvez pas vous rendre en magasin ? <br/>
                    Achetez directement en ligne </h5>
            </div>

            <div className="row center-flex">
                {
                    b_data_1.map((item, index) => {
                        return <Card2 key={index} imgSrc={item.imgSrc} name={item.name} price={item.price} />
                    })
                }
            </div>

            <div className="row center-flex">
                {
                    b_data_2.map((item, index) => {
                        return <Card2 key={index} imgSrc={item.imgSrc} name={item.name} price={item.price} action={ajouterAuPanier} />
                    })
                }
            </div>

            <Footer />

            {succesMsg ? <MessageBox title='Succès' content={`Produit ${productToAdd} ajouté`} action={closeMsg} icon={<FontAwesomeIcon icon={faCheck} size="2x" color="#fff" />}/> : null}

            <MediaQuery maxWidth={1224}>{/* tablettes et mobiles */}
                <div className={`mobile-navigation-container ${toogleMobileMenu}`} >
                    <NavigationBox />
                    <div className="close-mmenu-btn">
                        <ButtonOval action={onToggleMobileMenuPressed} bgColor={palette.palette.others.white} iconBox={<FontAwesomeIcon icon={faTimesCircle} size="10px" color="#702" />} />
                    </div>
                </div>
            </MediaQuery>
            
        </div>
    )
}