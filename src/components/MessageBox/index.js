import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { ButtonOval } from '../Buttons/ButtonOval'
import palette from '../../styles/CONSTANTS'
import "./Messagebox.css"
import "../../styles/ui.css"
export function MessageBox({content, title, icon, action}) {
    
    return(
        <div className="msg-bg row center-flex">
            <div className="column center-flex">
                <div className="row center-flex pr-darken-bg">
                    <h6 className="roboto"> {title} </h6>
                    {icon}
                </div>
                <h6 className="msg-content roboto" > {content} </h6>
                <div className="row center-flex">
                    <ButtonOval bgColor={palette.palette.primary.main} label="OK" action={action} />
                </div>
                
            </div>
        </div>
    )
}