//Problem 0

/***********************************************************************
We've just covered how to write functions using arrow function syntax. 
Let's give some old functions a new flair by rewriting them using fat arrow syntax.

Write a function `addFive` that accepts a number and will return that number
plus 5. Write this function on a single line, and utilize a fat arrow function's 
ability to implicitly return by leaving out your own return statement.


Examples:
let result1 = addFive(0); // returns 5
let result2 = addFive(10); // returns 15
let result3 = addFive(37); // returns 42


***********************************************************************/

const addFive = x => x+5;

let result1 = addFive(0); // returns 5
let result2 = addFive(10); // returns 15
let result3 = addFive(37); // returns 42

console.log(result1 + "      " + result2 + "       " + result3);


//Problem 1

/***********************************************************************
Write a function using fat arrow syntax, `arrowGetFullName(person)` that takes in
a person object and returns a string containing their full name. 

Assign the below function to a variable using the const keyword. Using the const
keyword will allow any value assigned to that variable protection from being
reassigned within that scope.

Examples:
let p1 = {firstName: 'John', lastName: 'Doe'};
arrowGetFullName(p1); // => 'John Doe'
let p2 = {firstName: 'Charlie', lastName: 'Brown', age: 9};
arrowGetFullName(p2); // => 'Charlie Brown'

***********************************************************************/

const arrowGetFullName = object => console.log(object.firstName + " " + object.lastName);

let p1 = {firstName: 'John', lastName: 'Doe'};
arrowGetFullName(p1); // => 'John Doe'
let p2 = {firstName: 'Charlie', lastName: 'Brown', age: 9};
arrowGetFullName(p2); // => 'Charlie Brown'

//Problem 2

/***********************************************************************
Write a function using fat arrow syntax named `arrowMyMap` that accepts an array
and a callback as arguments. The function will return an array of new elements
obtained by calling the callback on each element of the array, passing in the 
element. Assign the below function to a variable using the const keyword.

Do not use the built in Array#map - use Array#forEach for iteration.


Examples:
let result1 = arrowMyMap([100, 25, 81, 64], Math.sqrt);
console.log(result1);   // [ 10, 5, 9, 8 ]

const yell = el => el.toUpperCase() + '!'

let result2 = arrowMyMap(['run', 'Forrest'], yell);
console.log(result2);   // [ 'RUN!', 'FORREST!' ]

***********************************************************************/

const arrowMyMap = (arr,cb) => {
    let arr1 = [];
    arr.forEach(function(x){
        arr1.push(cb(x));
    })
    return arr1;
}

let result1 = arrowMyMap([100, 25, 81, 64], Math.sqrt);
console.log(result1);   // [ 10, 5, 9, 8 ]

const yell = el => el.toUpperCase() + '!'

let result2 = arrowMyMap(['run', 'Forrest'], yell);
console.log(result2);   // [ 'RUN!', 'FORREST!' ]

//Problem 3

/***********************************************************************
Write a function named `arrowRestSum` that accepts all incoming parameters
and sums them. Assign the below function to a variable using the const keyword.

**Hint**: Use rest parameter syntax!

Examples:
arrowRestSum(3,5,6); // => 14
arrowRestSum(1, 2, 3, 4, 5, 6, 7, 8, 9); // => 14
arrowRestSum(0); // => 0
***********************************************************************/

const arrowRestSum = (...x) => {
    let sum = 0;
    x.forEach(function(i){
        sum += i;
    })
    console.log(sum);
    return sum;
}

arrowRestSum(3,5,6); // => 14
arrowRestSum(1, 2, 3, 4, 5, 6, 7, 8, 9); // => 14
arrowRestSum(0); // => 0

//Problem 4

/***********************************************************************
Write a function using fat arrow syntax, `arrowAvgValue(array)` that takes in an
array of numbers and returns the average number. Assign the below function to a
variable using the const keyword.

Examples:

arrowAvgValue([10, 20]); // => 15
arrowAvgValue([2, 3, 7]); // => 4
arrowAvgValue([100, 60, 64]); // => 74.66666666666667
***********************************************************************/

