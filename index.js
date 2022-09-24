const myPromise = new Promise((resolve, reject) => {
  const user = {id:1};
  if (!user) {
    reject("Something wrong");
  } else {
    setTimeout(() => {
      resolve({name:"John"});
    }, 1000);
  }
});



// myPromise
// .then(res => console.log(res))
// .catch(error=>console.log(error))
// console.log("done");



//Example-1
//akane amra myPromise take consume(data or error pawa) korechi
// const ids = [1,2,3,4,5];
// const usersInfo = [];
// for(let i = 0;i<ids.length;i++){
// //    const userId = ids[i];
//    myPromise.then(user =>{
//      usersInfo.push(user)
//    })
// }

//output akta [] asbe akane
// console.log(usersInfo);

//Example-2
// const ids = [1,2,3,4,5];
// const usersInfo = [];
// for(let i = 0;i<ids.length;i++){
//    usersInfo.push(myPromise)
// }
// console.log(usersInfo);
//Output
// [
//     Promise { <pending> },
//     Promise { <pending> },
//     Promise { <pending> },
//     Promise { <pending> },
//     Promise { <pending> }
// ]


// Promise
// .all(usersInfo)
// .then(res=>{
//     console.log(res);
// })


async function getInfo(){
  const res = await myPromise;
  console.log(res);
}

getInfo();

fetch("")
.then(res.json())
.then(data=>console.log(data))

async function getUser(){
  const res = await fetch("")
  const user = await res.json();

  const res2 = await fetch(`http://www.example.com/${user.id}`);
  const products = await res2.json();

  console.log(products);
}


getUser()



