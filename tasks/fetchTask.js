// https://jsonplaceholder.typicode.com/
// https://www.youtube.com/watch?v=eKCD9djJQKc&list=PLqKQF2ojwm3l4oPjsB9chrJmlhZ-zOzWT&index=14


const fetch = require("node-fetch");

const requestURL = 'https://jsonplaceholder.typicode.com/users';
// const requestURL = 'https://api.vk.com/method/users.get?user_ids=238021563&fields=bdate&access_token=rr69mL0vuGYUQAYGKtot&v=5.103';
// const requestURL = 'https://api.vk.com/method/friends.get?user_id=238021563&order=hints&fields=bdate,photo_100&access_token=JL6QgTTJ7icQeimZvDGF&v=5.103';

let log = console.log;
// let toString = {}.toString;


fetch(requestURL)
        .then(response => response.json())
        .then(result => {
          let users = result.map(item => {
            return item.name
          })
          log(users)
        })
        .catch(err => {
          log(err) 
        });



// function listOfAllRepos(username, item = 1) {
//       const requestURL = `https://api.github.com/users/${username}/repos?page=${item}`;
  
//       fetch(requestURL)
//         .then(response => response.json())
//         .then(result => {

//           log(result)
//           // log(toString.call(result)) // [object Array]
//           // result.forEach((item, index, arr) => {
//           //     log(item.name)
//           // });
//         });
// }

// listOfAllRepos('kuznetsovandrey76')
