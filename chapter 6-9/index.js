// Assignment6 task1 
function task6_1(){
  var a = +10;
  document.write("Result <br> The Value of a is: "+ a + "<br>.......................................... <br><br>"); 
  document.write("The Value of ++a:"+ ++a +"</br>");
  document.write("Now The Value of a is:"+ a + "</br><br><br>");
  document.write("The Value of a++:"+ a++ +"</br>");
  document.write("Now The Value of a is:"+ a + "</br><br><br>");
  document.write("The Value of --a:"+ --a +"</br>");
  document.write("Now The Value of a is:"+ a + "</br><br><br>");
  document.write("The Value of a--:"+ a-- +"</br>");
  document.write("Now The Value of a is:"+ a + "</br><br><br>");

}

//Assignment6   task 2
function task6_2(){
    var a = 2, b = 1;       
    var result =  --a - --b + ++b + b--;
 //   --a;  the value of a will become  1 due to pre decrement
//--a - --b; the value of a is 1 now & the value of b will become 0 from 1 due to pre decrement & their subtraction will be 1-0 = 1
//--a - --b + ++b; now here there will pre increment in b so the value will become 1 from 0  & after addition with previous result 1+1 = 2
//--a - --b + ++b + b--; in the last expression b-- there is a post decrement so the value of be will stay 1 so the result will be 2+1 =3
alert(result);

}


//Assignment6   task 3
function task6_3(){
   var name = prompt("Enter Your name");
   if( name.length > 0){

 document.write("Hey Dear User : -"+ name +" -Welcome Have a Nice Day !! Ahead <br>");
   }
   else{ alert("Input field is Empty !! please Enter Your Name")
   }
    

}

//Assignment6   task 4 not found in pdf


//Assignment6   task 5 
function task6_5(){
    var num = +prompt("Enter one number to see its multiplication");
    if( num == ""){
 num =5;
  for(var i = 1 ; i <= 10;i++)
{
    document.write(   "5 X " +i + " = "  + num * i +'<br>'  );
}
 }
 else{
     
  for(var i = 1 ; i <= 10;i++)
  {
    document.write(  num + " X " + i + " = "  + num * i +'<br>'  );
  }

 }
} 

//Assignment 6 task 6 
function task6_5(){
var sub1 = prompt("<br> Enter Subject 1 name");
var sub2 = prompt("Enter Subject 2 name");
var sub3 = prompt("Enter Subject 3 name");
var obt1marks = +prompt("Enter Subject 1 marks");
var obt2marks = +prompt("Enter Subject 2 marks");
var obt3marks = +prompt("Enter Subject 3 marks");
var total_marks = 100;   
var percentage = parseInt(((obt1marks + obt2marks + obt3marks) * total_marks) / 300);
document.write(" <table> <th> Subject </th>  <th> Total Marks </th> <th> Obtained Marks </th> <th> Percentage </th>"+
"<tr> <td>"+ sub1 +"</td><td>"+ total_marks +"</td> <td>"+ obt1marks +"</td> <td>"+ parseInt(obt1marks*total_marks)/100+"%"+"</td> </tr>" + 
"<tr> <td>"+ sub2 +"</td><td>"+ total_marks +"</td> <td>"+ obt2marks +"</td> <td>"+ parseInt(obt2marks*total_marks)/100+"%"+"</td> </tr>"+
"<tr> <td>"+ sub3 +"</td><td>"+ total_marks +"</td> <td>"+ obt3marks +"</td> <td>"+ parseInt(obt3marks*total_marks)/100+"%"+"</td> </tr> "+
"<tr><td></td> <td>"+ total_marks*3 +"</td> <td>"+ (obt1marks+obt2marks+obt3marks) +"</td> <td>"+percentage+"%"+"</td></tr></table>");
}








