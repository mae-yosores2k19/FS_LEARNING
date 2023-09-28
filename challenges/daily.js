function processData(input) {
    //Enter your code here
    const splitted = input.split('\n')
    const name1Index = parseInt(splitted[0]) + 1
    const names = splitted.slice(name1Index, splitted.length)
    const phoneBook = splitted.slice(1, name1Index)
    // console.log(names, phoneBook)
    phoneBook.map(el => {
        const temp = el.split(' ')
        if(names.includes(temp[0])){
            console.log(`${temp[0]}=${temp[1]}`)
        }else{
            console.log('Not found')
        }
    })
    
} 

function processData(input) {
    //Enter your code here
    const splitted = input.split('\n')
    const name1Index = parseInt(splitted[0]) + 1
    const names = splitted.slice(name1Index, splitted.length)
    const phoneBook = splitted.slice(1, name1Index)
    // console.log(names, phoneBook)
    for (var i = 0; i < phoneBook.length; ++i) {
        const temp = phoneBook[i].split(' ')
        if (names.includes(temp[0])) {
            console.log(`${temp[0]}=${temp[1]}`)
        } else {
            console.log('Not found')
        }
    }
}
process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});


// palindrome day 18
process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
    input_stdin += data;
});

process.stdin.on('end', function () {
    input_stdin_array = input_stdin.split("\n");
    main();    
});
function readLine() {
    return input_stdin_array[input_currentline++];
}

function Solution(){
  //Write your code here
  let str = []
  let que = []
  this.pushCharacter = (char = "") =>{
      str.push(char)
  }
  this.enqueueCharacter = (char = "") =>{
      que.splice(0,0,char)
  }
  
  this.popCharacter = () =>{
      return str.shift();
  }
  this.dequeueCharacter = () =>{
      return que.shift();
  }
}

function main(){
    // read the string s
    var s=readLine();
    var len=s.length;
    // create the Solution class object p
    var obj=new Solution();
    //push/enqueue all the characters of string s to stack
    for(var i=0;i<len;i++){
        obj.pushCharacter(s.charAt(i));
        obj.enqueueCharacter(s.charAt(i));
    }
  
    var isPalindrome=true;
    /*
    pop the top character from stack
    dequeue the first character from queue
    compare both the characters*/

    for(var i=0;i<len/2;i++){
        if(obj.popCharacter()!=obj.dequeueCharacter()){
            isPalindrome=false;
          	break;
        }
    }
    //finally print whether string s is palindrome or not

    if(isPalindrome)
        console.log("The word, "+s+", is a palindrome.");    
    else
        console.log("The word, "+s+", is not a palindrome.");
}
// factorial
function factorial(n){
    if(n==0||n==1){
        return n
    }else{
        return n*factorial(n-1)
    }
}
// area and perimeter of a circle
'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });
    
    main();    
});

function readLine() {
    return inputString[currentLine++];
}

function main() {
    const PI = Math.PI
    const r = readLine(inputString)
    // Print the area of the circle:
    const area = PI*r*r
    console.log(area)
    // Print the perimeter of the circle:
    const perimeter = 2*PI*r
    console.log(perimeter)
    try {    
        // Attempt to redefine the value of constant variable PI
        PI = 0;
        // Attempt to print the value of PI
        console.log(PI);
    } catch(error) {
        console.error("You correctly declared 'PI' as a constant.");
    }
}
// Day 26 Nested Logic dates

function processData(input) {
    //Enter your code here
    const dates = input.split('\n')
    const returnDate = new Date(dates[0].split(' ').reverse().join('-'))
    const dueDate = new Date(dates[1].split(' ').reverse().join('-'))
    
    const hackos = getHackos(dueDate,returnDate)
    console.log(hackos)
}
const getDiffDays = (dueDate, returnDate) => {
    const diff = returnDate.getTime() - dueDate.getTime()
    if (diff > 0) {
        const diffTime = Math.abs(returnDate - dueDate);
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        return diffDays;
    } else {
        return 0
    }
}


