import React from 'react'
import { ResponsiveContainer, LineChart, Line, XAxis, Tooltip } from 'recharts'

import './DurationSessions.scss'
import useApi from '../../hooks/useApi.js'

const days = {
    1: 'L',
    2: 'M',
    3: 'M',
    4: 'J',
    5: 'V',
    6: 'S',
    7: 'D',
}

/**@function get day
 *
 * @param {number} indexDay
 * @returns {string} (letter of day)
 */
const getDay = (indexDay) => {
    return days[indexDay]
}

/**function  for showing duration session to line chart
 *@component
 * @return  (<DurationSessions/>)
 */

export default function DurationSessions() {
    const { data, isLoading } = useApi({ methodName: `getUserAverageSessions` })

    if (isLoading) return <div className="duration-session">Loading…</div>

    return (
        <div className="duration-session">
            <header className="durationSessions__header">
                <h1>Durée moyenne des sessions</h1>
            </header>
            <ResponsiveContainer aspect={1} >
                <LineChart
                    className="duration-chart"
                    width={250}
                    height={150}
                    data={data.sessions}
                    margin={{
                        top: 5,
                        right: 0,
                        left: 20,
                        bottom: 0,
                    }}
                >
                    <XAxis
                        dataKey="day"
                        stroke="white"
                        tickLine={false}
                        dy={1}
                        tickFormatter={getDay}
                    />

                    <Tooltip
                        content={(pointInfo) => {
                            if (!pointInfo.active) return null
                            const pointData = data.sessions.find(
                                (x) => x.day === pointInfo.label
                            )

                            return (
                                <div className="tool">
                                    {pointData.sessionLength} min
                                </div>
                            )
                        }}
                    />

                    <Line
                        className="line-information"
                        type="monotone"
                        dataKey="sessionLength"
                        stroke="white"
                        dot={false}
                        activeDot={{ r: 7 }}
                    />
                </LineChart>
            </ResponsiveContainer>
        </div>
    )
}
