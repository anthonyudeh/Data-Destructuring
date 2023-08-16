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

    orderPizza: function (mainIng, ...otherIng) {
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


if (restaurant.orderPizza) {
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
    name: 'Capri',
    numGuests: 20
}

const resturantTwo = {
    name: 'La Piazza',
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

//CODE CHALLENGE 

const Player1 = ['GoalKp1', 'md10', 'marcelo', 'carvajah', 'ronaldo', 'messi', 'KDB'];
const Player2 = ['GoalKp2', 'Mbappe', 'Lukkaku', 'Nkuku', 'Neymar', 'Big Benz', 'Tchmane'];

const allPlayers = [...Player1, ...Player2];

const PlayersFinal = ['Thiago', 'Coutinho', 'Peristic', ...Player1];

const game = {
    odd: {
        team1: 1.34,
        draw: 3.25,
        team2: 6.5
    },


    printGoals: function (...players) {
        console.log(`${players.length}`)
    }

}
game.printGoals('kimmich', 'player4')


//LOOPING THROUGH ARRAYS
//FOR OF LOOP

const firstArray = ['me', 'you', 'them', 'their', 'girls', 'boys'];
const secondArray = ['tee', 'gee', 'us', 'we', 'force', 'go', 'gone'];
const generalArry = [...firstArray, ...secondArray];

//loop through this array we use a 'For Of' 
for (const item of generalArry) console.log(item) //all elements are logged through the console. 'item' varaible is always is the current element in each iteration

//we can use the continue and break keywords in the for of 

// so if we want to give each of the array an index on the console we use the entries() method

for (const item of generalArry.entries()) console.log(item) // you see that the individual item has an index position in the array

//so lets see what the .entries() method does 

console.log([...generalArry.entries()])

for (const item of generalArry.entries()) //this returns index numbers
    console.log(`${item[0] + 1}: ${item[1]}`)

//modern way of doing this by destructuring 
for (const [a, b] of generalArry.entries())
    console.log(`${a + 1}: ${b}`);



//Enhanced Object Literal 
const weekdaysFMT = ['mon', 'tue', 'weds', 'thurs', 'fri', 'sat', 'sun']
const labourHours = {
    [weekdaysFMT[0]]: {
        open: 12,
        close: 22,
    },
    [weekdaysFMT[3]]: {
        open: 12,
        close: 22,
    },
    [weekdaysFMT[`day-${2 + 4}`]]: {
        open: 12,
        close: 22,
    },
}

//so we want to insert the labourhours in the firstObjectInfo in ES6
const firstObjectInfo = {
    name: 'Honey Due',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    mainCategory: ['Vegetarian', 'Organic', 'Pizza', 'Pineapples'],
    staterFood: ['Yam', 'Egg', 'Stew', 'Garri'],
    deliveryFood: ['Pizza', 'Burritos', 'Pancakes', 'Beans'],

    mainOrder: function (indexStarter, indexMain) {
        return [this.mainCategory[indexStarter], this.deliveryFood[indexMain]]
    },

    orderDelivery: function (obj) {
        console.log(obj)
    },

    // labourHours: labourHours, the property name is the same as item name 
    //ESformat just do this 
    labourHours,

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

    //enhance Methods in ES6

    orderPizza(mainIng, ...otherIng) {  //new format in ES6 method format
        console.log(mainIng);
        console.log(otherIng);
    },

    orderPizza: function (mainIng, ...otherIng) { //old format in ES6 method format
        console.log(mainIng);
        console.log(otherIng);
    }


}

console.log(firstObjectInfo);

//Property Names: You want to know the property names in an object 
const propertyNames = Object.keys(labourHours);
console.log(propertyNames);

//property values: You want to know the property values in an object 
const propertyValue = Object.values(labourHours)
console.log(propertyValue);


//loop the entire object
const loopObj = Object.entries(labourHours);
console.log(loopObj);

for (const j of loopObj) console.log(j); //loop through the loopObj

for (const [key, { open, close }] of loopObj) console.log(`On ${key} we open at ${open} and ${close}`);


//for (const [key,value]) inside value you destructure {open,close}; 

//Coding chanllege

/* 

1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1:Lewandowski")
*/

//Solution 1. 

const game2 = {
    team3: 'Bayern Munich',
    team4: 'Borrussia Dortmund',

    newPlayers: [
        [
            'Neuer',
            'Pavard',
            'Martinez',
            'Alaba'
        ],

        [
            'Burki',
            'Schuls',
            'Hummels',
            'Akanji',
            'Hakimi'
        ],
    ],

    score: '4:0',
    scored: ['Lewandowski', 'Hummels', 'Gnarby', 'Lewandowski'],
    date: 'Nov 9th, 2035',
    odds: {
        team2: 1.33,
        x: 3.25,
        team3: 6.5,
    }
}

//solution 1
for (const [key, player] of game2.scored.entries()) {
    console.log(`Goal ${key + 1}: ${player}`)
}

//calculate the odds average 
let average = 0;
const odds = Object.values(game2.odds);
for (const odd of odds)
    average += odd;
average /= odds.length;
console.log(average)


for (const [team, odd] of Object.entries(game2.odds)) {
    const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`
    console.log(`odd of ${teamStr}  ${odd}`);
}

//SET - this is collection of unique values 

const ordersSet = new Set(['Pasta', 'Pizza', 'Pizza', 'Risotto', 'Pasta', 'Pizza']);
console.log(ordersSet);
console.log(new Set('jonas'));

//Size of a set
console.log(ordersSet.size);

//check if an element is in a set 
console.log(ordersSet.has('Pizza'));
console.log(ordersSet.has('Bread'));

//add a string to a set 
console.log(ordersSet.add('Onion'));

//delete a set 
console.log(ordersSet.delete('Pizza'));

//there are no indexes in a set , the values are unique 

for (const order of ordersSet) console.log(order)

//console.log(ordersSet.clear())

const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
const newStaff = [...new Set(staff)];  //converted it to an array

console.log(newStaff);
console.log(new Set(['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter']).size);

//MAPS FUNDAMENTALS 
//a map is a data structure we use to map values to keys , we can have any time of keys(object or array)

const rest = new Map();
rest.set('name', 'Classico Italiano');
rest.set(1, 'Firenze, Italy');
console.log(rest.set(2, 'Lisbon, Portugal')); //returns the updated maps

rest.set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
    .set('open', 11)
    .set('close', 12)
    .set(true, 'We are open :D')
    .set(false, 'We are closed :)')

//if we want to get elements on the set 
console.log(rest.get('name'));
console.log(rest.get(true));

const time = 21;
console.log(rest.get(time > rest.get('open') && time < rest.get('close')))

console.log(rest.has('categories'));
rest.delete(2);
console.log(rest);

console.log(rest.size);
//rest.clear(); 

//using objects as keys
rest.set(document.querySelector('h2'), 'Heading');
console.log(rest);


//Map Iteration 
const arr4 = [1, 2];
rest.set(arr4, 'Test')
console.log(rest.get(arr4))

//new Map 

const question = new Map([
    ['question', 'What is the best programming language in the world?'],
    [1, 'C'],
    [2, 'Java'],
    [3, 'JavaScript'],
    ['Correct', 3],
    [true, 'Correct'],
    [false, 'Try again'],
])

console.log(question);

//convert objects to Maps 
const hoursMap = new Map(Object.entries(labourHours));
console.log(hoursMap);

//sometimes you can convert to an iterable using object.enteries() method
//Iteration looping using for of
for (const [key, value] of question) {
    if (typeof key === 'number')
        console.log(`Answer ${key}: ${value}`)
}


//const userAnswer = Number(prompt('Your Answer')); 
const userAnswer = 3;
console.log(question.get(question.get('Correct') === userAnswer));
console.log(userAnswer);

//covert map to array using spread operator 
console.log([...question]);
console.log([...question.keys()]);
console.log([...question.entries()]); // same thing with console.log([...question]);
console.log([...question.values()]);

//Data Structures, Modern Operators 
//When to Use each the data structures 

/* 
There are three sources of data 

1> The data can be written in the source code (e.g status messages that will be displayed on the browser based on the user's action); 

2> Data from the user or data written in DOM  (e.g tasks in todo app); 

3> Data from an API , external sources -> A WEB API, Application Programming Interface is used to get data from other website. for example using API to get weather chnage in a city


//So there's something called collections of data , so we need to collect data and store it somewhere 

//1.--------------------------------------------collection of data--------------------------------------------//

//--------(we store collections of data using "data structures" to store this data collection)---------------------------------------data structures-------------and we know there are four types of DS-------so now we need a way to decide which DS we are going to use -------------------// 

//----HOW TO DECIDE WHAT DATA STRUCTURE TO USE-----//
1. If we just need a smiple list of values then we just use  an 'ARRAY' or 'Set' (you use arrays when you need ordered list of values which might contain duplicates) also you use Sets when you are working with unique values ,you want to remove duplicates values froma an array and when high performance is important.


2. If we need key value pairs then we need an 'OBJECT' or 'MAP' 
Object is more traditional "Key/Values" i.e name: 'Tunde', also objects are easier to write and access value with .. and [] while on the other hand Map is better performace the key can be any data type i.e task = new Map([
    [false, 'Start Coding']
]); Also Maps are easy to compute size , Easy to iterate also. 

Use object when you need a method(functions, the 'this' key word) inside th object and when you are working with JSON 
Use Map when you simply need to map key to values and when you need keys that are not strings

Data from a web API comes in JSON format.
{
    "count": 3, 
    "recipes": [
        {
           "publisher": "101 Cookbooks", 
           "title": "101 Cookbooks"
        }
    ]
}

//the publisher, title are the keys

*/

//Coding CHX 

const gameEvents = new Map([
    [17, 'GOAL'],
    [36, 'Substitution'],
    [47, 'GOAL'],
    [61, 'Substitution'],
    [64, 'Yellow Card'],
    [69, 'Red Card'],
    [70, 'Substitution'],
    [72, 'Substitution'],
    [76, 'GOAL'],
    [80, 'GOAL'],
    [90, 'Full Time']
])

const eventsX = new Set(gameEvents.values())
// to convert this "const events = new Set (gameEvents.values())" into an array we do this 
const events = [...new Set(gameEvents.values())] //now we have converted to an array
console.log(events)


gameEvents.delete(64);
console.log(gameEvents);

//Here we are calculating an average of every 9 mins
console.log(`An event happened, on average, every ${90 / gameEvents.size} minutes`);

//Loop through the map 
for (const [key, values] of gameEvents) { //key and values could be anything 'min' and 'sec' x and y 
    const half = key <= 45 ? 'FIRST' : 'SECOND';
    console.log(`[${half} HALF] ${key}:${values}`);
}

//Working with Strings - PART 1
const airline = 'TAP Air Portugal';
const plane = 'A320';
console.log(plane[0]); //just like arrays 
console.log('B769E'[0]); //this will be the first element on the string 
console.log(plane.length);
console.log('AYR34JD'.length); //this will also work perfectly 

//String Methods
console.log(airline.indexOf('r')); //strings are also zero based
console.log(airline.lastIndexOf('r'));
console.log(airline.indexOf('portugal')) //this wil be -1

//Slice Method 
console.log(airline.slice(4)) //4 is the position the slicing with start to extract. this will return a new string 
//we can decide where we want to start slicing and where want to end slicing 
console.log(airline.slice(4, 7)) //7 is where the slicing will end.

//When we don't know the position of the string 
console.log(airline.slice(0, airline.indexOf(' ')));
console.log(airline.slice(airline.lastIndexOf(' ') + 1)) //it starts from 1 and elimates the space '0'


console.log(airline.slice(-2));
console.log(airline.slice(1, -1));


const checkMiddleSeat = function (seat) {
    //B and E are middle seats 
    const s = seat.slice(-1);
    if (s === 'B' || s === "E") {
        console.log('You got the middle seat :)')
    } else {
        console.log('You got lucky')
    }
}

checkMiddleSeat('11B');
checkMiddleSeat('23C');
checkMiddleSeat('3E');

//WHY can we call methods on strings? 
//So what happens is that JS does the following behind the scene
console.log(new String('Jonas')); //and as you can see on the console it returns an array and when you click on the prototype you can clear see all the methods we can use on thwe 'Jonas' string 

//and when we use thw typeOf 
console.log(typeof new String('Jonas')) //you see that its an Object
//and after JS coverts it to an object and we apply the method that we want JS converts it back toa string after the operation.

console.log(typeof new String('Jonas').slice(1)) //String 

console.log(airline.toLowerCase());
console.log('Tony'.toLowerCase());

const passenger = 'JoNas'
const passengerLower = passenger.toLowerCase();
const passengerCorrect = passenger[0].toUpperCase() + passengerLower.slice(1).toLowerCase();
console.log(passengerCorrect);


//Check Input Email /Comparing Emails
const email = 'hello@jonas.io';
const loginEmail = ' Hello@Jonas.Io \n'

const lowerEmail = loginEmail.toLowerCase();
const trimmedEmail = lowerEmail.trim();
console.log(trimmedEmail);

const normalizedEmail = loginEmail.toLowerCase().trim();
console.log(normalizedEmail)

console.log(email === normalizedEmail ? 'Valid Email' : 'Invalid Email');

//replacing strings 

const priceGB = '288,97E';
//so we need to replace the pound 'E' to dollar sign $
const priceUS = priceGB.replace('E', '$').replace(',', '.');
console.log(priceGB);

//we can replace the entire word not just a single letter
const announcement = 'All passengers come to boarding door 23. Boarding door 23!';
console.log(announcement.replace('door', 'gate'));

//to make the gate replacement take change on all instances we use something called a regualar expression 
console.log(announcement.replace(/door/g, 'gate'));

//Booleans Methods 

const plane2 = 'A320neo';
console.log(plane2.includes('A320')); //true
console.log(plane2.includes('GoinfA320')); //false
console.log(plane2.startsWith('Air')); //false


if (plane2.startsWith('Airbus') && plane2.endsWith('neo')) {
    console.log('get ready to fly')
} else {
    console.log('Wrong Airline')
}


//Practice exercise 
const checkBaggage = function (items) {
    const customerBaggage = items.toLowerCase();
    if (customerBaggage.includes('knife') || customerBaggage.includes('gun')) {
        console.log('You are not allowed on Board')
    } else {
        console.log('Welcome on Board')
    }
}

checkBaggage('I have a laptop and a Knife with me');
checkBaggage('Socks and camera');
checkBaggage('Got some sancks and a gun for protction');

//Split and Join
console.log('a+very+nice+string'.split('+')); //returns an array ["a", "very", "nice", "string"]

console.log('Jonas Schmedtman'.split(' ')) //returns an array ["Jonas", "Schmedtman"]; 
//So we can use the power of destructuring 
const [kfirst, ksecond] = 'Jonas Schmedtman'.split(' ');
const newName = ['Mr', kfirst, ksecond.toUpperCase()].join(' ');  //Here we used the join() method seperate the strings with ' '
console.log(newName);

const capitalizeName = function (name) {
    // const passengerName = name[0].toUpperCase() 
    // console.log(passengerName);

    //we want to caplitalize all the first letter in each word 
    const passengerName = name.split(' '); //this we return everything to array
    const passengerUpper = []
    for (const n of passengerName) { //we are looping through the array
        passengerUpper.push(n[0].toUpperCase() + n.slice(1));  //n[0] all the first letters to uppercase now we used the method push()
        //OR 
        passengerUpper.push(n.replace(n[0], n[0].toUpperCase()))
    };

    console.log(passengerUpper.join(' '));
}

capitalizeName('Hello my is James');
capitalizeName('hello, Please STOP!');

//Padding a string

const firstMessage = 'Go to gate 23!';
console.log(firstMessage.padStart(25, '+').padEnd(30, '+')); //extend the length of the string to 25 and added extra 5 making it 30;
console.log(firstMessage.padStart(25, '+').length);// and if we use the .length we have 25
console.log(firstMessage.padStart(25, '+').padEnd(30, '+').length)// and if we use the .length we have 30
console.log('Hello'.padEnd(24, '+'))

//Example 
const masterCard = function (number) {
    const str = String(number)  //or number + ' '
    const last = str.slice(-4);
    return last.padStart(str.length, '*')
}

console.log(masterCard(45654322345));
console.log(masterCard('323456543223453453'));

//Repeat Method 

//repeat the same string at the same time 
const message2 = 'Bad weather... All Departures Delayed... '
console.log(message2.repeat(5))


const planeInLine = function (n) {

    console.log(`There are ${n} planes in line ${'*'.repeat(n)}`)
}

planeInLine(5);
planeInLine(25);
planeInLine(2);
planeInLine(15);

//string methods you can check Mdn ---- mdn string replace for example 


//Coding Chanllenge 
/*
  write a program that recieves a list of variables name written in underscore_case and convert them to camelcase. 
  
  The input will come from a textarea inserted into the DOM (see code below), and convertion will happen when the button is pressed 

  this test data(pasted to textarea)
  underscore_case
  first_name
  Some_Variable 
  calculate_AGE
  delayed_departure

  SHOULD PRODUCE THIS OUTPUT (5 separate console.lof outputs)

  underscoreCase 
  firstName
  someVariable
  calculateAge
  delayedDeparture


*/

//Solution 

const inputField = document.querySelector('#input');
const clickBTN = document.querySelector('#btn');

clickBTN.addEventListener('click', function () {
    const data = inputField.value.toLowerCase().trim()
    const strArray = data.split('\n');
    for (const n of strArray) {
        const [zee, jah] = n.toLowerCase().trim().split('_');
        const output = `${zee}${jah.replace(jah[0], jah[0].toUpperCase())}`;
        console.log(output);
    }
})


const flights = '+_Delayed_Depature;fa093766109;txl2133758440;11:25+_Arrival;bru93766109;fao2133758440;11:45+_Delayed_Arrival;hel93766109;fao2133758440;12:05+Depature;fa093766109;lis2133758440;12:30';
//lets say we get this data from a web API and we need to format nicely into this 

//Delayed Depature from FAO to TXL (11h25)
//         Arrival from BRU to FAO (11h45)
// Delayed Arrival from HEL to FAO (12h09)
//        Depature from FAO to LIS (12h30)

const getCode = str => String(str.slice(0, 3).toUpperCase());

for (const flight of flights.split('+')){
    const [type, from, to, time] = (flight.split(';')); //loop and convert them to an array
    const output2 = `${type.startsWith('_Delayed') ? 'X' : ''}${type.replaceAll('_', ' ')} from ${getCode(from)} to ${getCode(to)} (${time.replace(':', 'h')})`.padStart(25, ' ')
    console.log(output2); 
}