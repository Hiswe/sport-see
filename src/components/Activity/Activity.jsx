import React from 'react'
import { ReactComponent as Oval } from '../../assets/images/Oval.svg'

import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
} from 'recharts'

import './Activity.scss'
import useApi from '../../hooks/useApi.js'

/**@function for tooltip
 *
 * @param {*} param0
 * @returns (custom tooltip)
 */
const CustomTooltip = ({ active, payload }) => {
    return active && payload ? (
        <div className="tool-tip">
            <div className="poids">{`${payload[0].value} Kg`}</div>
            <div className="calories">{`${payload[1].value} KCal`}</div>
        </div>
    ) : null
}

/**@function get day number
 *
 * @param {string} date
 * @returns {number} of day
 */
const getDayNumber = (date) => {
    const objetDate = new Date(date)
    return objetDate.getDate()
}

/**function for showing  to bar chart activity
 *@component
 * @returns (bar chart <Activity/>)
 */

export default function Activity(props) {
    const { data: activity, isLoading } = useApi({
        methodName: `getUserActivity`,
    })

    if (isLoading) return <div className="activity">`Loading…`</div>

    return (
        <div className="activity">
            <header className="card-header">
                <h3>Activité quotidienne</h3>
                <div className="card-indicator">
                    <div className="card-infos">
                        <Oval fill="#282D30" />
                        <span> Poids (kg)</span>
                    </div>
                    <div className="card-infos">
                        <Oval fill="#E60000" />
                        <span> Calories brûlées (kCal)</span>
                    </div>
                </div>
            </header>
            <ResponsiveContainer aspect={4}>
                <BarChart
                    data={activity.sessions}
                    barGap={8}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid horizontal="true" vertical="" />
                    <XAxis
                        dataKey="day"
                        dx={-10}
                        dy={1}
                        axisLine={false}
                        tickLine={false}
                        tickFormatter={getDayNumber}
                    />
                    <YAxis
                        dataKey="calories"
                        axisLine={false}
                        tickLine={false}
                        orientation="right"
                        // domain={['dataMin - 20', 'dataMax + 20']}
                    />

                    <Tooltip content={CustomTooltip} />
                    <Bar
                        dataKey="kilogram"
                        fill="#282D30"
                        barSize={7}
                        radius={[50, 50, 0, 0]}
                    />

                    <Bar
                        dataKey="calories"
                        fill="#E60000"
                        barSize={7}
                        radius={[50, 50, 0, 0]}
                    />
                </BarChart>
            </ResponsiveContainer>
        </div>
    )
}