const arrowAvgValue = array => array.reduce((a, b) => a+b, 0)/array.length;

arrowAvgValue([10, 20]); // => 15
arrowAvgValue([2, 3, 7]); // => 4
arrowAvgValue([100, 60, 64]); // => 74.66666666666667

//Problem 5

/***********************************************************************
Write a function `arrowMirrorArray(array)` that takes in an array as an
argument and returns a new array "mirrored" as shown in the examples.

Write this function using an arrow function!

Examples:

arrowMirrorArray([1,2,3]); // => [ 1, 2, 3, 3, 2, 1 ]
arrowMirrorArray(['a', 'b', 'c', 'd']); // => [ 'a', 'b', 'c', 'd', 'd', 'c', 'b', 'a' ]
***********************************************************************/

const arrowMirrorArray = array => {
    for (let i = array.length-1; i >= 0; i--){
        array.push(array[i]);
    }
    console.log(array);
}
arrowMirrorArray([1,2,3]); // => [ 1, 2, 3, 3, 2, 1 ]
arrowMirrorArray(['a', 'b', 'c', 'd']); // => [ 'a', 'b', 'c', 'd', 'd', 'c', 'b', 'a' ]

//Problem 6

/***********************************************************************
Let's practice writing closures by creating a function named `sandwichMaker()`.
This function will return another function that will accept a string to add 
to the sandwich order (which will start off with a default "tomato" ingredient),
separating each incoming ingredient with "and".

Look below to see how this function is invoked:

***********************************************************************/

let sandwichMaker = function(){
    let string = 'One sandwich with tomato';
    return function (item){
        string = string + " and " + item;
        return string;
    };
}

let sandwich = sandwichMaker(); // => returns a function
console.log(sandwich("spinach")) // => "One sandwich with tomato and spinach"
console.log(sandwich("jelly")) // => "One sandwich with tomato and spinach and jelly"
console.log(sandwich("bread")) // => "One sandwich with tomato and spinach and jelly and bread"

let sandwich2 = sandwichMaker(); // => returns a function
console.log(sandwich2("pb")) // => "One sandwich with tomato and pb"

//Problem 7

/***********************************************************************
Write a function named `funcTimer(time, func)` that will allow you to hand
in a function and a number representing milliseconds. The `funcTimer` should use
the global.setTimeout function to invoke the passed in function in `time` amount
of seconds. 

There are no specs for this problem - try it in the console yourself to
test your answer!

Examples:

function partyFunc () {
  console.log("Party time!")
}

funcTimer(5000, partyFunc); // in 5 seconds prints: "Party time!"


***********************************************************************/

function funcTimer(time, func) {
    setTimeout(func, time)
};

function partyFunc () {
  console.log("Party time!")
}

funcTimer(5000, partyFunc); // in 5 seconds prints: "Party time!"


//Problem 8

/***********************************************************************
Write a function named `hiddenCounter()`. This function will do two things - first
it will define a count variable, then it will return a function. 
When invoked the function returned by hiddenCounter will increment the counter by 1.

Look below to see how this function is invoked:

***********************************************************************/

function hiddenCounter() {
    let count = 0;
    return function(){
        count++;
        return count;
    }
}

let hidden1 = hiddenCounter(); //returns a function
console.log(hidden1()); // returns 1
console.log(hidden1()); // returns 2

let hidden2 = hiddenCounter(); // returns a function
console.log(hidden2()); // returns 1


//Problem 9

/***********************************************************************
Write a function named: interrupter(interruptingWord). The interrupter function will
accept a word and return a function. When the function returned by interrupter
is invoked with a string the string will be returned with "interruptions".

Look below to see how this function is invoked:


***********************************************************************/

function interrupter(interruptingWord){
    return function (string){
        let arr = string.split(' ');
        return arr.join(' ' + interruptingWord + ' ');
    }
}

