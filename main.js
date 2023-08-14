'use strict';

//ARRAYS, MAPS, OBJECTS, MODERN JS FEATURES LIKE DESTRUCTURING AND CHAINING, HOW TO WORK WITH STRINGS 


//food delivery application 
//Array Destructuring is a modern type of JS feature which involves breaking complex data structures down into smaller data structure like varibale , we retrieve day from an array and store them in variables 

const data = [0, 1, 2, 3];
const a = data[0];
const b = data[1];
const c = data[2];
console.log(a, b, c)


const [x, y, z] = data; // destructuring declaring all three variables at the same time
console.log(x, y, z); //[x,y,z] : this is not an array this is a destructuring assignment. 



const restaurant = {
    name: 'Jonas Store',
    location: 'Via Angelo Tavanti 23 Frienef, Italy',
    categories: ['italian', 'pizzeria', 'vegetarian', 'organic'],
    startMenu: ['Focaccia', 'Bruschetta', 'Garlic', 'Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],
    order: function (startIndex, mainIndex) {
        return [this.startMenu[startIndex], this.mainMenu[mainIndex]]
    }

};


//DESTRUCTURING ARRAYS

const [first, second] = restaurant.categories;
console.log(first, second);

const [, third, , fourth] = restaurant.categories;
console.log(third, fourth);

//so if we want to switch in destructuring assignmests without destructuring we do it like this 

let [main, secondary] = restaurant.startMenu;
//Switch without destructuring 
const temp = main;
main = secondary;
secondary = temp;

console.log(main, secondary);


//Switch with destructuring assignments 
[secondary, main] = [secondary, main]; //we just switch them like this 
console.log(main, secondary);


//destructuring the method in the resturant object 
console.log(restaurant.order(0, 1))

const [starter, mainCourse] = restaurant.order(2, 2)
console.log(starter, mainCourse);

//nested Array : You have one array inside another array
const nestedArray = [2, 3, [5, 6]];

//so we want to destructure the '2' and the nested array from the nestedArray variable
const [firstObj, , nestedArr] = nestedArray;
console.log(firstObj, nestedArr);

//so we want to destructure the main array and the elements in the nested array individually
const [i, , [j, k]] = nestedArray;
console.log(i, j, k);

//we do not know the length of the array and we want to destructure 
//Example: Lets pretend we do not know the length of the numbers array 
const newNumbers = [8, 9];
//and then we destructure with x,y,z 
const [p, q, r] = newNumbers;
console.log(p, q, r) //you notice that the 'r' is undefined because the array has two elements not 3; 

//we can set default values = 1 
//Example

const [s = 1, t = 1, u = 1] = newNumbers;
console.log(s, t, u)
//so this is useful when we are fetching data from an API; 

//DESTRUCTURING OBJECTS
const newResturrant = {
    name: 'Honey Due',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    mainCategory: ['Vegetarian', 'Organic', 'Pizza', 'Pineapples'],
    staterFood: ['Yam', 'Egg', 'Stew', 'Garri'],
    deliveryFood: ['Pizza', 'Burritos', 'Pancakes', 'Beans'],
    workHours: {
        thur: {
            open: 12,
            close: 22,
        },
        fri: {
            open: 12,
            close: 22,
        },
        sat: {
            open: 12,
            close: 22,
        },
    },

    mainOrder: function (indexStarter, indexMain) {
        return [this.mainCategory[indexStarter], this.deliveryFood[indexMain]]
    },

    orderDelivery: function (obj) {
        console.log(obj)
    },

    //we can perform destructuring here 
    freeDelivery: function ({ time, Address, indexStarter, indexMain }) {
        console.log(`Your free deliver food comes with ${this.mainCategory[indexStarter]} and ${this.staterFood[indexMain]} at ${time} and at ${Address}`)
    },

    //we can also assign values to the destructured items, this works if there's no room to destructure

    firstCustomer: function ({ time = '13:00', Address, indexStarter = 1, indexMain = 0 }) {
        console.log(`As our first customer you are going to get ${this.mainCategory[indexStarter]} and ${this.deliveryFood[indexMain]} at ${time} and at ${Address}`)
    },

    pastaDelivery: function (ing1 = 'bucartinni', ing2 = 'Egg roll', ing3 = 'vegetables') {
        console.log(`here is your delicious pasta made up of ${ing1}, ${ing2} and ${ing3}`)
    }, 

    orderPizza: function(mainIng, ...otherIng){
        console.log(mainIng);
        console.log(otherIng);
    }


}

newResturrant.orderDelivery({
    time: '12:30',
    Address: '36 chris Idowu',
    indexStarter: 2,
    indexMain: 3,
})

newResturrant.freeDelivery({
    time: '12:30',
    Address: '36 chris Idowu',
    indexStarter: 2,
    indexMain: 3,
})

newResturrant.firstCustomer({
    Address: '36 chris Idowu',
})


/*

const ingredients = [ prompt('Enter integredients to make pasta! Ingredient1?'), prompt('Enter integredients to make pasta! Ingredient2?'), prompt('Enter integredients to make pasta! Ingredient3?') ]; 
//using spread operator
console.log(newResturrant.pastaDelivery(...ingredients))
console.log(newResturrant.pastaDelivery(ingredients[0], ingredients[1], ingredients[2]))

*/ 

//so here we have an object and inside the object we have another object, values and a method

const { name, workHours, mainCategory } = newResturrant

console.log(name, workHours, mainCategory);
//so in object we use the curling braces const{ } to destructure but when you want to destructure an array it is const [], Also in objects you pass in the values in the object you want to destructure const {location, name, ...} = name of the object 

//but in array that deals with position you can use any varaible name const [x,,y,[i,j]] = name of the array

//so now in an object you see that the variable names are same with the name of values we want to destructure in the obj Example 
const { staterFood, deliveryFood } = newResturrant;
console.log(staterFood, deliveryFood)

//so now for use to reassign the variables this is what we will do
const { menu = [], staterFood: starters = [], deliveryFood: tasty = [] } = newResturrant;
console.log(menu, starters, tasty);

//mutating variables while destructuring objects
let d = 111;
let e = 999;
const obj = { d: 23, e: 42, f: 20 };
//to overide d and e and destructure
({ d, e } = obj); //we have mutated the original values of d and e
console.log(d, e)


//Destructuring nested Objects  
const { fri } = workHours;
console.log(fri);

//to destructure the open and close values 
const { thur: { open, close } } = workHours;
console.log(open, close);


//SPREAD OPERATOR
const arr = [7, 8, 9];
//creating a new array from an exisiting array 

const newArr = [1, 20, 35, arr[0], arr[1], arr[2]];
console.log(newArr);

//ES6 format using the spread operator 
const newArrES = [1, 20, 35, ...arr];
console.log(newArrES);

//if you want to log the individual elements of the array 
console.log(...newArrES); //when we new the elements of the array individually


const newStartedFood = [...staterFood, 'Lemon', 'Tea', 'Potato Chips'];
console.log(...newStartedFood);


//use cases of spread operator 
//copy array 
const mainStartedFood = [...staterFood];

//join 2 arrays 
const generalStartedFood = [...mainStartedFood, ...newStartedFood];


//Iterables: arrays, strings, maps, sets .NOT objects

const str = 'Hello';
const letters = [...str, ' ', 'S.'];
console.log(letters);

//so we can't a spread operator inside template string ${...str} this will not work because the template literal is not expecting multiple information, so we use this when we have an argument or an array

//using a spread operator inside an object to create a new object. 

const exclusiveRestaurant = {
    ...newResturrant,
    churchDays: {
        charismaicHour: 'Tuesday',
        bibleStudy: 'Thursday',
        lightFellowship: 'Sunday'
    },

    churchDeliveryFood: function (food1 = this.deliveryFood[0], Day1 = this.churchDays.charismaicHour) {
        console.log(`I am going to get ${food1} before going to church on ${Day1}`);
    }
}

console.log(exclusiveRestaurant);
exclusiveRestaurant.churchDeliveryFood();

const newExclResCopy = { ...exclusiveRestaurant };
newExclResCopy.churchDays.lightFellowship = 'Wednesday';
console.log(newExclResCopy);


//Rest Pattern 
// so for the rest pattern is has the same ... signature or notation like the spread operator but it used on the left hand side of the equality operator while the spread operator is used on the right side.

const lst = [1, 3, 5, 8, 19, 20];
const newLSt = [20, 70, 891, ...lst, 59]; //used on the right side 

//now to destructure this newLst array we can use the rest pattern 
const [, g, h, ...others] = [20, 70, 891, ...lst, 59]; // the rest patern on the left hand side of the equality operator and the spread operator on the right hand side of the equality operator
console.log(g, h, others);

//using rest pattern and spread operators inside an Array.
const [pizza, risotto, ...otherFood] = [...restaurant.mainMenu, ...restaurant.startMenu];
console.log(pizza, risotto, otherFood);

//using rest pattern and spread operators inside an Object.
const { sat, ...weekdays } = newResturrant.workHours;
console.log(sat, weekdays);

//using rest pattern and spread operators inside a function.
const add = function (...numbers) { //rest pattern taking multiple arguements 'rest arguments' and add them inside an array
    let sum = 0
    for (let i = 0; i < numbers.length; i++) 
        sum += numbers[i];
        console.log(sum);
}
add(2, 3, 20);
add(5, 5, 6, 8, 9);
add(5, 5, 6, 8, 9, 11, 13, 15);

const v = [23, 5, 7]; 
console.log(...v); 

newResturrant.orderPizza('mushrooms', 'onion', 'olives', 'spinach'); 
newResturrant.orderPizza('mushrooms')


//AND and OR operators

//OR operator
//operators can be use with any data type , return any data type and short-circuiting or short-circuit evaluation

console.log(3 || 'Jonas') // this is the meaning of short circuting and it returns the first value if it is a truthy value
console.log(0 || 'Jonas') // it returns the first value if it is a truthy or else it returns the string 'Jonas'

 console.log(undefined || null) //it returns a null because thats the end of short-circuiting 

 console.log(undefined || 0 || '' || 'Hello' || 23 || null) //it returns Hello because hello string is first truthy value; 


 const guest1 = newResturrant.Guest1 ? newResturrant.Guest1 : 10; 
 console.log(guest1);

 const guest2 = newResturrant.location || 10; //newResturrant.location has a string of an address which is a truthy value thats why we having an address to the console   
console.log(guest2);

newResturrant.Guest2 = 23; 
const guest3 = newResturrant.Guest2 || 10; 
console.log(guest3);

newResturrant.Guest3 = 0; 
const guest4 = newResturrant.Guest3 || 15;  //because '0' is a falsy value. 
console.log(guest4); //we will come up with a solution for this later 


//AND operator 

console.log(0 && 'jonas') //this is more strict than the or operator if the first value is a falsy value it immediately returns the falsy value to the console without evaluting the second value. 

console.log(7 && 'kelvin' && 23 && true)// the string is returned why because if the value before the last value is true short circuiting continues

console.log(7 && 'kelvin' && 23 && true && null && 'Jonnas')
  

if(restaurant.orderPizza){
    restaurant.orderPizza('mushrooms', 'spinach')
}

//nulling 

newResturrant.Guest4 = 0; 
const guest5 = newResturrant.Guest4 || 10; 
console.log(guest5); // on the console 10 ia going to log to the console because newResturrant.Guest4 is assigned to 0 which is falsy value. 

//so now to solve this 

const guest6 = newResturrant.Guest4 ?? 10; //this is nullish coalasing operator 
console.log(guest6); //'0' is logged to the console.

//Logical Assignment Operators (introduced in ES2021)


const resturantOne = {
    name:'Capri', 
    numGuests: 20
}

const resturantTwo = {
    name:'La Piazza', 
    owner: 'Giovanni Rossi'
}

resturantOne.numGuests = resturantOne.numGuests || 10;
resturantTwo.numGuests = resturantTwo.numGuests || 10;
console.log(resturantOne, resturantTwo); 


//Or Logical Operator 
//so what we have above we can do it in a more modern and concised way
resturantOne ||= 10; 
resturantTwo ||= 10; 
console.log(resturantOne, resturantTwo);

//for falsy values use this operator ??= 10 //nullish assignment operator which means null or undefined 

//And Logical Operator 

resturantTwo.owner = resturantTwo && '<ANONYMOUS>';
resturantOne.owner = resturantOne && '<ANONYMOUS>';  //output undefined because owner is not a property
console.log(resturantTwo, resturantOne)

//shorthand for AND logical operator 
resturantTwo.owner &&= '<ANONYMOUS>';



