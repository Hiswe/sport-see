import React from 'react'
import { Link } from 'react-router-dom'

import './Item.css'

/**@function Component header
 *@component
 *
 * @returns (<HeaderItem/>)
 */

export default function HeaderItem(props) {
    return (
        <Link className="nav-link" to={props.to}>
            {props.children}
        </Link>
    )
}
