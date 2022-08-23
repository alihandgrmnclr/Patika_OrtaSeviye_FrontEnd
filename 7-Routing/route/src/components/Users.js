import { NavLink, Outlet } from 'react-router-dom'

import {useState, useEffect} from 'react'
import axios from 'axios'

function Users() {

    const [user, setUser] = useState([])
    const [loading, setLoading] = useState(true)

    // Backend'e gidip ilgili veriyi alıyoruz
    useEffect(() => {
        axios("https://jsonplaceholder.typicode.com/users")
        .then( (res) => setUser(res.data) )
        .catch( (e) => console.log(e))
        .finally( () => setLoading(false) )
    },[])

  return (
    <div>
        <h3>Users</h3>
        <div>
            {loading && <div>Loading... </div> }
        </div>
        <ul>
            {/* Backendden aldığımız verileri map ile listeliyoruz. array işlemlerinde en dıştaki elemanda "key" kullanımı zorunlu */}
            {
                user.map( (res) => (
                    <li key={res.id}>
                        <NavLink to={`${res.id}`}  > {res.name} </NavLink>
                    </li>
                ) )
            }
        </ul>

        <Outlet /> {/* Child element çağırır */}
    </div>
  )
}

export default Users