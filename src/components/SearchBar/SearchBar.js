import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import "./SearchBar.css"

export function SearchBar({placeholder, onChange}){

    return(
        <div className="searchbarBox">
            <input placeholder={placeholder} onChange={(e) => onChange(e.target.value)} />
            <div>
                <FontAwesomeIcon icon={faSearch} size="1x" color="#669128" />
            </div>
        </div>
    )
}