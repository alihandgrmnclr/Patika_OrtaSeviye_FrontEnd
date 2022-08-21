import { useParams, Link } from 'react-router-dom'
import { useState, useEffect } from "react"
import axios from "axios"

function User() {

    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState({});
    const { id } = useParams();

    useEffect(() => {
        axios(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then((res) => { setUser(res.data) })
            .finally(() => setLoading(false));
    }, [id])    // burda [id] yazmasaydık her "next user" bastığımızda sayfa değişmezdi

    return (
        <div>
            <h1>User Detail</h1>
            <code>
                {loading && <div>Loading...</div>}
                {!loading && <code>{JSON.stringify(user)}</code>}
                <br /><br />
                <Link to={`/user/${parseInt(id)+1}`}>Next User({parseInt(id)+1})</Link>
            </code>
        </div>
    )
}

export default User;