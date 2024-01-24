
// let firstName = [10, 20, 30, 40, 50];

// ############################## T  A  H  A  M  E  M  O  N ###############################
// ############################## 0  1  2  3  4  5  6  7  8 ###############################

// console.log(firstName[4]);
// console.log(firstName.length -1);

// Last index : Length -1 
// for(let a = 0; a <= 4; a++){
//     console.log(firstName[a]);
// }



// ############################### trim() ###############################
// ############################### toUppercase() ###############################
// ############################### toLowercase() ###############################
// ############################### slice() ###############################

// ############################### trim() ###############################

// let firstName = "     TahirMemon     ";

// console.log(firstName.length);
// firstName = firstName.trim();
// console.log(firstName.length);

// ############################### toUppercase() ###############################

// let firstName = "TahirMemon";
// firstName = firstName.toUpperCase();
// console.log(firstName);

// ############################### toLowercase() ###############################

// let firstName = "TahirMemon";
// firstName = firstName.toLowerCase();
// console.log(firstName);

// ############################### slice() ###############################
// ############################### Start index ###############################
// ############################### End index ###############################

// let firstName = "TahirMemon";
// firstName = firstName.slice(0,5);
// console.log(firstName);

// ############################### Types of operattor ###############################

// ############################### data types (primitive data types) ###############################
// ############################### string "TahaMemon" ###############################
// ############################### number 1, 2, 3, 4, 5 ###############################
// ############################### booleans ###############################
// ############################### undefined ###############################
// ############################### null ###############################
// ############################### Symbol ###############################

// let age = 20;                   // ##### type number #####
// let firstName = "TahaMemon";    // ##### type string #####

// console.log(typeof age); 

// ############################### Convert number to string ###############################
// ############################### 20 -> "20" ###############################

// age = age + "";
// console.log(typeof(age));       // ##### "20" #####

// ############################### Convert string to number ###############################

// let mystring = + "20";          
// console.log(typeof mystring);   // ##### 20 #####

// ############################### Convert number to string ###############################

// let age = 18;
// age = String(age);
// console.log(typeof age)

// ############################### Convert string to number ###############################

// let age = "18";
// age = Number(age);
// console.log(typeof age);

// ############################### string concatenation ###############################

// let string1 = "Taha";
// let string2 = "Memon";

// let FullName = string1 +string2;
// console.log(FullName);

// ############################### template string ###############################

// let age = 15;
// let firstName = "Taha_Memon"

// let aboutMe = `My name is ${firstName} and my age is ${age}`
// console.log(aboutMe);

// ############################### undefined ###############################

// let firstName;
// console.log(typeof firstName);    // -> undefined

// ############################### null ###############################

// let myVeriable = null;
// console.log(typeof myVeriable);     // -> null

// ############################### booleans & comparison operator ###############################

// ############################### booleans ###############################
// ############################### True, False ###############################

// let num1 = 12;
// let num2 = 10;

// console.log(num1>num2);        // ##### True #####

// ############################### == vs === ###############################


// ############################### ==  ###############################

// let num1 = 10;
// let num2 = 10;

// console.log(num1 == num2);    // ##### Equal value #####

// ###############################  === ###############################

// let num1 = "10";
// let num2 = "10";

// console.log(num1 === num2);    // ##### Equal value or Equal type #####

// ############################### if else condition ###############################

// let age = 18;

// if(age ==18){
    // console.log("User can play pubg")      //-> True this console run
// } else{
    // console.log("User can play pubg lite")    //-> False this console run
// }

// ############################### FALSEY VALUES ###############################
                                         
// ############################### "" ###############################
// ############################### null ###############################
// ############################### undefined ###############################
// ############################### 0 ###############################

// ############################### TRUTHY VALUES ###############################

// ############################### "abc" ###############################
// ############################### 1, -1 ###############################

// ############################### ternary operator / conditional operators ###############################

// let age = 3;
// let drink = age >= 5 ? "Coffee" : "Milk";     // ##### Left side true  ##### 
// console.log(drink);                           // ##### Right side flase #####   

// ############################### and or operator ###############################

// ############################### && operator ###############################

// let firstName = "Taha"
// let age = 22;

// if(firstName[0] === "T" && age > 18){       // ##### Left side true  ##### 
//     console.log("Inside if");               // ##### Right side false  ##### 
// } else{                                     // ##### Two condition true than run #####
//     console.log("Inside else");
// }

// ############################### || operator ###############################

// let firstName = "Taha"
// let age = 22;

// if(firstName[0] === "T" || age > 18){       // ##### Left side true  ##### 
    // console.log("Inside if");               // ##### Right side false  ##### 
