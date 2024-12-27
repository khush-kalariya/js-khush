let num = prompt("enter a number");

if (num % 5 === 0){
    console.log(num ," is multiple of 5");
}else{
    console.log(num ,"is not a multiple of 5");
}
 console.log(my);


let score = 77;
if(score >= 90 && score <= 100){
    Grade = "A";
}else if(score >= 70 && score <= 89){
    Grade = "B";
}else if(score >= 60 && score <= 69){
    Grade = "C";
}else if(score >= 50 && score <= 59){
    Grade = "D";
}else if(score >= 0 && score <= 49){
    Grade = "F";
}

console.log("According to your scores ,your grade was :",Grade)


LOOPS IN JS



Calculate sum of 1 to 5


let sum = 0;
for(let i = 1; i <= 5; i++){
    sum = sum + i;
}

console.log("sum", sum);


let i = 2;
while(i <= 10){
    console.log("i =", i)
    i++;
}


parctice in loop 
Q1 . print all even number from 0 to 100.

for(let i = 0; i <= 100; i++){
    if(i%2 !== 0){
        console.log("i =" , i)
    }
}


Q2

let gNum = 25;
let usernum = prompt("Guess the number");

while(usernum != gNum){
    usernum = prompt("Your Number is Wrong . Pls Enter guess again :");
}

console.log("let's party time you guess right number");


string

let str1= "khush"
console.log(str1.length)

let str = "khsuh";
console.log(str[1] ,);

let str = "khush";
console.log(str.toUpperCase());


let num = prompt("Enter a number");

if (num %2 === 0){
    console.log("Even");
}else{
    console.log("odd");
} 


let sum = 0;

// Loop through numbers from 1 to 100 and add them to the sum
for (let i = 1; i <= 100; i++) {
    sum += i;
}

// Output the result
console.log("The sum of numbers from 1 to 100 is: " + sum);


let i = "hello javascript";
console.log(i.slice(2));

console.log(typeof number5);

let marks = [56 ,98 ,63 ,39 ,63 ,55];
console.log(marks[0]= 6);
console.log(marks)


let marks = [56 ,98 ,63 ,39 ,63 ,55];
for(let i = 0; i<marks.length; i++){
    console.log(marks[i]);
}


let marks = [56 ,98 ,63 ,39 ,63 ,55];
let sum= 0; 
for(let i of marks){
    sum += i;
}
let avg = sum / marks.length;

console.log(`avg marks of length = ${avg}`);

let marks = [56 ,98 ,63 ,39 ,63 ,55];
let name =["khshh" , "patel"];
let my = marks.concat(name);
console.log(my)

practice

let companies = ["bloomberg" , "microsoft" , "uber" , "google" , "ibm" , "netfilix" ];
companies.shift();
console.log(companies)

let companies = ["bloomberg" , "microsoft" , "uber" , "google" , "ibm" , "netfilix" ];
companies.splice(2 , 1 ,"ola");
console.log(companies);

let companies = ["bloomberg" , "microsoft" , "uber" , "google" , "ibm" , "netfilix" ]; 
companies.push("Amazon");
console.log(companies)


let companies = ["bloomberg" , "microsoft" , "uber" , "google" , "ibm" , "netfilix" ]; 
companies.pop();
companies.splice(2 , 1 ,"ola");
companies.push("Amazon");
console.log(companies)

let num = 0
for(let i=1; i<=100; i++){
    num = num + i
    console.log(num);
}

let num = 7;
for(let i=0; i<=10; i++){
    console.log(`${num} x ${i} = ${num * i}`);
}

let number = prompt("Enter a number");
for (let i = 1; i <= 10; i++) {
    console.log(number + " x " + i + " = " + (number * i));
}


let num = 1895;
for(let i = 0; i <= 10; i++){
    console.log(num + " x " + i + " = " + (num * i));
}

function myfunction(){
    
}

for(i = 1; i <= 10; i++);
console.log(i);

let str = "9876543210";
for(let val of str){
    console.log(val);
}

escape character 

let i="hel\nlo"
console.log(i);

let i="he\tllo word";
console.log(i);

let str = "hello";
console.log(str.slice(1,3));

