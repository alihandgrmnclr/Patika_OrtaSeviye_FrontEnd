import { useEffect, useState } from 'react'
import axios from "axios"

function Users() {

    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(true);   // loading yazısı

    useEffect(() => {
        axios("https://jsonplaceholder.typicode.com/users")     // Component ilk yüklendiği zaman sadece 1 kere fetch işlemi yapmak için useEffect kullandık
            .then((res) => { setUsers(res.data) })
            .catch((e) => console.log(e))
            .finally(() => setIsLoading(false));              // burada veriler gelince loading yazısını false yapıyoruz
    }, [])

    return (
        <div>
            <h1>Users</h1>
            {isLoading && <div>Loading...</div>}                            {/* isLoading true ise gözüküyor */}
            {users.map((user) => <div key={user.id}>{user.name}</div>)}
        </div>
    )
}

export default Users