// } else{                                     // ##### one condition true than run #####
    // console.log("Inside else");
// }

// ############################### nested if else ###############################

// let winningNumber = 20;
// let userGuess = prompt("Guess a number");

// if(userGuess === winningNumber){
//     console.log("Your guess is right");
// }else{
//     if(userGuess < winningNumber){
//         console.log("too low !!!");
//     }else{
//         console.log("too high !!!");
//     }
// }

// ############################### else if ###############################

// let tempInDegree = 15;

// if(tempInDegree < 1){
    // console.log("Extremely cold outside");
// } else if(tempInDegree < 16){
    // console.log("It is cold outside");
// } else if(tempInDegree < 25){
    // console.log("Wheather is okay");
// } else if(tempInDegree < 35){
    // console.log("Lets go for swim");
// } else if(tempInDegree < 45){
    // console.log("turn on AC");
// }else{
    // console.log("too hot!!");
// }

// ############################### switch statment ###############################


// let Day = 5;

// switch(Day){
//  case 0:
//        console.log("Today is Monday");
//        break;
//  case 1:
//        console.log("Today is Tuesday");
//        break;
//  case 2:
//        console.log("Today is Wednesday");
//        break;
//  case 3:
//        console.log("Today is Thursday");
//        break;
//  case 4:
//        console.log("Today is Friday");
//        break;
//  case 5:
//        console.log("Today is Saturday");
//        break;
//  case 6:
//        console.log("Today is Sunday");
//        break;
//  default:
//        console.log("Enter the valid week Day");
// }

// ############################### While Loop ###############################

// let a = 1;

// while(a <= 20){
//     console.log(a + ")My name is mhammad taha");
// a++;
// }

// ############################### arguments ###############################
// function printName(name){
//     name = "Muhammad " + name;
//     console.log(name);
// }
// ############################### paremeter ###############################

// printName("tahir");

// ############################### Addition function with arguments ###############################

// function add(a, b){
//     return (a + b);
// }
// add(2, 5);
// console.log(add);

// ############################### Addition function with default arguments ###############################

// function addWithDefault(a, b = 0){
//     const result = a + b;
//     return result;
// }
// console.log(addWithDefault(4));     // ##### a + b = 4 + 0 = 4 #####
// const sum = addWithDefault(4, 5);      // ##### a + b = 4 + 5 = 9 #####
// console.log(sum);

// ############################### Addition function with default arguments ###############################

// function addWithDefault1(a = 1, b = 0){
    // const result = a + b;
    // return result;
// }

// let a;
// console.log(a);
// console.log(addWithDefault1(a, 5));


// ############################### subtraction function ###############################

// function sub(a, b){
//     return (a - b);
// }

// ############################### multiplication function ###############################

// function mul(a, b){
//     return (a * b);
// }

// ############################### division function ###############################

// function div(a, b){
//     return (a / b);
// }

// --------------------------------------------------------------------------------------------
//                                     ARROW FUNCTIONS
// --------------------------------------------------------------------------------------------

// ############################### simple function ###############################

// function myFunction(){
//     console.log("This is my function");
// }
// myFunction();

// ############################### An other way to write a function ###############################

// const myFunction1 = function(a, b) {
//     console.log("This is my function");
// }
// myFunction1();

// ############################### Arrow function ###############################

// const myFunction2 = (a, b) => "This is my function";
// console.log(myFunction2());

// ############################### calculator function ###############################

// // Addition function 
// function add(a, b){
//     return (a + b);
// }

// // subtraction function
// function sub(a, b){
//     return (a - b);
// }

// // multiplication function
// function mul(a, b){
//     return (a * b);
// }

// // division function
// function div(a, b){
//     return (a / b);
// }

// function calculator(a, b , operator){

//     if(operator == "+"){
//         return add(a, b);
//     }else if(operator == "-"){
//         return sub(a, b);
//     }else if(operator == "*"){
//         return mul(a, b);
//     }else if(operator == "/"){
//         return div(a, b);
//     }else{
//         return ("Enter Invalid Operator");
//     }
// }

// console.log( "Result of calculator", calculator(10, 15, "+"));
// console.log( "Result of calculator", calculator(10, 15, "-"));
// console.log( "Result of calculator", calculator(10, 15, "*"));
// console.log( "Result of calculator", calculator(10, 15, "/"));

// ############################### Do while loop  ###############################

// let a = 1;

// do{
//     console.log( a + "My name is muhammad taha");
//     a++;
// }while(a <= 10);

// ############################### For loop  ###############################

// for(let a = 1; a <= 10; a++){
//     console.log(a + "My name is muhammad taha");
// }

// ############################### Nested loop  #############################

