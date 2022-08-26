/// promise fetch
//const getData = () => {
//     const url ="https://jsonplaceholder.typicode.com/posts";

//     fetch(url)
//     .then((res) => res.json())
//     .then((result) => console.log (result));
// };

// getData();

let username = document.getElementById("username")
let followers = document.getElementById("followers")


const getDataGithub = async () => {
    const url = "https://api.github.com/users/inaseptiana";
    let response = await fetch(url);
    let result = await response.json();
    username.innerText = result.login;
    followers.innerText = result.followers
    
    console.log(result);
};
getDataGithub ()
