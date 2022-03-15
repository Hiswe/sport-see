import React from 'react'
import logo from './SportSeeLogo.svg'

import './Header.css'
import HeaderItem from './Item.jsx'

/**@function Component header
 *@component
 *
 * @returns (<Header/>)
 */

const Header = () => {
    return (
        <div className="nav-bar">
            <div>
                <img src={logo} alt="sport-see-logo" />
            </div>
            <HeaderItem to="/">Accueil</HeaderItem>
            <HeaderItem to="/profil">Profil</HeaderItem>
            <HeaderItem to="/reglage">Réglage</HeaderItem>
            <HeaderItem to="/communite">Communauté</HeaderItem>
        </div>
    )
}

export default Header