// function darwTriangle(rows) {
//     for(let i = 1; i <= rows; i++){
//         let star = "";
//         for(let j = 1; j <= i; j++) {
//             star += "*";
//         }
//         console.log(star);
//     }
// }
// console.log(darwTriangle(5));

// function drawInvertedTriangle(rows) {
//     for(let i = rows; i >= 1; i--) {
//         let char = "";
//         for(let T = 1; T <= i; T++) {
//             char += "*";
//         }
//         console.log(char);
//     }
// }
// console.log(drawInvertedTriangle(5));

// function drawDiamond(rows){
//     darwTriangle(rows);
//     drawInvertedTriangle(rows -1);
// }
// console.log(drawDiamond(5));

// --------------------------------------------------------------------------------------------
//                                          |ARRAYS|
// --------------------------------------------------------------------------------------------

// ############################### Primative vs reference data types  #############################
// ############################### Primative data types  #############################

// let num1 = 6;
// let num2 = num1;
// console.log(num1);
// console.log(num2);

// num1++;
// console.log("value is num1 is", num1);
// console.log("value is num2 is", num2);
// console.log(num1 === num2);             //condition false

// ############################### reference data types  #############################

// let array1 = ["Item1", "Item2"];
// let array2 = array1;
// console.log(array2);
// console.log(array1);
 
// array1.push("Item3", "Item4");
// console.log(array1);
// console.log(array2);
// console.log(array1 === array2);             //condition True

// ############################### How to clone array #############################

// let array1 = ["Item1", "Item2"];
// let array2 = array1.slice(0).concat(["Item3", "Item4"]);

// for(let i = 0; i < array1.length; i++){
//     console.log(array1[i]);
// }

// for(let i = 0; i < array2.length; i++){
//     console.log(array2[i]);
// }

// let array1 = ["Item1", "Item2"];
// let array2 = [...array1];
// array2.push("Item3", "Item4");
// console.log("value is array1 is", array1);
// console.log("value is array2 is", array2);

// let array1 = ["Item1", "Item2"];
// console.log(array1);
// let OneMoreArray = ["Item3", "Item4"];
// let array2 = [...array1, ...OneMoreArray];
// console.log(array2);

// let array1 = ["Item1", "Item2"];
// let array2 = [...array1];
// console.log(array2);

// console.log(array1 === array2);

// ############################### For loop in array #############################

// let fruits = ["Apple", "Mango", "Grapes", "Banana"];
// let fruits2 = [];

// for(let i = 0; i < fruits.length; i++){
//      fruits2.push(fruits[i].toUpperCase());
// }

// for(let i = 0; i < fruits.length; i++){
//      console.log(fruits2[i]);
// }

// ############################### use const for creating array #############################

// const fruits = ["Apple", "Mango", "Grapes"];
// console.log(fruits);
// fruits.push("Banana");
// console.log(fruits);

// ############################### While loop in array #############################

// const fruits = ["Apple", "Mango", "Grapes"];

// const fruits2 = [];

// let i = 0;
// while(i < fruits.length){
//    fruits2.push(fruits[i].toUpperCase());
//     i++;
// }

// let T = 0;
// while(T < fruits.length){
//    console.log(fruits2[T]);
//     T++;
// }

// ############################### For of loop in array #############################

// const fruits = ["Apple", "Mango", "Banana"];
// const fruits2 = [];

//     for(let fruit of fruits){
//         fruits2.push(fruit.toUpperCase());
//     }
//     fruits2.push("Orange", "Grapes");

//     for(let fruits3 of fruits2){
//         console.log(fruits3);
//     }

// ############################### For in loop in array #############################

// const fruits = ["Apple", "Mango", "Grapes", "Banana"];

// for(let index in fruits){
//     console.log(index);
// }

// ############################### array destructuring #############################

// const myArray = ["Vlaue1", "Vlaue2", "Vlaue3", "Value4"];
// console.log(myArray);

// // let vl1 = myArray[0];
// // console.log("vlaue of my vl1",vl1);

// // let vl2 = myArray[1];
// // console.log("vlaue of my vl2",vl2);

// let [vl1, vl2, ...myNewArray] = myArray;
// console.log("Value is vl1 is ", vl1);
// console.log("Value is vl2 is ", vl2);

// let [vl3, vl4] = myNewArray;
// console.log("Value is vl3 is ", vl3);
// console.log("Value is vl4 is ", vl4);

// ############################### Multidimensional Arrays #############################

// let array = [
//     ["Taha", 15, "Male", "B.com"],
//     ["Tahir",20, "Male", "B.com"],
//     ["Tariq",23, "Male", "B.com"],
//     ["Talha",13, "Male", "B.com"]

// ];

