function User({ name, surname, isLoggedIn, age, friends }) {
    return (
        <>
            <h1>{isLoggedIn ? `Giriş Başarılı, Hoşgeldiniz ${name} ${surname}` : `Henüz Giriş Yapmadınız`} </h1>

            {friends.map((friend) => {
                const x = friend.id+2;
                return <div key={friend.id}>{friend.name}</div>

            })}

        </>
    )

}
export default User;