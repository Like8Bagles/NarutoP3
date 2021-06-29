import React from 'react'

const OneStudent = (props) => {
    return (
        <div>
            <h3>{props.student.name}</h3>
            <button onClick={() => props.deleteStudent(props.student.id)}>Delete</button>
        </div>
    )
}

export default OneStudent