// for(let a = 0; a < array.length; a++){
//     for(let b = 0; b < array.length; b++){
//         console.log(array[a][b]);
//     }
// };

// ############################### Modify array #############################

// let array = ["Apple", "Mango", "Banana", "Orange"];
// console.log(array);
// array[1] = 20;
// console.log(array);

// ############################### Delete array #############################   

// let array = ["Apple", "Mango", "Banana", "Orange"];
// console.log(array);
// delete array[1];
// console.log(array);

// ############################### Sort array #############################  
    
// let person = ["Taha", "Babar", "Rehman", "Hassnain"];
//     console.log(person);
//     person.sort();
//     console.log(person);

// ############################### Reverse array ############################# 

// let person = ["Taha", "Babar", "Rehman", "Hassnain"];
//     console.log(person);
//     person.reverse();
//     console.log(person);

// ############################### array push #############################

// let fruits = ["Apple", "Mango", "Grapes"];
// console.log(fruits);
// fruits.push("Banana");
// console.log(fruits);

// ############################### array pop #############################

// let fruits = ["Apple", "Mango", "Grapes"];
// console.log(fruits);

// let poppedFruit = fruits.pop();
// console.log(fruits);
// console.log( "popped fruits is",poppedFruit);

// ############################### array unshift #############################

// let fruits = ["Apple", "Mango", "Grapes"];
// console.log(fruits);

// fruits.unshift("Banana", "Orange");
// console.log(fruits);

// ############################### array shift #############################

// let fruits = ["Apple", "Mango", "Grapes"];
// console.log(fruits);

// let removedFruit = fruits.shift();
// console.log(fruits);
// console.log("Removed fruits is", removedFruit);

// ############################### array concat #############################

// let a = ["Taha", "Babar"];
// let b = ["Rehman", "Hassnain"];
// let c = ["Ali", "Fayaz"];

// let d = a.concat(b,c);
// console.log(d);

// ############################### array join #############################

// let a = ["Taha", "Babar"];
// let b = ["Rehman", "Hassnain"];

// let c = a.concat(b);
// console.log(c);

// let d = c.join(" ");
// console.log(d);

// ############################### array slice #############################

// let person = ["Taha", "Babar", "Rehman", "Hassnain"];
//     console.log(person);

//     let person2 = person.slice(1,3);
//     console.log(person2);

// ############################### array splice #############################

// let person = ["Taha", "Babar", "Rehman", "Hassnain"];
//     console.log(person);

//     person.splice(3, 0, "Fayaz", "Ali");
//     console.log(person);

// ############################### array isArray #############################

// let a = ["Taha", "Babar", "Rehman", "Hassnain"];
// let a = "Taha";
// let a = 20;

// if(Array.isArray(a)){
//     console.log("This is an array");
// }else{
//     console.log("This is not an array");
// }

// ############################### array indexOf #############################

// let person = ["Babar","Taha", "Rehman", "Hassnain", "Taha", "Fayaz"];
//     console.log(person);

// let person2 = person.indexOf("Taha",2);
// console.log(person2);

// ############################### array LastIndexOf #############################

// let person = ["Babar","Taha", "Rehman", "Hassnain", "Taha", "Fayaz"];
//     console.log(person);

// let person2 = person.lastIndexOf("Taha", 2);
// console.log(person2);

// ############################### array include #############################

// let person = ["Babar","Taha", "Rehman", "Hassnain"];
//     console.log(person);

// let person2 = person.includes("Taha");
// console.log(person2);

// ############################### array some #############################

// let ages = ["5","10", "15", "20"];
//     console.log(ages);

// let ages2 = ages.some(checkAdult);
// console.log(ages2);

// function checkAdult(age){
//     return age == 15;
// }

// ############################### array every #############################

// let ages = ["30","25", "15", "20"];
//     console.log(ages);

// let ages2 = ages.every(checkAdult);
// console.log(ages2);

// function checkAdult(age){
//     return age >= 15;
// }

// ############################### array find #############################

// let ages = ["5","10", "15", "20"];
//     console.log(ages);

// let ages2 = ages.find(checkAdult);
// console.log(ages2);

// function checkAdult(age){
//     return age >= 15;
// }

// ############################### array findIndex #############################

// let ages = ["5","10", "15", "20"];
//     console.log(ages);

// let ages2 = ages.findIndex(checkAdult);
// console.log(ages2);

// function checkAdult(age){
//     return age >= 15;
// }

// ############################### array filter #############################

// let ages = ["5","10", "15", "20"];
//     console.log(ages);

// let ages2 = ages.filter(checkAdult);
// console.log(ages2);

// function checkAdult(age){
//     return age >= 15;
// }

