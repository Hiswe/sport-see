import React from 'react'

import './Performance.scss'
import {
    ResponsiveContainer,
    Radar,
    RadarChart,
    PolarGrid,
    PolarAngleAxis,
} from 'recharts'
import useApi from '../../hooks/useApi.js'

const kind = {
    1: 'Intensité',
    2: 'Vitesse',
    3: 'Force',
    4: 'Endurance',
    5: 'Energie',
    6: 'Cardio',
}
/**@function for get kind
 *
 * @param {number} indexKind
 * @returns (index of kind)
 */

const getKind = (indexKind) => {
    return kind[indexKind]
}
/**@function for  showing activity types as radar chart
 * @component
 * @returns (<Performance/>)
 */
export default function Performance() {
    const { data: performance, isLoading } = useApi({
        methodName: `getUserPerformance`,
    })

    if (isLoading) return <div className="performance">Loading…</div>

    return (
        <div className="performance">
            <ResponsiveContainer aspect={1}>
                <RadarChart
                    className="radar-chart"
                    outerRadius={90}
                    data={performance.data}
                    stroke="#FFFFFF"
                >
                    <PolarGrid radialLines={true} d={1} />
                    <PolarAngleAxis
                        className="text-information"
                        stroke="white"
                        dataKey="kind"
                        domain={[0, 250]}
                        axisLine={false}
                        tickCount={6}
                        tickFormatter={getKind}
                    />

                    <Radar
                        dataKey="value"
                        stroke="none"
                        fill="red"
                        fillOpacity={0.6}
                    />
                </RadarChart>
            </ResponsiveContainer>
        </div>
    )
}
