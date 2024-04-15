// FOREACH
const array = [1, 2, 3, 4, 5]

array.forEach((number) => {})

array.map((number) => {
    return number * 2
}) // [2, 4, 6, 8, 10]

array.filter((number) => {
    return number > 4
})

array.find((number) => {
    return number > 2
})
