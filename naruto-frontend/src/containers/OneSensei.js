import React, { useState, useEffect } from 'react'
import StudentForm from '../components/StudentForm'
import OneStudent from './OneStudent'

const OneSensei = (props) => {
    const [sensei, setOneSensei] = useState({
        students: []
    })
    const [studentFormFlag, setStudentFormFlag] = useState(false)
    const BASE_URL = "http://localhost:9292"

    useEffect(() => {
        fetch(BASE_URL + `/sensei/${props.match.params.id}`)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setOneSensei(data)
        }) 
    })

    const setFormTrue = (e) => {
        setStudentFormFlag(true)
    }

    const addStudent = (student) => {
        fetch(BASE_URL + `/sensei/${sensei.id}/students`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(student)
        })
        .then(res => res.json)
        .then(data => {
            console.log(data)
            setOneSensei({
                ...sensei, 
                students: [...sensei.students, data]})
        })
        setStudentFormFlag(false)
    }

    const deleteStudent = (id) => {
        fetch(BASE_URL + `/sensei/${sensei.id}/students/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            },
        })
        .then(() => {
            const newStudents = sensei.students.filter(d => d.id !== id)
            setOneSensei({
                ...sensei, 
                students: newStudents
            })
        })
    }

    const list = sensei.students.map( s => <OneStudent key={s.id} student={s} deleteStudent={deleteStudent}/>)

    return (
        <div>
            <h1>{sensei.name}</h1>
            <hr/>
            <br/>
            <h2>Students:</h2>
            <br/>
            <ul>
                {list}
            </ul>
            <br/>
            {studentFormFlag ? <StudentForm addStudent={addStudent} sensei={sensei} /> : <button onClick={setFormTrue}>Add a Student</button>}
        </div>
    )
}


export default OneSensei