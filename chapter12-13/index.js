function task12_13_1(){
    
  var ch = prompt("Enter to check a char");
  
  if(ch>='65' && ch<='91' || ch.toUpperCase())
  {
   alert("Upper case letter");
  }
  else if(ch>='97' && ch<='122'|| ch.toLowerCase())
  {
   alert("Lower case letter");
  }
  else if(ch>='48' && ch<='57')
  {
   alert("Digit");
  }
}

//chapter 12_13 task 2
function task12_13_2(){
    
  var num1 = +prompt("Enter 1st integer");
  var num2 = +prompt("Enter 2nd integer");
  if(num1 > num2){
      
      alert(num1 + " is larger than " + num2);
  }else if(num1 === num2){
      
      alert(num1 + " is equals to " + num2);
      
  }else{
      
  alert(num1 + " is smaller than " + num2);
  }
      
  }
// chapter 12_13 task 3
  function task12_13_3(){
    var num1 = +prompt("Enter 1st integer");
    if(num1 > 0){
        
        alert(num1 + ": Positive number ");
    }else if(num1 === 0){
        
        alert(num1 + ": Zero ");
        
    }else if(num1 < 0){
        
    alert(num1 + ": Negative number");
    }
        }

// chapter 12_13 task 4
function task12_13_4(){
    
var str = prompt("Enter a char to check if its a vowel");
str = str.toLowerCase();
str = str.slice(0,1);
if(str === 'a' || str === 'e' || str =='i' || str=== 'o' || str == 'u'){
alert("True its a vowel");
}else{
  alert("False not Vowel");
}
}

// chapter 12_13 task 5
function task12_13_5(){
    
    
  var cpass = "royalrange";
var upass = prompt("Enter your password");
if(upass === ""){
  
  alert("Please Enter your password");
  
}else if(upass === cpass){
  
  alert("Correct password");
}else{
  
  alert("Imcorrect Password !! Try Again");
}
  
}
// chapter 12_13 task 6
function task12_13_6(){    
var greeting;
var hour = 13;
if (hour < 18) {
greeting = "Good day";
alert(greeting); //added to display the alert
} //fixed
else{ // fixed
greeting = "Good evening";
alert(greeting);// added to display the alert
} 
}

// chapter 12_13 task 7
function task12_13_7(){    
  var time = +prompt("Enter Time in 24 Hour Format ex --> 1900");
  if (time >= 0000 && time < 1200) {
  greeting = "Good Morning!";
  alert(greeting); 
  } 
  else if(time >= 1200 && time <= 1700){ 
  greeting = "Good AfterNoon!";
  alert(greeting);
  }
  else if(time >= 1700 && time <= 2100){ 
    greeting = "Good Evening!";
    alert(greeting);
    }
    else if(time >= 2100 && time <= 2359){ 
      greeting = "Good Night!";
      alert(greeting);
      } 
  }