// ############################### array toString #############################

// let person = ["Taha", "Tahir", "Tariq"];
// console.log(person);

// let person2 = person.toString();
// console.log(person2);

// ############################### array valueOf #############################

// let person = ["Taha", "Tahir", "Tariq"];
// console.log(person);

// let person2 = person.valueOf();
// console.log(person2);

// ############################### array fill #############################

// let person = ["Taha", "Tahir", "Tariq"];
// console.log(person);

// let person2 = person.fill("Ruzbi");
// console.log(person2);

// ############################### array forEach loop #############################

// let person = ["Taha", "Tahir", "Tariq"];

// person.forEach(loop);

// function loop(index,value){
//     console.log(value, index);
// }

// ############################### Array Map Method #############################

// let ary = [
//     {First_Name: "Taha", Last_Name: "Memon"},
//     {First_Name: "Tahir", Last_Name: "Memon"},
//     {First_Name: "Tariq", Last_Name: "Memon"}
// ];

// let ary2 = ary.map(fullName);
// console.log(ary2);

// function fullName(concat){
//     return concat.First_Name + concat.Last_Name;
// }

// --------------------------------------------------------------------------------------------
//                                    |STRING METHODS|
// --------------------------------------------------------------------------------------------

// ############################### startswith() method #############################

// let str = "JavaScript is a Great Language";

// let a = str.startsWith("Java");

// console.log(a);

// ############################### endswith() method #############################

// let  str = "JavaScript is a Great Language";
// let a = str.endsWith("age");

// console.log(a);

// ############################### search() method #############################

// let str = "JavaScript is a Great Language";
// let a = str.search("Great");

// console.log(a);

// ############################### match() method #############################

// let str = "JavaScript is a Great Language";
// let a = str.match(/is/g);

// console.log(a);

// ############################### replace() method #############################

// let str = "JavaScript is a Great Language";
// let a = str.replace("is", "are");

// console.log(a);

// ############################### charAt() method #############################

// let = string = "JavaScript is a Great Language";
// let a = string.charAt(4);

// console.log(a);

// ############################### charCodeAt() method #############################

// let = string = "JavaScript is a Great Language";
// let a = string.charCodeAt(1);

// console.log(a);

// ############################### split() method #############################

// let = string = "JavaScript is a Great Language";
// let a = string.split(" ");

// console.log(a);

// ############################### repeat() method #############################

// let = string = "JavaScript is a Great Language";
// let a = string.repeat(4);

// console.log(a);

// ############################### slice() method #############################

// let = string = "JavaScript is a Great Language";
// let a = string.slice(4, 11);

// console.log(a);

// ############################### substr() method #############################

// let = string = "JavaScript is a Great Language";
// let a = string.substr(4,5);

// console.log(a);

// ############################### substring() method #############################

// let = string = "JavaScript is a Great Language";
// let a = string.substring(3,5);

// console.log(a);

// --------------------------------------------------------------------------------------------
//                                    |ITERATE STRING|
// --------------------------------------------------------------------------------------------

// for keyword
// syntax: for (initialization; condition; increment/decrement) { code to be executed }

// const string = "TahaMemon";         //nomeMahaT

// Method 01:
// let reverseString = "";

// for(let i = 0; i < string.length; i++){
//     reverseString = string[i] + reverseString
// }
// console.log(reverseString);

// Method 02:
// let reverseString1 = "";

// for(let i = string.length -1; i >= 0; i--){
//     reverseString1 += string[i];
// }
// console.log(reverseString1);

// Method 03:

// let reverseString3 = string.split("").reverse().join("");
// console.log(reverseString3);

// --------------------------------------------------------------------------------------------
//                                     |NUMBER METHODS|
// --------------------------------------------------------------------------------------------

// ############################### Number() Methods #############################

// let a = "100";
// let num = Number(a);

// console.log(num + 100);

// ############################### ParseInt() Methods #############################

// let a = "100 200 300";
// let num = parseInt(a);

// console.log(num);

// ############################### ParseFloat() Methods #############################

// let a = "10.33 Years";
// let num = parseFloat(a);

// console.log(num);

// ############################### isFinite() Methods #############################

// let a = "100";
// let num = isFinite(a);

// console.log(num);

// ############################### isInteger() Methods #############################

// let a = 100;
// let num = Number.isInteger(a);

// console.log(num);

// --------------------------------------------------------------------------------------------
//                                        |OBJECTS|
// --------------------------------------------------------------------------------------------

// ############################### How to create objects #############################

