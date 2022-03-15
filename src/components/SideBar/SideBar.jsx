import React from 'react'
import { Link } from 'react-router-dom'


import './SideBar.css'
import { ReactComponent as YogaIcon } from '../../assets/images/YogaIcon.svg'
import { ReactComponent as SwimIcon } from '../../assets/images/SwimIcon.svg'
import { ReactComponent as BodyBuildIcon } from '../../assets/images/BodyBuildIcon.svg'
import { ReactComponent as BycIcon } from '../../assets/images/BycIcon.svg'
/** @function for showing side bar
 * @component sidebar
 * @returns ( <SideBar/>)
 */

const SideBar = () => {
    return (
        <aside className="side-bar">
            <nav className="side-bar__nav">
                <Link to="/yoga" className="side-bar__link">
                    <YogaIcon className="icons" />
                </Link>
                <Link to="/swimming" className="side-bar__link">
                    <SwimIcon className="icons" />
                </Link>
                <Link to="/bodyBuilding" className="side-bar__link">
                    <BodyBuildIcon className="icons" />
                </Link>
                <Link to="/biking" className="side-bar__link">
                    <BycIcon className="icons" />
                </Link>
            </nav>
            <footer className="side-bar__footer">Copyright, SportSee 2020</footer>
        </aside>
    )
}

export default SideBar
