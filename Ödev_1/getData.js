import axios from "axios";

// const getData = async (user_id) => {

//     const {data: User} = await axios(`https://jsonplaceholder.typicode.com/users/${user_id}`);
//     const {data: Posts} = await axios(`https://jsonplaceholder.typicode.com/posts?userId=${user_id}`);

//     User.Posts = Posts;

//     return User;
// };

async function getData(user_id) {

    const { data: user } = await axios(`https://jsonplaceholder.typicode.com/users/${user_id}`);
    const { data: posts } = await axios(`https://jsonplaceholder.typicode.com/posts?userId=${user_id}`);

    user.posts = posts
    return user;
};

export default getData;