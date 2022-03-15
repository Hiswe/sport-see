import React from 'react'
import { ReactComponent as SportSeeLogo } from '../components/Header/SportSeeLogo.svg'

import './UserList.scss'
import { Link } from 'react-router-dom'

/**@function for showing user list
 *
 * @returns (<UserList/>)
 */

const UserList = () => {
    return (
        <div className="user-list">
            <SportSeeLogo className="logo-page" />
            <Link to="/user/12" className="user">
                <h2>Karl Dovineau</h2>
            </Link>
            <Link to="/user/18" className="user">
                <h2>Cecilia Ratorez</h2>
            </Link>
        </div>
    )
}

export default UserList
