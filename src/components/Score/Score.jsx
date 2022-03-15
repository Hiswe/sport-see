import React from 'react'
import { PieChart, Pie, Cell } from 'recharts'
import PropTypes from 'prop-types'

import './Score.scss'


/**@function  for showing score to pie chat
 * @component
 * @param {number} score
 * @param {number} todayScore
 * @returns( <Score/>)
 */

const Score = (props) => {
    const data = props.score || props.todayScore
    return (
        <div className="score">
            <header className="score-header">
                <h1>Score</h1>
            </header>
            <div className="score-chart">
                <PieChart width={250} height={250}>
                    <Pie
                        data={[{ value: data }, { value: 1 - data }]}
                        dataKey="value"
                        innerRadius={70}
                        outerRadius={80}
                        startAngle={90}
                        endAngle={450}
                        fill="transparent"
                        stroke="transparent"
                    >
                        <Cell fill="red" />
                        <Cell fill="white" />
                    </Pie>
                </PieChart>
                <div className="score-info">
                    <div className="score-value">{data * 100}%</div>
                    <div className="score-text">de votre</div>
                    <div className="score-text">objectif</div>
                </div>
            </div>
        </div>
    )
}

Score.propTypes = {
    score: PropTypes.number,
    todayScore: PropTypes.number,
}

export default Score
