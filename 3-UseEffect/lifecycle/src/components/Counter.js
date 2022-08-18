import { useEffect, useState } from "react";

function Counter() {

  const [number, setNumber] = useState(0);
  const [name, setName] = useState("Alihan")

  useEffect(() => {
    console.log("component mount edildi");  // number değiştiğinde bunu console'da görmemizi sağlar

    const interval = setInterval(() => {    // her saniye number değeri 1 artar
      setNumber((n) => n + 1);
    }, 1000)
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    console.log("number güncellendi");  // number değiştiğinde bunu console'da görmemizi sağlar
  }, [number]);

  useEffect(() => {
    console.log("isim güncellendi");    // name değiştiğinde bunu console'da görmemizi sağlar
  }, [name]);

  return (
    <div>
      <h1>{number}</h1>
      <button onClick={() => setNumber(number + 1)}>Click</button>

      <h1>{name}</h1>
      <button onClick={() => setName("Mehmet")}>Click</button>
    </div>
  )
}

export default Counter