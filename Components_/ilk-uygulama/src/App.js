import './App.css';
import Header from './components/Header';
import User from './components/User';

const friends = [
  {
    id :1,
    name: "Ahmet"
  },
  {
    id :2,
    name: "Mehmet"
  },
  {
    id :3,
    name: "Ayşe"
  },
  {
    id :4,
    name: "Fatma"
  },
]

function App() {
  return (
    <>
      <User
        name="Alihan"
        surname="Degirmenciler"
        isLoggedIn={true}
        age={24}
        friends={friends}
      />
    </>
  );
}

// const name = "Mehmet";
// const isLoggedIn = false;
{/* <Header/>  Bu şekilde importladığımız değişkeni çağırabiliriz*/ }
/*<p>{`My name is: ${name}`}</p>
{/* isLoggedIn True ise Başarıyla.. Değilse Henüz .. */
{/*<p>{isLoggedIn ? `Başarıyla Giriş Yaptınız` : `Henüz Giriş Yapmadınız!`}</p> */ }




export default App;


