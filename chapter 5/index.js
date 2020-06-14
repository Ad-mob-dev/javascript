// chapter 5 task1 
function Addition(num1,num2){
  return document.write("<h1>Chp5 Task 1 </h1>"+"Sum of " +num1+ " and " +num2+ " is " +(num1+num2) + '<br>'); 
}

// chapter-5 task2
function Subtraction(num1, num2) {
    return document.write("<h1>Chp5 Task 2</h1>"+"Subtraction of " + num1 + " and " + num2 + " is " + (num1 - num2) + '<br>');
}
  
function Multiplication(num1, num2) {
    return document.write("Multiplication of " + num1 + " and " + num2 + " is " + (num1 * num2) + '<br>');
}

function Division(num1, num2) {
    return document.write("Division of " + num1 + " and " + num2 + " is " + (num1 / num2) + '<br>');
}

function modulus(num1,num2){
    return document.write("Modulus of " +num1+ " and " +num2+ " is " + (num1 % num2) + '<br>');  
}

// chapter-5 task3
function task3(){
document.write("<h1>Chp5 Task 3</h1>")
var num;
document.write("Value after variable declaration is: " +num);
num = 5;
document.write("<br> Initial value: " +num);
num++;
document.write("<br> Value after increment is: " +num);
num += 7;
document.write("<br> Value after addition is: " +num);
num--;
document.write("<br> Value after decrement is: " +num);
num /= 3;
num %= num;
document.write("<br> The remainder is: " +num);
}

// chapter-5 task4
function task4(){
  var price = 600;
  var cost = 600 * 5;
    document.write("<br> Total Cost to buy 5 tickets to a movie is : " +cost);
    }

// chapter-5 task5
function task5(){
var num = 4;
    for(var i= 1; i <= 10;i++){
      document.write("<br>"+ num + " X " +i + " = " + num*i + '<br>');

    }
      }

// chapter-5 task6
function task6(){
    var  Celsius = 25;
    var faren = 70;
    var cfaren = (Celsius * 9/5)+32;
    var ccelsius = (faren - 32) * 5/9;
    document.write("<br>");
    document.write(Celsius+"C is "+cfaren+"F");
    document.write("<br>");
    document.write(faren+"F is "+ccelsius+"C <br><br>");         
}

// chapter-5 task7
function task7(){
            var  pitem1 = 650;
            var pitem2 = 100;
            var  qitem1 = 3;
            var qitem2 = 7;
          var cost1 = pitem1 * qitem1;
          var cost2 = pitem2 * qitem2;

            document.write("<br>");
            document.write("Price of item 1 is " + pitem1);
            document.write("<br>");
            document.write("Quantity of item 1 is " + qitem1);
            document.write("<br>");
            document.write("Price of item 2 is " + pitem2);
            document.write("<br>");
            document.write("Quantity of item 2 is " + qitem2);
            document.write("<br>");  
            document.write("Total cost of your order is " + (cost1 + cost2)+'<br><br>');

        }

// chapter-5 task8
function task8(){
  var total = 980;
  var obtained = 804;
  var per =  (obtained / total) * 100;
  document.write("Total Marks: " + total);
  document.write("<br>");
  document.write("Obtained Marks: " + obtained);
  document.write("<br>");
  document.write("Percentage : " + per+"%");
}

// chapter-5 task9
function task9(){
  var dollar = 10;
  var riyal = 25;
  var currencytopk = 10 * 104.80 + 25 * 28;
   document.write("<br>");
  document.write("Total Currency in Pkr : " + +(currencytopk));
}

// chapter-5 task10
function task10(){
  var  num = +((5 + 5) * 10) / 2;
   document.write("<br>");
  document.write("Calculation : " + num);
}

// chapter-5 task11
function task11(){
  var  curryear = 2016;
  var  birthyear = 1992;
  var age = curryear - birthyear;

  document.write("Current year: " + curryear);
  document.write("<br>");
  document.write("Birth year : " + birthyear);
  document.write("<br>");
  document.write("Age : " + age);
}

// chapter-5 task12
function task12(){
  var  Radius = 20;
  var circumference =  2 * 3.142 * Radius;
  var area = 3.142 * Radius * Radius;
  document.write("Radius of a circle : " + Radius);
  document.write("<br>");
  document.write(" Circumference : " + circumference);
  document.write("<br>");
  document.write("Area : " + area);
}

// chapter-5 task13
function task13(){

  var favSnack = "chocolate chip";
  var currAge = 15;
  var maxAge = 65;
  var amtSnacks = 3;
  var rem_year = maxAge - currAge;
  var totalsnacks = amtSnacks * rem_year;
  document.write("Favourite Snack: " + favSnack);
  document.write("<br>");
  document.write("current Age: " + currAge);
  document.write("<br>");
  document.write("Estimated MAximun Age: " + maxAge);
  document.write("<br>");
  document.write("Amount of snacks per day: " + amtSnacks);
  document.write("<br>");
  document.write("You will need "+ totalsnacks + " chocolate chip to last you until the ripe old age of " + maxAge);
 
}