// const person = {
//     First_Name: "Taha",
//     Last_Name: "Memon",
//     Age: 15,
//     Hobbies: ["Guitar", "Listning Music", "Sleeping"],
//     salary: function(){
//         return 25000;
//     },
//     Full_Name: function(){
//         return this.First_Name + " " + this.Last_Name;
//     },
//     Fav_Movies: {
//         city: "Khairpur",
//         country: "Pakistan"
//     }
// }
// console.log(person);

// ############################### Objects toturial II #############################

// let person = new Object();

// person.first_Name = "Taha"
// person.Last_Name = "Memon"

// ############################### How to access data from objects  #############################

// console.log(person["First_Name"]);
// console.log(person.Last_Name);
// console.log(person.Age);
// console.log(person.Hobbies[0]);
// console.log(person.Hobbies[1]);
// console.log(person.Hobbies[2]);
// console.log(person.salary());
// console.log(person.Full_Name());
// console.log(person.Fav_Movies.city);
// console.log(person.Fav_Movies.country);

// ############################### How to access data from objects  II  #############################

// console.log(person);
// console.log(person.first_Name);
// console.log(person.Last_Name);

// ############################### How to add key value pair to objects #############################

// person.gender = "Male";
// console.log(person);

// ############################### For in loop in object #############################

// let key = "Hobbies";
// const person = {
//     First_Name: "Taha",
//     Last_Name: "Memon",
//     Age: 15,
//     Email: "memontaha2022@gmail.com"
// };
// person[key] = "[Sleeping, Listing Music, Reading]";

// for(let Keys in person){
//     console.log(Keys, " : ",person[Keys]);
// };

// ############################### difference between dot and bracket notation #############################

// const key = "Email"
// const person = {
//     "First Name": "Taha", 
//     Last_Name: "Memon", 
//     Age: 16,
//     Hobbies: ["Giter", "Listening music", "Sleeping"]
// }
// console.log(person["First Name"]);
// console.log(person.Last_Name);

// person[key] = "memontaha20222gmail.com";
// console.log(person);

// ############################### How to iterate object #############################

// const person = {
//     First_Name: "Taha", 
//     Last_Name: "Memon", 
//     Age: 16,
//     Hobbies: ["Giter", "Listening music", "Sleeping"]
// }

// for(let key in person){
//      console.log(person[key]);
//      console.log(`${key} : ${person[key]}`);
//      console.log(key," : ",  person[key]);
// }

// console.log(Object.keys(person));

// ############################### Computed properties #############################

// const key1 = "objectKey1";
// const key2 = "objectKey2";

// const value1 = "MyValue1";
// const value2 = "MyValue2";

// const object = {

// }

// object[key1] = value1;
// object[key2] = value2;
// // console.log(object);

// for(let object_Extra in object){
//     console.log(object_Extra," : ", object[object_Extra]);
// }

// ############################### Spread operator #############################

// const array1 = [1, 2, 3,]; 
// const array2 = [5, 6, 7,]; 

// const NewArray = [...array1, ...array2];
// const NewArray = [..."123456789"];
// console.log(NewArray);

// ############################### Spread operator in object #############################

// const object1 = {
//     key1: "value1",
//     key2: "value2",
// };
// const object2 = {
//     key3: "value3",
//     key4: "value4",
// };

// const newObject = {
//     ...object1, ...object2, key5: "value5"
// }

// const newObject = {
//     ...["Item1", "Item2"]
// }
// const newObject = {
//     ..."ABCDEFGHIJKLMNOPQRSTUVWXYZ"
// }
// console.log(newObject);

// ############################### Object destructuring #############################

// const person = {
//     First_Name: "Taha",
//     Last_Name: "Memon",
//     Age: 15,
//     Hobbies: ["Learning", "Sleeping", "Listning Music"]
// }

// let {First_Name, Last_Name, ...person2} = person;
// console.log(First_Name);
// console.log(Last_Name);

// let {Age, Hobbies} = person2;
// console.log(Age);
// console.log(Hobbies);

// ############################### Object in side array #############################

// const Users = [
//     {user_id: 1, First_Name: "Taha", Gender: "Male"},
//     {user_id: 2, First_Name: "Tahir", Gender: "Male"},
//     {user_id: 3, First_Name: "Tariq", Gender: "Male"},
// ]

// for(let User of Users){
//     console.log(User.user_id, User.First_Name, User.Gender);
// }

// ############################### Nested destructuring #############################

// const Users = [
//     {user_id: 1, First_Name: "Taha", Gender: "Male"},
//     {user_id: 2, First_Name: "Tahir", Gender: "Male"},
//     {user_id: 3, First_Name: "Tariq", Gender: "Male"},
// ]

// const [{First_Name, user_id,}, , {Gender},] = Users;
// console.log(First_Name);
// console.log(user_id);
// console.log(Gender);

