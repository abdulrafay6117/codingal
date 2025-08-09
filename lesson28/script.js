var a = '76'
console.log(typeof(a))

a = Number(a)

console.log(typeof(a))

console.log(typeof(NaN))

var b = [6, 8, 9, 20]

console.log(typeof(b))

try{
    //error code
    console.log("itz your boy rafay")
}catch(err){
    console.log("handing the error")
    console.log(err)
}


console.log("very important code")
console.log("so much imp code plz run me i beg you")

function sleep(a, b, c, d){
    console.log("putting sleep by black magic "+ a)
    console.log("putting sleep by black magic "+ b)
    console.log("putting sleep by black magic "+ c)
    console.log("putting sleep by black magic "+ d)
}

sleep('rafay', 'dawood', 'ahad', 'saad')

var sleep1 = a => console.log("putting sleep by black magic through sleep to  "+ a)

sleep1('rafay')

