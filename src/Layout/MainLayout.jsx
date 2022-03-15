import React from 'react'
import { Outlet } from 'react-router'

import Header from '../components/Header/Header'
import SideBar from '../components/SideBar/SideBar'

/**@function for show main layout
 *
 * @param {*} props
 * @returns( <MainLayout/>)
 *
 */

export default function MainLayout(props) {
    return (
        <>
            <Header />
            <SideBar />
            <div className="page-content">
                <Outlet />
            </div>
            
        </>
    )
}