// --------------------------------------------------------------------------------------------
//                            |DOM GET & SET VALUE MATHODS|
// --------------------------------------------------------------------------------------------

// ############################### Get innerText ###############################

// let heading_container = document.getElementById("heading_container").innerText;

// console.log(heading_container);

// ############################### Get innerHTML ###############################

// let heading_container = document.getElementById("heading_container").innerHTML;

// console.log(heading_container);

// ############################### Get getAttribute ###############################

// let heading_container = document.getElementById("heading_container").getAttribute("onclick");

// console.log(heading_container);

// ############################### Get getAttributeNode ###############################

// let heading_container = document.getElementById("heading_container").getAttributeNode;

// console.log(heading_container);

// ############################### Get attributes ###############################

// let heading_container = document.getElementById("heading_container").attributes[1].value;

// console.log(heading_container);

// let heading_container = document.getElementById("heading_container").attributes[1].name;

// console.log(heading_container);

// ############################### Set innerText ###############################

// let Header = document.getElementById("header");

// Header.innerText = "WOW";

// ############################### Set innerHTML ###############################

// let Header = document.getElementById("header");

// Header.innerHTML = "WOW";

// ############################### Set setAttribute ###############################

// document.getElementById("header").setAttribute("style", "border: 5px dotted red");

// let Header = document.getElementById("header").getAttribute("class");
 
// console.log(Header);


// ############################### Set Attributes ###############################

// document.getElementById("header").attributes[0].value = "xyz";

// let Header = document.getElementById("header").getAttribute("class");
 
// console.log(Header);

// ############################### removeAttribute ###############################

// document.getElementById("header").removeAttribute("style");

// document.getElementById("header").removeAttribute("class");

// let Header = document.getElementById("header").getAttribute("class");
 
// console.log(Header);

// --------------------------------------------------------------------------------------------
//                      |DOM QUERYSELECTOR & QUERYSELECTORALL|
// --------------------------------------------------------------------------------------------

// ############################### querySelector ###############################

// let Header = document.querySelector("#header");
// Header.innerText = "WOW";

// let Header = document.querySelector("#header").getAttribute("class");
// console.log(Header);

// ############################### querySelectorAll ###############################

// let Header = document.querySelectorAll(".heading")[1].innerHTML;
// console.log(Header);

// let Header = document.querySelectorAll("ul")[1].innerHTML;
// console.log(Header);

// let Header = document.querySelectorAll("h1")[0].innerHTML;
// console.log(Header);

// --------------------------------------------------------------------------------------------
//                                 |DOM CSS STYLING METHODS|
// --------------------------------------------------------------------------------------------

// ############################### .Style ###############################

// let element = document.querySelector("#header").style.backgroundColor = "red";
// let element1 = document.querySelector("#header").style.color = "white";

// console.log(element1);

// ############################### .className ###############################

// let element = document.querySelector("#header").className = "rrr vvv";

// console.log(element);

// --------------------------------------------------------------------------------------------
//                                  |CLASSLIST METHODS|
// --------------------------------------------------------------------------------------------

// ############################### add method ###############################

// let addClassList = document.getElementById("header").addEventListener("click", add);
// function add() {
//     document.getElementById("header").classList.add("rrr", "vvv");
// };

// ############################### remove method ###############################

// let addClassList1 = document.getElementById("header").addEventListener("mouseleave", remove);
// function remove() {
//     document.getElementById("header").classList.remove("rrr", "vvv");
// };

// ############################### length method ###############################

// let length = document.getElementById("header").classList.length;
// console.log(length);

// ############################### toggle method ###############################

// let Toggle = document.getElementById("para").addEventListener("click", ooo);
// function ooo() {
//     document.getElementById("para").classList.toggle("rrr");
// };

// ############################### item method ###############################

// let item = document.getElementById("paragraph").classList.item(1);
// console.log(item);

// ############################### contains method ###############################

// let contains = document.getElementById("paragraph").classList.contains("rrr");
// console.log(contains);

// let contains1 = document.getElementById("paragraph").classList.contains("xyz");
// console.log(contains1);

// --------------------------------------------------------------------------------------------
//                                  |ADD EVENTLISTNER METHOD|
// --------------------------------------------------------------------------------------------

// let addEvent = document.getElementById("container").addEventListener("mouseleave", abc);
// function abc() {
//     document.getElementById("container").style.background = "pink";
// };

// let removeEvent = document.getElementById("container").addEventListener("click", xyz);
// function xyz() {
//     document.getElementById("container").removeEventListener("mouseleave", abc);
// };

// let addEvent1 = document.getElementById("container").addEventListener("click", function() {
//     document.getElementById("container").style.border = "2px solid green";
// });