const getHackos=(dueDate,returnDate)=>{
    const diffDays = getDiffDays(dueDate, returnDate)
    const dues = [dueDate.getMonth(),dueDate.getFullYear()]
    const returns = [returnDate.getMonth(),returnDate.getFullYear()]
    if(diffDays === 0)return 0
    if(dues[0] === returns[0] && dues[1]===returns[1]){
        return 15*diffDays
    }else if(dues[1]===returns[1]){
        return 500*Math.abs(returns[0]-dues[0])
    }else{
        return 10000
    }
}
process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
    processData(_input);
});
// hackerRank 25 Prime and Not prime
function processData(input) {
    //Enter your code here
    const arr = input.split('\n')
    arr.shift()
    arr.map((elem) => {
        const el = parseInt(elem)
        if (el === 1) {
            console.log('Not prime')
        } else if (el === 2) {
            console.log('Prime')
        } else {
            let isPrime =true
            for(let i=2;i<el;i++){
                if(el%i===0){
                    isPrime= false
                    break;
                }
            }
            if(isPrime){
                console.log("Prime")
            }else{
            console.log('Not prime')
            }
        } 
    })
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
    processData(_input);
});

// get median
function getMedian(values){
    var median = 0;
    var length = values.length;
    var midpoint = Math.floor((length-1)/2);

    //if even
    if ((length%2) == 0){
        median = (values[midpoint]+values[(midpoint)+1])/2;
    } else {
        median = values[midpoint];
    }
    return median;
}


// Elctronic shop problem

function getMoneySpent(keyboards, drives, b) {
  
    let arr = []
    for (let i = 0; i < keyboards.length; i++) {
        for (let j = 0; j < drives.length; j++) {
            let sum = keyboards[i]+drives[j]
            if(sum<=b){
                arr.push(sum)
            }
        }
    }
    return (!arr.length?-1:Math.max(...arr))

}
// Counting Valleys
function countingValleys(steps, path) {
    // Write your code here
     let strArr = path.split('')
    let count = 0
    let result = 0
    for(let step=0; step<steps; step++){
        if(count == 0 && strArr[step].toLowerCase() == 'd'){
            count -= 1
            result += 1
        } else if(strArr[step].toLowerCase() == 'd'){
            count -= 1
        } else {
            count += 1
        }
    }
    return result

}
// TaumBday
function taumBday(b, w, bc, wc, z) {
    // Write your code here
    let res = 0
    if(bc<=wc){
        res +=bc*b
        if(bc +z <=wc){
            res +=(bc+z)*w
        }else{
            res += wc*w
        }
    }else{
        res += wc*w
        if(wc+z<=bc){
            res+=(wc+z)*b
        }else{
            res += bc*b
        }
    }
    return res
}
// Modified Kaprekar Numbers
function kaprekarNumbers(p, q) {
    // Write your code here
       let result = [];
    for(let i = p; i <= q; i++) {
        const squareString = (i * i).toString();
        const num1 = squareString.substring(0, squareString.length/2);
        const num2 = squareString.substring(squareString.length/2, squareString.length);
          
        if (Number(num1) + Number(num2) === i) {
            result = result.concat(i)
        }
    }
    if (result.length === 0) {
        console.log('INVALID RANGE')
    } else {
        console.log(...result);
    }

}

// Time In Words
function timeInWords(h, m) {
    // Write your code here
    let words = [
        "zero",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
        "ten",
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "fifteen",
        "sixteen",
        "seventeen",
        "eightteen",
        "nineteen",
        "twenty",
        "twenty one",
        "twenty two",
        "twenty three",
        "twenty four",
        "twenty five",
        "twenty six",
        "twenty seven",
        "twenty eight",
        "twenty nine"
    ];


    return !m
        ? `${words[h]} o' clock`
        : `${
        !(m % 30)
            ? "half"
            : !(m % 15)
                ? "quarter"
                : `${m <= 30 ? words[m] : words[60 - m]} ${`minute${
                m > 1 ? "s" : ""
                }`}`
        } ${m <= 30 ? "past" : "to"} ${words[m <= 30 ? h : h + 1]}`;
}
