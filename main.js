//ARRAYS, MAPS, OBJECTS, MODERN JS FEATURES LIKE DESTRUCTURING AND CHAINING , HOW TO WORK WITH STRINGS 

const resturanct = {
    name : 'Jonas Store', 
    location: 'Via Angelo Tavanti 23 Frienef, Italy', 
    categoried: ['italian', 'pizzeria', 'vegetarian', 'organic'], 
    startMenu: ['Focaccia', 'Bruschetta', 'Garlic', 'Bread', 'Caprese Salad'], 
    mainMenu: ['Pizza', 'Pasta', 'Risotto']
};

//food delivery application 
//Array Destructuring is a modern type of JS feature which involves breaking complex data structures down into smaller data structure like varibale , we retrieve day from an array and store them in variables 

const data = [0,1,2,3];
const a = data[0];
const b = data[1];
const c = data[2];
console.log(a,b,c)


const [x,y,z] = data; // destructuring declaring all three variables at the same time
console.log(x,y,z); 

