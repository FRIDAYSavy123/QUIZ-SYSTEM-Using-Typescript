#!/usr/bin/env node

import inquirer from "inquirer"

console.log("Welcome to my advanture quiz game");
console.log("Here you are required to gain max 4 point for the window");

let points = 0 
let question1 = await inquirer.prompt([
   {
    name : "one" ,
    message : "typescript is a superset of javascript",
    type : "list" ,
    choices : ["python" , "c++" , "c" , "javascript" , "rust"],

   },


])
if(question1.one === "javascript") {
    console.log("Your answer is correct");
    points++
}else {
    console.log("incorrect answer");
    
}

let question2 = await inquirer.prompt([
{
    name : "two" ,
    message : "Who is the founder of Microsoft",
    type : "list" ,
    choices : ["Elon musk" , "Bill gates" , "Ratan Tata"]
}
])
if(question2.two === "Bill gates"){
    console.log("Your answer is correct"); 
    points++
}else {
    console.log("incorrect answer");
    
}

let question3 = await inquirer.prompt([
  {
    name : "three" ,
    message : "Capital of Pakistan", 
    type : "list" ,
    choices : ["Islamabad" ,"Lahore" , "Karachi"]
  }
])
if(question3.three === "Islamabad") {
    console.log("Your answer is correct");
    points++ 
}else {
    console.log("incorrect answer");
    
}

let question4 = await inquirer.prompt ([
  {
    name : "four" ,
    message : "Who is current governer of sindh" ,
    type : "list" ,
    choices : ["Kamran Tessori" , "Daniyal Nagori" , "Zaid Tessori"]
  }
])
if(question4.four === "Kamran Tessori") {
    console.log("Your answer is correct");
    points++
}else {
    console.log("incorrect answer");
    
}

let question5 = await inquirer.prompt([
    {
        name : "five" ,
        message : "Are you Muslim?", 
        type : "list" ,
        choices : ["yes" , "no" , "converted to muslim"]
    }
])
if(question5.five === "yes") {
    console.log("Your answer is scorrect");
    points++
}else {
    console.log("incorrect answer");   
}

//output conditions

if(points >= 4) {
    console.log("Congratulations!");
    console.log(`Your points : ${points}`);
    
}else {
    console.log("You loose! try next time");
    console.log(`Your points : ${points}`);
    
    
}