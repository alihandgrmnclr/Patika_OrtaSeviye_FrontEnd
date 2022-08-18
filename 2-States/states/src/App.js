import { useState } from 'react';
import Counter from './components/Counter';
import InputExample from './components/InputExample';

function App() {

  const [name, setName] = useState("Alihan");
  const [age, setAge] = useState(24);
  const [friends, setFriends] = useState(["Ahmet", "Mehmet"]);
  const [address, setAddress] = useState({ title: "Ankara", zip: 6000 })

  return (
    <div className="App">
      <h1>Merhaba {name}</h1>
      <h2>Yaşınız:{age}</h2>
      <button onClick={() => setName("Ahmet")}>Change Name</button>
      <button onClick={() => setAge(25)}>Change Age</button>

      <hr />
      <h2>Arkadaş Listesi</h2>

      {friends.map((friend, index) =>
        <div key={index}>{friend}</div>
      )}
      <button onClick={() => setFriends([...friends, "Ayşe"])}>Arkadaş Ekle</button>

      <hr />
      <h2>Adres</h2>
      {address.title}, {address.zip}<br />
      <button onClick={() => setAddress({ ...address, title: "Istanbul", zip: 34000 })}>Adres Değiş</button>
      <hr />

      <h1>Counter Uygulaması</h1>
        <Counter/>
      <hr />

      <h1>Input Uygulama</h1>
        <InputExample/>

    </div>


  );
}

export default App;
