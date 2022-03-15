import React from 'react'
import PropTypes from 'prop-types'

import './Information.scss'
/**function  card information
 * @component
 * @param {element}  icon svg
 * @param {number} value
 * @param {string} title
 * @returns (<Information/>)
 */

const Information = (props) => {
    return (
        <div className="information">
            <div className="information__icon">{props.icon}</div>
            <div className="information__content`">
                <span className="information__value"> {props.value}</span>
                <span className="information__title"> {props.title}</span>
            </div>
        </div>
    )
}

Information.propTypes = {
    icon: PropTypes.element.isRequired,
    title: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
}

export default Information
