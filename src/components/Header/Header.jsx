import React from 'react'
import './Header.scss'
import logo from './SportSeeLogo.svg'

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
            <HeaderItem to="/communite">Communité</HeaderItem>
        </div>
    )
}

export default Header
