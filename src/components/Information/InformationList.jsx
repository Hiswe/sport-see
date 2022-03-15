import React from 'react'
import Information from './Information'
import { ReactComponent as Calorie } from './icons/calorie.svg'
import { ReactComponent as Protein } from './icons/protein.svg'
import { ReactComponent as Lipide } from './icons/lipide.svg'
import { ReactComponent as Glucide } from './icons/glucide.svg'
import PropTypes from 'prop-types'

/**@function for showing cards
 * @component
 * @param {object} keyData
 * @returns (<InformationList/>)
 */

const InformationList = ({ keyData }) => {
    return (
        <>
            <Information
                icon={<Calorie />}
                title="Calories"
                value={`${keyData.calorieCount}kCal`}
            />
            <Information
                icon={<Protein />}
                title="Proteins"
                value={`${keyData.proteinCount}g`}
            />
            <Information
                icon={<Glucide />}
                title="Glucide"
                value={`${keyData.carbohydrateCount}g`}
            />
            <Information
                icon={<Lipide />}
                title="Lipides"
                value={`${keyData.lipidCount}g`}
            />
        </>
    )
}

export default InformationList

InformationList.propTypes = {
    keyData: PropTypes.object,
}