let rudePerson = interrupter("what"); // => returns a function
console.log(rudePerson("how are you")); // prints "how what are what you"
console.log(rudePerson("I like pie")); // prints "I what like what pie"


let rudePerson2 = interrupter("yo"); // => returns a function
console.log(rudePerson2("I love dogs")); // prints "I yo love yo dogs"

//Problem 10

/***********************************************************************
Write a function named: countDownTimer(n). This function will represent a count
down of days till the New Year. The countDownTimer function will 
take in a number argument (n) the first time it is called and if that
number is greater than 0 the countDownTimer will return a function.

The function returned by countDownTimer can then be invoked n times before it 
returns a string of "Happy New Year!". Look closely at how this function is 
invoked below:

***********************************************************************/

function countDownTimer(n){
    let count = 0;
    if (n > 0){
        return function(){
            count++;
            if (count === n){
                return "Happy New Year";
            }
        }
    }
}

console.log(countDownTimer(0)); // prints "Happy New Year!"


let oneDay = countDownTimer(1); // returns a function
console.log(oneDay()); // prints "Happy New Year!"


let twoDays = countDownTimer(2); // returns a function
console.log(twoDays()); // returns a function
console.log(twoDays()); // prints "Happy New Year!"

let threeDays = countDownTimer(3); // returns a function
console.log(threeDays()); // returns a function
console.log(threeDays()); // returns a function
console.log(threeDays()); // prints "Happy New Year!"

//Problem 11

/***********************************************************************
Write a function named: lazyAdder(firstNum). The lazyAdder function will
accept a number and return a function. When the function returned by lazyAdder
is invoked it will again accept a number, (secondNum), and then return a function.
When the last mentioned function is invoked with a number, (thirdNum), it will
FINALLY return a number. See below for examples!


AFTER YOU ARE FINISHED WITH THIS PROBLEM, ASK FOR A CODE REVIEW
- Explain, but don't code, how you would turn your solution into a one-line
  fat-arrow function
***********************************************************************/

function lazyAdder(firstNum){
    return function(secondNum){
        return function(thirdNum){
            return firstNum + secondNum + thirdNum;
        }
    }
}

let firstAdd = lazyAdder(1);
let secondAdd = firstAdd(2);
let sum = secondAdd(3);
console.log(sum); // prints 6

let func1 = lazyAdder(10);
let func2 = func1(20);
let total = func2(3);
console.log(total); // prints 33

//Problem 12

/***********************************************************************
For this problem you will be writing a function capable of finding the volume
for a rectangle (height * width * length). In order to enter the
required measurements we'll need to measure them one at a time.

Write a function named `recVolume(height)`. The recVolume function will be passed
a height int and will return a function. The function returned by recVolume can 
then be invoked two more times with a single argument number each time (one for
length and one for width). Once all three numbers (height, width, length) have
been collected return the volume of the rectangle. Any subsequent calls to the 
function returned by recVolume should continue to return the original volume.
***********************************************************************/

function recVolume(height){
    let dim = [height]
    return function (num){
        if (dim.length < 3){
            dim.push(num);
        }
        return dim[0]*dim[1]*dim[2];
    }
}


let table1 = recVolume(5); // returns a function
table1(4); // returns a function
console.log(table1(3)); // prints 60
console.log(table1(145)); // STILL prints 60

let table2 = recVolume(3); // returns a function
table2(2); // returns a function
console.log(table2(1)); // prints 6
console.log(table2(75)); // STILL prints 6

//Problem 13

/***********************************************************************
Write a function named `dynamicDivide(divisor)`. The dynamicDivide function will
return a new function that when invoked will divide the argument number by the
divisor.


Look below to see how this function is invoked:

const halfer = dynamicDivide(2); // returns a function
halfer(20); // returns 10

const divideByThree = dynamicDivide(3);
divideByThree(30); // returns 10

const  divideByFive = dynamicDivide(5);
divideByFive(50); // returns 10


***********************************************************************/

