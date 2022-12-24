//1 temel bekleme operasiyonu
// setTimeout(() => {
// console.log("MERHAAB");
// },5000)

//2 sürekli çalişabilirlik
// setInterval(() =>{
//     console.log("merhaba her saniye çalişiyom");
// },1000);

//3 kod yapısı
// const sayHi = (cb) =>{
//     cb();
// }
// sayHi(() => {
//      console.log("Hello")
// })

//4 import fetch and  fetch some data expmle
import fetch  from "node-fetch";
import axios  from "axios";
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

//5 Adding async and await methods and learn how it is works

// async function getData(){
//     const users = await (await fetch("https://jsonplaceholder.typicode.com/users")).json();

//     const post1 = await (await fetch("https://jsonplaceholder.typicode.com/posts/1")).json();

//     const post2 = await (await fetch("https://jsonplaceholder.typicode.com/posts/2")).json();

//     console.log("users", users);
//     console.log("post1", post1);
//     console.log("post2", post2);
// }
// getData()
//6 if you dont wanna write function two times u can use down methodS
// using axios
// (async () => {
//     const {data: users} = await axios("https://jsonplaceholder.typicode.com/users");

//     const {data: post1} = await axios("https://jsonplaceholder.typicode.com/posts/1");

//     const {data: post2} = await axios("https://jsonplaceholder.typicode.com/posts/2");

//     console.log("users", users);
//     console.log("post1", post1);
//     console.log("post2", post2);
// })();

const getUsers = (number) => {
    return new Promise(async (resolve,reject)  => {
         if (number === 1) {
            const {data} = await axios("https://jsonplaceholder.typicode.com/users");
            resolve(data)
         }
        reject("Bir hata var")
        
    })
}

const getPost = (post_id) => {
    return new Promise(async (resolve,reject)  => {
         if (post_id === 1) {
            const {data} = await axios("https://jsonplaceholder.typicode.com/posts/" + post_id);
            resolve(data)
         }
        reject("Bir hata var")
        
    })
}

// (async () => {
//     try{
//         const users =  await getUsers(3);
//         const post =  await getPost(1);
         
//         console.log(users);
//         console.log(post);
//     }catch(e){
//         console.log(e);
//     }
// })()
Promise.all([getUsers(3),getPost(1)]).then(console.log).catch(console.log);
