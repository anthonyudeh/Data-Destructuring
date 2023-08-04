//ARRAYS, MAPS, OBJECTS, MODERN JS FEATURES LIKE DESTRUCTURING AND CHAINING , HOW TO WORK WITH STRINGS 


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
    }
}