function dynamicDivide(divisor){
    return function(num){
        return num / divisor;
    }
}

const halfer = dynamicDivide(2); // returns a function
console.log(halfer(20)); // returns 10

const divideByThree = dynamicDivide(3);
console.log(divideByThree(30)); // returns 10

const  divideByFive = dynamicDivide(5);
console.log(divideByFive(50)); // returns 10

//Problem 14

/***********************************************************************
Write a function named `smoothieMachine` that accepts any number of params and
a function.

The return function will also accept any number of params and will return a
string including all of the parameters of smoothieMachine and the return
function.

See below for examples:
***********************************************************************/

function smoothieMachine(...x){
    string = "i'm having a smoothie with ";
    return function(...y){
        if (x.length === 1){
            string = string + x;
        } else {
            string = string + x.join(' and ');
        }
        string = string + ' and ';
        if (y.length === 1){
            string = string + y;
        } else {
            string = string + y.join(' and ');
        }
        return string;
    }
}

let smoothie1 = smoothieMachine();

console.log(smoothie1("milk"));
// prints "I'm having a smoothie with milk"
console.log(smoothie1("kale", "spinach"));
// prints "I'm having a smoothie with milk and kale and spinach"
console.log(smoothie1("honey", "pears", "berries"));
// prints "I'm having a smoothie with milk and kale and spinach and honey and pears and berries"

let smoothie2 = smoothieMachine("apples", "bananas", "berries");
console.log(smoothie2("pineapple"));
// prints "I'm having a smoothie with apples and bananas and berries and pineapple"

//Problem 15

/***********************************************************************
Write a function named `smoothieMachine` that accepts any number of params and
a function.

The return function will also accept any number of params and will return a
string including all of the parameters of smoothieMachine and the return
function.

See below for examples:
***********************************************************************/

function smoothieMachine(...x){
    string = "i'm having a smoothie with ";
    let arr = [];
    return function(...y){
        arr.push(...x);
        arr.push(...y);
        return string + arr.join(' and ');
    }
}

let smoothie1 = smoothieMachine();

console.log(smoothie1("milk"));
// prints "I'm having a smoothie with milk"
console.log(smoothie1("kale", "spinach"));
// prints "I'm having a smoothie with milk and kale and spinach"
console.log(smoothie1("honey", "pears", "berries"));
// prints "I'm having a smoothie with milk and kale and spinach and honey and pears and berries"

let smoothie2 = smoothieMachine("apples", "bananas", "berries");
console.log(smoothie2("pineapple"));
// prints "I'm having a smoothie with apples and bananas and berries and pineapple"

//Problem 16

/***********************************************************************
Let's practice writing closures by creating a method called `dynamicMultiply(num)`.
The dynamicMultiply function will return a new function that will allow us to
create new separate custom multiply functions.
***********************************************************************/

function dynamicMultiply(num){
    return function(multi){
        return multi*num;
    }
}

const doubler = dynamicMultiply(2); // returns a functions
console.log(doubler(5)); // returns 10

const tripler = dynamicMultiply(3);
console.log(tripler(5)); // returns 15

const multiplyByFive = dynamicMultiply(5);
console.log(multiplyByFive(5)); // returns 25

//Problem 17

/***********************************************************************
Write a function named: coupon(discount). The coupon function will intake a
number to apply as a discount, and will return a function that accepts an array
of prices. Every call to the function returned by coupon will return the array
of prices with the discount applied.
***********************************************************************/

function coupon(discount){
    return function(prices){
        let discounted = prices.map(function(x){
            return x - x * discount;
        })
        return discounted
    }
}

let tenPercent = coupon(0.1);
console.log(tenPercent([10, 20, 30])); // [ 9, 18, 27 ]

let twentyPercent = coupon(0.2);
console.log(twentyPercent([10, 20, 30])); // [ 8, 16, 24 ]

//Problem 18

