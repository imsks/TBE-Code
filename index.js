function isSalmaanKhanFan(iq) {
    return iq < 69
}

const promise = new Promise((resolve, reject) => {
    const iq = 68

    reject(isSalmaanKhanFan(iq))
    resolve(isSalmaanKhanFan(iq))
})

promise
    .then(() => {
        console.log("DATE")
    })
    .catch(() => {
        console.log("NO DATE")
    })