// let addEvent2 = document.getElementById("container").addEventListener("click", function() {
//     this.style.color = "white";
// });

// document.querySelector("#inner").addEventListener("click", function() {
//     alert('Inner Div');
// }, true);

// document.querySelector("#outer").addEventListener("click", function() {
//     alert('Outer Div');
// }, true);

// --------------------------------------------------------------------------------------------
//                              |PARENTELEMENT & PARENTNODE METHOD|
// --------------------------------------------------------------------------------------------

// ###############################  parentElement ###############################

// document.getElementById("C-Child").parentElement.style.background = "red";

// let ParentElement = document.getElementById("C-Child").parentElement;

// console.log(ParentElement);

// ###############################  parentNode ###############################

// document.getElementById("main").parentElement.style.background = "red";

// let ParentNode = document.getElementById("main").parentNode;

// console.log(ParentNode);

// --------------------------------------------------------------------------------------------
//                                  |NUMBER OF OCCURRENCE|
// --------------------------------------------------------------------------------------------

function checkNumber(number){
	if(number.length >=11 && number.length<=14){
		
		// check if there is any other character then return false
		for(let i=0; i>number.length; i++){
			const charac = number[i];
			if(!(isNumber(charac) || charac === '+' || charac === '-')){
				return false;
			}
		}

		// number length 11
		if(number.length === 11){
			const numArray = number.split('');
			if(numArray.includes('+') || numArray.includes('-')){
				return false;
			} else {
				if(number.startsWith("03")){
					return true;
				} else {
					return false;
				}
			}
		}

		// number length 12
		if(number.length === 12){
			const numArray = number.split('');
			if(numArray.includes('+')){
				return false;
			} else if(!(numArray.includes('-') && numArray[4] === '-')){
				return false
			}

			if(number.startsWith('03')){
				return true;
			} else {
				return false;
			}
		}

		// number length 13
		if(number.length === 13){
			const numArray = number.split('');
			if(numArray.includes('-')){
				return false;
			} else if(!(numArray.includes('+') && numArray[0] === '+')){
				return false
			}

			if(number.startsWith('+923')){
				return true;
			} else {
				return false;
			}
		}

		// number length 14
		if(number.length === 14){
			const numArray = number.split('');
			if(!(numArray.includes('+') && numArray.includes('-'))){
				return false;
			} else if(!(numArray.includes('-') && numArray[6] === '-')){
				return false
			} else if(!(numArray.includes('+') && numArray[0] === '+')){
				return false
			}

			if(number.startsWith('+923')){
				return true;
			} else {
				return false;
			}
		}
	}

	return false;
};

function handleResultsClick(){
    
    const number = document.getElementById('number').value;
    const result = checkNumber(number);
    const resultDiv = document.getElementById('result');
    if(result){
        resultDiv.innerHTML = 'Valid Number';
    } else {
        resultDiv.innerHTML = 'Invalid Number';
    }
};

// --------------------------------------------------------------------------------------------
//                                        |PRACTICE|
// --------------------------------------------------------------------------------------------

// let id = 0;
// function handleclick(){
//     let Price = document.getElementById("Price");
//     let Quantity = document.getElementById("Quantity");
//     let Description = document.getElementById("Description");
    

//     let table_Card = document.getElementById("table_Card");

//     table_Card.innerHTML += `
//     <tr>
//     <th scope="row">${++id}</th>
//     <td>${Price.value}</td>
//     <td>${Quantity.value}</td>
//     <td>${Description.value}</td>
//   </tr>`;


//   Price.value = "";
//   Quantity.value = ""; 
//   Description.value = "";
// };

// ###############################  Tab CSS change ###############################

// function handleclick(Tab_Name){

//     let apple = document.getElementById("apple");
//     let mango = document.getElementById("mango");
//     let banana = document.getElementById("banana");

//     if(Tab_Name == "apple"){
//         apple.classList = "fw-bold pb-1 border-2 border-bottom border-danger";
//         mango.classList = "";
//         banana.classList = "";
//     }else if(Tab_Name == "mango"){
//         apple.classList = "";
//         mango.classList = "fw-bold pb-1 border-2 border-bottom border-danger";
//         banana.classList = "";
//     }else if(Tab_Name == "banana"){
//         apple.classList = "";
//         mango.classList = "";
//         banana.classList = "fw-bold pb-1 border-2 border-bottom border-danger";
//     }
// }

// document.getElementById("apple").addEventListener("click", () => handleclick("apple"));
// document.getElementById("mango").addEventListener("click", () => handleclick("mango"));
// document.getElementById("banana").addEventListener("click", () => handleclick("banana"));



