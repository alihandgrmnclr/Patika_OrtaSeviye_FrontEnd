import { Link } from 'react-router-dom'
import { useEffect, useState } from "react"
import axios from "axios"

function Users() {

    const [loading, setLoading] = useState(true);
    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios("https://jsonplaceholder.typicode.com/users")
            .then((res) => { setUsers(res.data) })
            .catch((err) => console.log(err))
            .finally(() => setLoading(false));
    }, [])

    return (
        <div>
            <h1>Users</h1>
            <ul>
                {loading && <div>Loading...</div>}
                {users.map((user) => (
                    <li key={user.id}>
                        <Link to={`/user/${user.id}`}>{user.name}</Link>
                    </li>))}
            </ul>
        </div>
    )
}

export default Users