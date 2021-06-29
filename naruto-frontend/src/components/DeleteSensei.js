import React from 'react'

const DeleteSensei = (props) => {
    return (
        <div>
            <button onClick={() => props.deleteSensei(props.sensei.id)}>Delete</button>
        </div>
    )
}

export default DeleteSensei