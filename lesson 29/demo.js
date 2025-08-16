// json: javascript object notation

// var a = {name: 'badmash', age: 20, isMale: true, hobbies: 'kill everyone'}

// console.log(a);

// var b = JSON.stringify(a);

// console.log(b);

// var c = JSON.parse(b);

// console.log(c);


console.log('startinggg')

setTimeout(() => {
    console.log('workdone hurray')
}, 1000) 

console.log('endinggg')

var p = new Promise((resolve, reject) => {
    setTimeout(() => { resolve(" finally won") }, 7000)
})

p.then((data) => console.log(data)).catch((err) => console.log("opps we were not able to win: ", err))
        