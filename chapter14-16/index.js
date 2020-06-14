//chapter 14_16 task 1
function task14_16_1_2_3_4_5_6(){

//task1 : empty Array to store student Names Using JS literal Notation
  var studentNames = [];

//task2 : empty Array to store student Names Using JS Object Notation
  var studentNames = new Array();
 
  
//task3 :  Declare & Initialize a string Array
  var strArray = ["book","umbrella","color","fruits"];
  alert(strArray);

//task4 : Declare & Initialize a number Array
  var numArray = [1,2,3,4,5,6,7,8,9,10];
  alert(numArray);

//task5 :  Declare & Initialize a Boolean Array
  var boolArray = [true,false,true,true,false];
  alert(boolArray);

//task6 :  Declare & Initialize a Mixed Array
  var mixArray = ["Adeel Khan",1993,true];
  alert(mixArray);
}
//chapter 14_16 task 7
 function task14_16_7(){
  var education = [ "SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.","PhD"];
  document.write("Qualifications : <br> <br>")
  for(var i= 1 ; i <= education.length ; i++){
  document.write( i+") "+ education[i-1] +"<br>");
  }
}
 //chapter 14_16 task 8
 function  task14_16_8(){
  var names =["Michael","John","Tony"];
  var score =[320,230,480];
  var total = 500;
  document.write("Score of "+names[0]+ " is "+score[0]+ " Percentage: "+ score[0]/total * 100 + "% <br>");
  document.write("Score of "+names[1]+ " is "+score[1]+ " Percentage: "+ score[1]/total * 100 + "% <br>");
  document.write("Score of "+names[2]+ " is "+score[2]+ " Percentage: "+ score[2]/total * 100 + "% <br>");
}
//chapter 14_16 task 9
function task14_16_9(){
    
  var colorNames = ["red","green", "blue" ,"yellow"];
  document.write("colorNames : " + colorNames);
  document.write("<br>");
  // a add to start 
  var begColor = prompt("what color you want to add in beginning");
  colorNames.unshift(begColor);
  document.write("colorNames with Addition in Beginning :  " + colorNames);
  document.write("<br>");

  //add  one in end;
  var endColor = prompt("what color you want to add in End");
  colorNames.push(endColor);
  document.write("colorNames with Addition in End :  " + colorNames);
  document.write("<br>");

  //c add two in beginning
  var fColor = prompt("what color you want to add in beginning");
  var sColor = prompt("what color you want to add in beginning");
  colorNames.unshift(fColor,sColor);
  document.write("colorNames with Addition in Beginning :  " + colorNames);
  document.write("<br>");
  
  //d delete first from beginning 
  colorNames.shift(begColor);
  document.write("colorNames with one Deletion in Beginning :  " + colorNames);
  document.write("<br>");


   //e delete first from beginning 
   colorNames.pop(endColor);
   document.write("colorNames with one Deletion from End:  " + colorNames);
   document.write("<br>");
   
   //f add at index
   var index = +prompt("on which index u want to put a color?");
   var color = prompt("Which Color you want to add at " + index);
   colorNames.splice(index,0,color);
   document.write("colorName iNsetion at index no :  " + colorNames);
   document.write("<br>");

   //g remove at index
   var index = +prompt("on which index u want to remove a color?");
   var mch = +prompt("How many u want to remove ?");
   colorNames.splice(index, mch);
   document.write("colorName remove at index no :  " + colorNames);
   document.write("<br>");
}
//chapter 14_16 task 10
function task14_16_10(){
  var scores =[320,230,480,120];
  document.write("Scores of Students : "+scores + "<br>");
  scores.sort();
  document.write("Ordered Score of Students : "+scores);
}
//chapter 14_16 task 11
function task14_16_11(){
  var cities = ["karachi","Lahore","islamabad","Queeta","peshawar"];
  document.write("Cities= "+ cities +"<br>");
  var selected = cities.slice(2,4);
  document.write("Selected cities= " +selected);
}
//chapter 14_16 task 12
function task14_16_12(){
  var arr = ["This","is","my","cat"];
  document.write("Array : <br>");
  document.write(arr);
  document.write("<br>");
  arr = arr.join(" ");
  document.write("String : <br>")
  document.write(arr);
}
//chapter 14_16 task 13

function task14_16_13(){
  var arr = [];
  arr.unshift("keyboard");
  arr.unshift("mouse");
  arr.unshift("printer");
  arr.unshift("monitor");
  document.write(" TOTAL ");
  document.write("<br>");
  document.write("Array : " + arr);

  document.write("<br>");
  document.write(" Removal ");
  document.write("<br>");
  document.write("Array : " + arr);
  document.write("<br>");
  arr.shift("keyboard");
  document.write("Array : " + arr);
  document.write("<br>");
  arr.shift("mouse");
  document.write("Array : " + arr);
  document.write("<br>");
  arr.shift("printer");
  document.write("Array : " + arr);
  document.write("<br>");
  arr.shift("monitor");
  document.write("<br>");
}

//chapter 14_16 task 14
function task14_16_14(){
  var arr = [];
  arr.push("keyboard");
  arr.push("mouse");
  arr.push("printer");
  arr.push("monitor");
  document.write(" TOTAL ");
  document.write("<br>");
  document.write("Array : " + arr);

  document.write("<br>");
  document.write(" Removal ");
  document.write("<br>");
  document.write("Array : " + arr);
  document.write("<br>");
  arr.pop("keyboard");
  document.write("Array : " + arr);
  document.write("<br>");
  arr.pop("mouse");
  document.write("Array : " + arr);
  document.write("<br>");
  arr.pop("printer");
  document.write("Array : " + arr);
  document.write("<br>");
  arr.pop("monitor");
  document.write("<br>");
}


//chapter 14_16 task 15
function task14_16_15(){
  var manufactures = [ "Apple","Samsung","Motorola","Nokia","Sony","Haier"];
document.write("<select> <option>"+ manufactures[0]+ "</option> <option>"+ 
manufactures[1]+ "</option> <option>"+ manufactures[2]+ 
"</option> <option>"+ manufactures[3]+ "</option> <option>"+ manufactures[4]+
 "</option> <option>"+ manufactures[5]+ "</option> </select>");
}

  