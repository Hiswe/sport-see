import React from 'react'

import './Dashboard.scss'
import Activity from '../components/Activity/Activity.jsx'
import DurationSessions from '../components/DurationSessions/DurationSessions.jsx'
import Performance from '../components/Performance/Performance.jsx'
import Score from '../components/Score/Score.jsx'
import InformationList from '../components/Information/InformationList'
import useApi from '../hooks/useApi.js'

/**@function for showing  dashboard  to page
 *
 * @returns (<Dashboard/>)
 */

const Dashboard = () => {
    const { data, isLoading } = useApi({ methodName: `getUser` })

    return (
        <main className="main-container">
            {isLoading ? (
                `loading…`
            ) : (
                <section className="profile">
                    <h1>
                        Bonjour <span>{data.userInfos?.firstName}</span>
                    </h1>
                    <p>
                        Félicitation ! Vous avez explosé vos objectifs hier 👏
                    </p>
                </section>
            )}
            <section className="container">
                <Activity />
                <DurationSessions />
                <Performance />
                <Score
                    isLoading={isLoading}
                    score={data.score}
                    todayScore={data.todayScore}
                />
                <InformationList keyData={data.keyData} isLoading={isLoading} />
            </section>
        </main>
    )
}

export default Dashboard
