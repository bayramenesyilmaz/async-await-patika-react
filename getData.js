import axios from "axios";
  async function getData(user){
    try{
        const {data:users} = await axios.get(`https://jsonplaceholder.typicode.com/users/${user}`);

        const {data:posts} = await axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${users.id}`);

        users.posts = [posts[0]]
        console.log(users)


    }catch(error){
        console.log("HATA : " + error.message);
    }
}



export default getData;
