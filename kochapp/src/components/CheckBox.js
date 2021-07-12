import React from "react"
import PropTypes from 'prop-types'

function CheckBox(props) {
    return (
        <label className='checkbox'>
            <input
                type="checkbox"
                name="keepLoggedIn"
                checked={props.checked}
                onChange={props.onChange}
                className={props.className || 'checkbox-check'}
            />
            <span className='checkbox-label'>{props.labelText}</span>
        </label>
    )

}

CheckBox.propTypes = {
    name: PropTypes.string.isRequired,
    checked: PropTypes.bool,
    onChange: PropTypes.func,
    labelText: PropTypes.string,
    className: PropTypes.string
}

export default CheckBox