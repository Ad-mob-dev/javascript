// Assignment9-11 task1 
function task9_11_1(){
  var city= prompt("Enter City Name??");
 if( city == "karachi" ){
  document.write("Welcome to City Of Lights</br><br><br>");
 }
}

// Assignment9-11 task2 
function task9_11_2(){
  var gender= prompt("Enter Gender");
  if( gender == "male"){
   document.write("Good Morning Sir<br>");
  }else if( gender == "female"){
    document.write("Good Morning Madam <br>");
  }
  else{
    alert("enter male or female"); 
  }

}


// Assignment9-11 task3
function task9_11_3(){
  var color = prompt("Enter traffic signal color");
  if( color == "green"){
   document.write("Move Now <br>");
  }else if( color == "red"){
    document.write("Must Stop <br>");
  }
  else if( color == "yellow"){
    document.write("ready to move"); 
  }
  else{
    alert("choose between traffic color");
  }

}


// Assignment9-11 task4
function task9_11_4(){
  var remainingFuel = prompt("Enter Remaining Fuel in Car in liters");
  if( remainingFuel < 0.25){
   document.write("Please refill the fuel in your car <br>");
  }
  else{
    alert("Youre Good to Go");
  }

}

// Assignment9-11 task5
function task9_11_5(){
// a true alert will run
  var a = 4;
if (++a === 5){
alert("given condition for variable a is true");
}

// b false will not show alert
var b = 82;
if (b++ === 83){
alert("given condition for variable b is true");
}

//  condition 2 & 4 are true they will be alerted
var c = 12;
if (c++ === 13){
alert("condition 1 is true");
}
if (c === 13){
alert("condition 2 is true"); //true
}
if (++c < 14){
alert("condition 3 is true"); 
}
if(c === 14){
alert("condition 4 is true"); //true
}

// cost will be equal alert will be displsyed
var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
alert("The cost equals");
}

// trueee will be alerted
if (true){
  alert("True");
  }
  if (false){
  alert("false");
 } 

  // true alert will be displayed
   if("car" < "cat"){
alert("car is smaller than cat");
}

}

//Assignment 9_11 task 6
function task9_11_6(){
 var marks1 = +prompt("Enter 1 subject marks");
var marks2 = +prompt("Enter 2 subject marks");
var marks3 = +prompt("Enter 3 subject marks");
var total = 300;
var obtainedMarks = marks1 + marks2 + marks3 ;
var percentage = parseInt(((obtainedMarks)/300)*100);

if(percentage >= 80){
var grade = "A-One";
var msg = "Excellent";
document.writeln("Total Marks: "+total +"<br>") ;
document.write("Obtained Marks: "+obtainedMarks+"<br>");
document.writeln("Percentage: "+percentage+"%"+"<br>");
document.writeln("Grade: " +grade +"<br>");
document.writeln("ReMarks: "+msg+"<br>");
}
else if(percentage >= 70){
var grade = "A";
var msg = "Good";
document.writeln("Total Marks: "+total +"<br>") ;
document.write("Obtained Marks: "+obtainedMarks+"<br>");
document.writeln("Percentage: "+percentage+"%"+"<br>");
document.writeln("Grade: " +grade +"<br>");
document.writeln("ReMarks: "+msg+"<br>");
}
else if(percentage >= 60){
var grade = "B";
var msg = "You need Improvement";
document.writeln("Total Marks: "+total +"<br>") ;
document.write("Obtained Marks: "+obtainedMarks+"<br>");
document.writeln("Percentage: "+percentage+"%"+"<br>");
document.writeln("Grade: " +grade +"<br>");
document.writeln("ReMarks: "+msg+"<br>");
}else if(percentage < 50){
var grade = "fail";
var msg = "sorry";
document.writeln("Total Marks: "+total +"<br>") ;
document.write("Obtained Marks: "+obtainedMarks+"<br>");
document.writeln("Percentage: "+percentage+"%"+"<br>");
document.writeln("Grade: " +grade +"<br>");
document.writeln("ReMarks: "+msg+"<br>");
}

}

// Assignment 9_11 task7
function task9_11_7(){
var sno = 5 ;
var uinp = +prompt("Guess Secret number ranging from 1 to 10");
if(sno === uinp){
   
   alert("Bingo ! Correct Answer");
}else if(uinp === sno + 1 || uinp === sno - 1){
   
   alert("Close Enough");
}else{   
   alert("Wrong Guess ... Try Again");
}
   
}
//Assignment 9_11 task8
function task9_11_8(){
    
  var inp = +prompt("Enter number to check its divisibility with 3");
if( inp % 3 === 0){
  
alert(inp + " is divisible by 3");
}else{
  
  
  alert(inp + " is not divisible by 3");
}
}

// Assignment 9_11 task9
function task9_11_9(){
   var inp = +prompt("Enter Number to check if it is even or odd");
  if( inp % 2 === 0){
     alert(inp + " is an Even Number");
  }else{   
    alert(inp + " is an Odd Number");
  }
     
  }

  // Assignment 9_11 task10
function task9_11_10(){
  var temp = +prompt("Enter Temperature");
 if( temp > 40 ){
    alert("It is too hot outside.");
 }else if( temp > 30){   
   alert("The Weather today is Normal");
 }else if(temp > 20){
  alert("Today’s Weather is cool");
 }else if(temp > 10){
   alert("OMG! Today’s weather is so Cool.")
 }else{

  alert("enter correct temperature...")
 }
    
 }
  
// Assignment 9_11 task11
function task9_11_11(){
  var num1 = +prompt("Enter Number1");
  var num2 = +prompt("Enter Number2");
  var op = prompt("Enter Operation +, -, *, /, %");
  alert(op);
 if( op == '+'){  
  alert("Addition of " + num1 +" + "+ num2 + " is : " + (num1 + num2));
 }if( op == '-'){   
  alert(" Subtraction of " + num1 +" & "+ num2 + " is : " + (num1 - num2));
 }if( op == '*'){
  alert("Multiplication of " + num1 +" * "+ num2 + " is : " + (num1 * num2));
 }if(op == '/'){
  alert("Division of " + num1 +" / "+ num2 + " is : " + (num1 / num2));
 }if( op == '%'){
  alert("Mod of " + num1 +" % "+ num2 + " is : " + (num1 % num2));
 }
}