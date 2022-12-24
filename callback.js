//1
// setTimeout(() => {
// console.log("MERHAAB");
// },5000)

//2
// setInterval(() =>{
//     console.log("merhaba her saniye çalişiyom");
// },1000);

//3
// const sayHi = (cb) =>{
//     cb();
// }
// sayHi(() => {
//      console.log("Hello")
// })

//4
import fetch  from "node-fetch";
// fetch("https://jsonplaceholder.typicode.com/users")
// .then((data) => data.json())
// .then((users) => {
// console.log("users yğklendi",users);
//     fetch("https://jsonplaceholder.typicode.com/posts/1")
//     .then(data => data.json())
//     .then(posts => console.log("post 1 yğklendi",posts));

//     fetch("https://jsonplaceholder.typicode.com/posts/2")
//     .then(data => data.json())
//     .then((data) => console.log("post 2 üklendi",data));
// });

//5

// async function getData(){
//     const users = await (await fetch("https://jsonplaceholder.typicode.com/users")).json();

//     const post1 = await (await fetch("https://jsonplaceholder.typicode.com/posts/1")).json();

//     const post2 = await (await fetch("https://jsonplaceholder.typicode.com/posts/2")).json();

//     console.log("users", users);
//     console.log("post1", post1);
//     console.log("post2", post2);
// }
// getData()

(async () => {
    const users = await (await fetch("https://jsonplaceholder.typicode.com/users")).json();

    const post1 = await (await fetch("https://jsonplaceholder.typicode.com/posts/1")).json();

    const post2 = await (await fetch("https://jsonplaceholder.typicode.com/posts/2")).json();

    console.log("users", users);
    console.log("post1", post1);
    console.log("post2", post2);
})();