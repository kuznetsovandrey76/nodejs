const people = [
    {name: 'Andrey', age: 29},
    {name: 'Irina', age: 25},
    {name: 'Empty', age: 12}
]

let log = console.log

// people.forEach(item => {
//     log(item.name)
// })

// const newPeople = people.map((item, index) => {
//     return item.name;
// })
// log(newPeople) // [ 'Andrey', 'Irina', 'Empty' ]


// const adults = people.filter(item => {
//     return item.age > 18;
// })
// log(adults) // [ { name: 'Andrey', age: 29 }, { name: 'Irina', age: 25 } ]

const amount = people.reduce((total, item) => {
    return total + item.age
}, 0)
log(amount) // 66