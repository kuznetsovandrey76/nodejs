let addTo = (passed) => {
    let add = (inner) => {
        return passed + inner;
    }
    return add;
}

let addThree = addTo(3);
console.log(addThree(1))