// Day 11 - Arrow vs Normal Functions
// JS For Everyone

function Person() {
    console.log(this)
}

const person = () => {
    console.log(this)
}

Person()
person()
