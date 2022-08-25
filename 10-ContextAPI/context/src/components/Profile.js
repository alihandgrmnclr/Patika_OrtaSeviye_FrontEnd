import { useState } from 'react'
import { useUser } from '../Context/UserContext'

function Profile() {

    const { user, setUser } = useUser();

    const [loading, setLoading] = useState(false);

    const handleLogin = () => {             // Login butonu basıldığında çalışacak
        setLoading(true);                   // loading yazısı
        setTimeout(() => {                  // 1 sn sonra giriş yapılacak ve user bilgileri aşağıdaki gibi verilecek
            setUser({ id: 1, usernam: "alihan", bio: "lorem ipsum dolar sit" })
            setLoading(false);
        }, 1000)
    }

    const handleLogout = () => {             // Logout butonu basıldığında user null çevirdik
        setUser(null);
    }

    return (
        <div>
            {
                (!user && (<button onClick={handleLogin}>{loading ? "Loading..." : "Login"}</button>))  // eğer user varsa login butonunu kaybettik
            }
            < br />
            <code>
                {JSON.stringify(user)}
            </code>
            <br />
            {
                (user && (<button onClick={handleLogout}>Logout</button>))  // user varsa logout butonu oluşacak
            }
        </div>
    )
}

export default Profile 