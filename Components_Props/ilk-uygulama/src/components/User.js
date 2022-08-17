import PropTypes from "prop-types";

function User({ name, surname, isLoggedIn, age, friends ,address}) {

    if(!isLoggedIn){
        return <div>Giriş Yapmadınız</div>
    }

    return (
        <>
            <h1>{`Giriş Başarılı, Hoşgeldiniz ${name} ${surname}`} </h1>

            <p>{address.title}/{address.zip}</p>

            {friends.map((friend) => {
                const x = friend.id + 2;    // Burada herhangi başka bir işlem yapabileceğimizi gösterdik
                return <div key={friend.id}>{friend.name}</div>  // array'lerde en dıştaki elemena "key" vermemiz gerekiyor 

            })}

        </>
    )
};

User.propTypes = {
    name: PropTypes.string.isRequired,  // isRequired yazarak bu veriyi gerekli hala getiririz. Olmazsa hata verir ve undefined yazar
    surname: PropTypes.string.isRequired,
    age: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired, // oneOfType ile birden fazla type tanımlayabiliriz. Age hem string hem number olabilir
    isLoggedIn: PropTypes.bool.isRequired,
    friends: PropTypes.array.isRequired,
    address: PropTypes.shape({
        address: PropTypes.string,
        zip: PropTypes.number
    }).isRequired,
};

User.defaultProps = {
    isLoggedIn:false
};

export default User;