/***********************************************************************
Write a function arrowReverseString(str) that accepts a string and returns that string
reversed. 

Write this function using a fat arrow function!

Examples:
let result1 = arrowReverseString("hello"); // returns "olleh"
let result2 = arrowReverseString("garden"); // returns "nedrag"
let result3 = arrowReverseString("potato"); // returns "otatop"


***********************************************************************/

let arrowReverseString = str => {
    let rev = str.split('');
    console.log(rev.reverse().join(''))
    return rev.reverse().join('');
}

let result1 = arrowReverseString("hello"); // returns "olleh"
let result2 = arrowReverseString("garden"); // returns "nedrag"
let result3 = arrowReverseString("potato"); // returns "otatop"

//Problem 19

/******************************************************************************
Write a function named plannedIntersect(firstArr) that takes in an array and
returns a function. When the function returned by plannedIntersect is invoked
passing in an array (secondArr) it returns a new array containing the elements
common to both firstArr and secondArr.
*******************************************************************************/

function plannedIntersect(firstArr){
    return function(secondArr){
        let arr = [];
        firstArr.forEach(function(x){
            if (secondArr.indexOf(x) !== -1){
                arr.push(x);
            }
        })
        return arr;
    }
}

let abc = plannedIntersect(["a", "b", "c"]); // returns a function
console.log(abc(["b", "d", "c"])); // returns [ 'b', 'c' ]

let fame = plannedIntersect(["f", "a", "m", "e"]); // returns a function
console.log(fame(["a", "f", "z", "b"])); // returns [ 'f', 'a' ]

//Problem 20

/***********************************************************************
Write a function named: coinCollector(numCoins). The coinCollector function will
accept a number of coins (greater that 0) to collect when it is first invoked
and will return a function. The function returned by coinCollector can then be
invoked numCoins number of times passing in one coin (represented by an int) to
be added to the collection.

Once the function returned by coinCollector has the numCoins required it will
return an array of the coins it has gathered.
***********************************************************************/

function coinCollector(numCoins){
    let arr = [];
    return function (x){
        if (arr.length < numCoins){
            arr.push(x);
        }
        if (arr.length === numCoins){
            return arr;
        }
    }
}

let oneCoin = coinCollector(1); // returns a function
console.log(oneCoin(10)); // prints [10]

let twoCoins = coinCollector(2); // returns a function
twoCoins(25); // returns a function
console.log(twoCoins(10)); // prints [25, 10]

let threeCoins = coinCollector(3); // returns a function
threeCoins(25); // returns a function
threeCoins(5); // returns a function
console.log(threeCoins(10)); // prints [ 25, 5, 10 ]

//Problem 21

/***********************************************************************

Currying is the process of decomposing a function that takes multiple arguments
into one that takes single arguments successively until it has the sufficient
number of arguments to run.This technique is named after the
logician Haskell Curry(the functional programming language Haskell is, too).

Write a `curriedSum` function that takes an integer(how many numbers to sum)
and returns a function that can be successively called with single arguments
until it finally returns a sum.

Here is a breakdown of how curriedSum(numArgs) should work:
    - Define an empty array, `numbers`.
    - Define a function, `_curriedSum` that:
        - Closes over `numArgs` and `numbers`.
        - Takes a single number as an argument.
        - Appends this to the `numbers` array each time.
        - If `numbers.length === numArgs`, it sums the numbers in the array and
        returns the result.
        - Else, it returns itself.
    - Returns `_curriedSum`.

If you're confused, think of it this way: `_curriedSum` keeps collecting
arguments and returning itself until it has enough arguments, at which point it
actually does the required work of summing.
***********************************************************************/

function curriedSum(numArgs){
    let numbers = [];
    let sum;
    return function _curriedSum(x){
        numbers.push(x);
        if (numbers.length === numArgs){
            sum = numbers.reduce((x,y) => x + y, 0);
            return sum;
        }
    }
}

// 1
sum = curriedSum(3); // returns a function
sum(2) // returns a function
sum(1) // returns a function
console.log(sum(7)); // => returns 75

// 2
// this function can also be invoked like this: