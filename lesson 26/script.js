class Animal {
    constructor(age, size, IQ, colour, teeth, habitat) {
        this .age = age;
        this .size = size;
        this .IQ = IQ;
    }
}

class lion extends Animal {
    constructor(age, size, IQ, name, colour, teeth, habitat) {
        super(age, size, IQ);
        this.name = name ;
        this.colour = colour;
        this.teeth = teeth;
        this.habitat = habitat;
    }
}

var a1 = new Animal(5, 'medium', 120);
var a2 = new Animal(3, 'small', 100);
var a3 = new Animal(10, 'large', 140);

var ob1 = new lion(4, 'large', 130, 'golden', 30, 'savannah');

console.log(a1.IQ);
console.log(a2.size);
console.log(a3.age);
console.log(typeof(a2)); 
console.log(a3.teeths);
console.log(ob1.age);
console.log(ob1.habitat);
