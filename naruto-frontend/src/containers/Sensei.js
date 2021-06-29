import React, {useState, useEffect} from 'react'
import SenseiLink from '../components/SenseiLink'
import SenseiForm from '../components/SenseiForm'
import DeleteSensei from '../components/DeleteSensei'

const Sensei = () => {
    const [sensei, setSensei] = useState([])
    const [senseiFormFlag, setSenseiFormFlag] = useState(false)
    const BASE_URL = "http://localhost:9292"

    useEffect(() => {
        fetch(BASE_URL + "/sensei")
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setSensei(data)
        }) 
    })

    const setFormTrue = (e) => {
        setSenseiFormFlag(true)
    }

    const addSensei = (senseis) => {
        fetch(BASE_URL + "/sensei", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(senseis)
        })
        .then(res => res.json)
        .then(data => {
            console.log(data)
            setSensei([...sensei, data])
        })
        setSenseiFormFlag(false)
    }

    const deleteSensei = (id) => {
        fetch(BASE_URL + `/sensei/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            },
        })
        .then(() => {
            const newSensei = sensei.filter(d => d.id !== id)
            setSensei(newSensei)
        })
    }
    
    const list = sensei.map(s => 
    <div>
        <SenseiLink key={s.id} sensei={s}/>
        <DeleteSensei sensei={s} deleteSensei={deleteSensei}/>
        <hr/>
    </div>)

    return (
        <div>
            <h1>Sensei</h1>
            <ul>{list}</ul>
            {senseiFormFlag ? <SenseiForm addSensei={addSensei} /> : <button onClick={setFormTrue}>Add  a  Sensei</button>}
        </div>
    )
}

export default Sensei

//const BASE_URL = "localhost:9292"
//fetch(BASE_URL + "/sensei")
//.then(res => res.json())
//.then(data => () {
//  console.log(data)
//})