import React, { useEffect, useState } from 'react'
import Activity from '../components/Activity/Activity'
import DurationSessions from '../components/DurationSessions/DurationSessions'
import Performance from '../components/Performance/Performance'
import './Dashboard.scss'
import Score from '../components/Score/Score'
import { useNavigate, useParams } from 'react-router'
import { API } from '../Api'
import InformationList from '../components/Information/InformationList'
/**@function for showing  dashboard  to page
 *
 * @returns (<Dashboard/>)
 */

const Dashboard = () => {
    const params = useParams()
    const Navigate = useNavigate()

    const [user, setUser] = useState({})

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = await API.getUser(params.id)
                setUser({
                    id: response.id,
                    name: response.userInfos.firstName,
                    calorie: response.keyData.calorieCount,
                    protein: response.keyData.proteinCount,
                    glucoside: response.keyData.carbohydrateCount,
                    lipid: response.keyData.lipidCount,
                })
            } catch (error) {
                console.error(`Can't retrieve the user`)
                console.log(error)
                Navigate('*')
            }
        }
        fetchUser()
    }, [Navigate, params.id])

    return (
        <main className="main-container">
            <section className="profile">
                <h1>
                    Bonjour <span>{user.name}</span>
                </h1>
                <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
            </section>
            <section className="container">
                <article className="container-chart">
                    <Activity userId={user.id} />
                    <div className="cards-info">
                        <DurationSessions userId={user.id} />
                        <Performance userId={parseInt(user.id)} />
                        <Score userId={user.id} />
                    </div>
                </article>
                <article className="container-information">
                    <InformationList
                        calorie={user.calorie}
                        protein={user.protein}
                        glucoside={user.glucoside}
                        lipid={user.lipid}
                    />
                </article>
            </section>
        </main>
    )
}

export default Dashboard
