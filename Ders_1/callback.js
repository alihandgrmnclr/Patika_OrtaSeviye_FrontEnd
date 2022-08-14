// import fetch from "node-fetch";

import axios from "axios";  // axios kütüphanesi ile de fetch işlemi yapabiliriz

// fetch("https://jsonplaceholder.typicode.com/users")     //Birinci sıraya koyduk
//     .then((data) => data.json())
//     .then((users) => {
//         console.log("Users Yuklendi! ", users);

//         fetch("https://jsonplaceholder.typicode.com/posts/1")   //İkinci sıraya koyduk
//             .then((data) => data.json())
//             .then((post) => {
//                 console.log("Post 1 Yuklendi !", post)

//                 fetch("https://jsonplaceholder.typicode.com/posts/2")   //Üçüncü sıraya koyduk
//                     .then((data) => data.json())
//                     .then((data) => {
//                         console.log("Post 2 Yuklendi! ", data)
//                     });
//             });
//     });

// Bu yapıyı aşağıdaki gibi daha düzenli şekilde kullanabiliriz 

// async function getData() {

//     const users = await (
//         await fetch("https://jsonplaceholder.typicode.com/users")).json();

//     const post1 = await (
//         await fetch("https://jsonplaceholder.typicode.com/posts/1")).json();

//     const post2 = await (
//         await fetch("https://jsonplaceholder.typicode.com/posts/2")).json();

//     console.log("Users: ", users);
//     console.log("Post1: ", post1);
//     console.log("Post2: ", post2);

// }


//Axios eklentisi ile daha kolay şekilde kullanabiliriz

// ** Await mutlaka async bir fonksiyonunun içinde olmalı ** //
// async function getDataAxios() {

//     const {data: users} = await axios("https://jsonplaceholder.typicode.com/users");

//     const {data: post1} = await axios("https://jsonplaceholder.typicode.com/posts/1");

//     const {data: post2} = await axios("https://jsonplaceholder.typicode.com/posts/2");

//     console.log("Users: ", users);
//     console.log("Post1: ", post1);
//     console.log("Post2: ", post2);

// }           

// getData();
// getDataAxios();

const getUsers = () => {
    return new Promise(async (resolve, reject) => {
        const { data } = await axios("https://jsonplaceholder.typicode.com/users");
        resolve(data);
    });
};

const getPost1 = (post_id) => {
    return new Promise(async (resolve, reject) => {
        const { data } = await axios("https://jsonplaceholder.typicode.com/posts/" + post_id);
        resolve(data);
    });
};

//  (()=>{
//   bu şekilde de fonksiyon döndürebiliriz
//  })();

// (async () => {

//     try {
//         const users = await getUsers();
//         const post = await getPost1(1);

//         console.log(users);
//         console.log(post);
//     } catch (e) {
//         console.log(e);
//     }
// })();

