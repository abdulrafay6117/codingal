const a = ['spiderman', 'ironman', 'hulk', 'thor', 'black widow'];

console.log(a[0]);
console.log(a[2]);
console.log(a[3]);
console.log(a[5]);

var height = ['45', '50', '55', '60', '65'];
console.log(height[0]);
console.log(height[2]);
console.log(height[3]); 
console.log(height[5]);

var weight = ['false', 'true', 'false', 'true', 'false'];

console.log(a.join('_'));
a.pop();
console.log(a.join('+'));


function sum(a, b){
  return a + b;
}

function average(a, b,){
  return sum(a,b)/2
}


const result = average(10, 20);
console.log(result);