let sum = 0;
let marks = [20 , 800 , 60 , 90 , 50 ,]
for(let i of marks){
    sum += i;
}

let avg = sum / marks.length;
console.log(avg);

let num =[1 , 2, 3 , 4 , 5 ,]
console.log(num.unshift(0));
console.log(num);

function myfunction(){
    for(i=0; i<=10; i++)
    console.log(i);
}

myfunction();
myfunction();
myfunction();


function num(x , y){
    console.log(x + y);
}

function vovles(str){
    let count=0;
    for(const char of str){
        if(char === "a" || char === "e" || char === "i" || char === "o" || char === "u"){
            count++;
        }    
    }
    console.log(count);
}

function even(num){
    if(num %2 === 0){
        console.log("Number is even");
    }else{
        console.log("Number is odd");
    }
}


let arr = [12 ,15 ,30 ,90 ,70]
let sum = 0;
for(let i = 0; i<arr.length; i++){
    sum += arr[i];
}

console.log(sum);



let arr = [12 ,15 ,30 ,90 ,70]
let max = arr[0];
for(let i = 0; i < arr.length; i++){
    if(arr[i] < max){
        max = arr[i];
    }
}

console.log(max);

sum =0;
for(let i = 1; i <= 10; i++){
    sum += i;
    console.log(i);
}

let sum = 0;
for (let i = 1; i <= 100; i++) {
    sum = sum + i
    console.log(i);
}


let sum = 0;
let count = 1;
do{
    sum = sum + count;
    count = count + 1;
}while(count <= 10);

console.log(sum);

// Output : 55

for(let i=100; i >= 1; i--){
        console.log(i);
}


let sum =  0;
for(let i = 1; i<= 100; i++){
 sum += i;
}

console.log(sum);

let i = 1;
while(i<=6){
    console.log(i);
    i++;
}

let i=1;
do{
    console.log(i);
    i++;
}while(i<=6)

let i = 10;
while(i>1){
    console.log(i);
    i--;

}

let i = 10;
do{
    console.log(i);
    i--;
}while(i > 1)



let number = prompt("Enter the number");
let result = Math.sqrt(number);
console.log("The Square root of",number ,result);


let kilometers  = prompt("Enter value in kilometers:")
let factor = 0.621371
let miles = kilometers * factor

console.log(kilometers , "kilometers is eqal to", miles);

function greet(){
    console.log("hello");
}

greet();

let arr = [9,5,3,4,7,2]
arr.reverse();
console.log(arr);


let number = prompt("Enter a number")
let result = Math.sqrt(number)
console.log(`The Square root of ${number} is ${result}`);

let basevalue = prompt('Enter the base of a triangle: ');
let heightvalue = prompt("Enter the height of a triangle:");
let areValue = (basevalue * heightvalue) /2;
console.log(`The area of the triangle is ${areValue}`);

console.log("Hello Word");

let num1 = 10;
let num2 = 30;

let sum = num1 + num2;
console.log(sum);

let num = prompt("Enter Number");
let result = Math.sqrt(num);
console.log(result);


let baseValue = prompt("Enter the base of a triangle: ");
let heightValue = prompt("Enter the height of a triangle:");

let areValue = (baseValue * heightValue) / 2;
console.log(`The area of the triangle is ${areValue}`);


{
    let num = 10;
    console.log(num);
}

let num = 10;
console.log(num);

let 

let obj = {
    type:"fiat",
    model:"500",
    color:"black",
};


for (let i = 0; i <= 10; i++){
    console.log(i);
}


generating  a random number
const a = Math.random();
console.log(a);

let number = prompt("Enter an number");
for (let i = 1; i<= 10; i++){
    let result = i * number;
    console.log(`${number} * ${i} = ${result}`);
}

let a = prompt("Enter The First Number");
let b = prompt("Enter The Second Number");

[a, b] = [b ,a];

console.log("The Value of A after swapping ",a);
console.log("The Value of B after swapping ",b);


let kilometers = prompt("Entet Value in kilometers")
let factor = 0.621371

let miles = kilometers * factor
console.log(kilometers, "Kilometers is equal to",miles);