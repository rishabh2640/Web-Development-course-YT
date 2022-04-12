console.log('this is tutorial of JS no. 45');



function greet(name, greet="Greetings for"){ //greet is value is default so it will only execute when you won't call this greet value.
console.log(name + " is a good boy");
console.log(greet + " " + name);
}


let name0 = "Rishabh";
let name1 = "Rahul";
let name2 = "Shobit";
let name3 = "Ram";
let greettext = "Good Morning";

greet(name0, greettext);
greet(name1, greettext);
greet(name2, greettext);
greet(name3);

let returnVal = greet(name3);
console.log(returnVal); // Output will be Undefined because this function won't return any value.



function add( a, b, c, d){ 
    let e = a + b + c + d;
    return e;
}

console.log( add( 2,3,5,5 ));


