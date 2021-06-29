import React from 'react'
import { Link } from 'react-router-dom'

const SenseiLink = ({sensei}) => {
    return (
        <div>
            <Link to={`/sensei/${sensei.id}`}>
                <h3>{sensei.name}</h3>
            </Link>
        </div>
    )
}

export default SenseiLink