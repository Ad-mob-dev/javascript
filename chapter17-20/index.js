//chapter 17_20 task 1
// task17_20_1_2_3
function task1_2_3(){
    var array = [[],[]];
    
  //task2
    var multi =[[0,1,2,3],[1,0,1,2],[2,1,0,1]];
    for(var i=0 ; i < multi.length;i++){      
        document.write(multi[i].join(" ") +"<br>");
    }
    
    
  //task3
    var count = 10;
    for(var i = 1 ; i <=count ; i++){
        document.write(i+"<br>");
    }
  }
  //chapter 17_20 task 4
  function task17_20_4(){
    var num = +prompt("Emter a number to see its multiplication");
    var len = +prompt("Enter length of table");
    for(var i = 1; i <= len; i++){
        
      document.write(num+ " x "+ i + " = "+ num*i + "<br>");
        
    }
  }
  //chapter 17_20 task 5
  function task17_20_5(){
    var fruits = ["apple","banana","mango","orange","strawberry"];
    for(var i = 0 ; i <fruits.length;i++){
        document.write(fruits[i]+ "<br>");   
    }
        document.write("<br>");
    for(var i = 0 ; i <fruits.length;i++){
         document.write("Element at index " +i+ " is "  +fruits[i]+ "<br>");
    }
    }
    
 //chapter 17_20 task 6
  function task17_20_6(){
  //counting
    document.write("Counting: ");
    for(var i = 1 ; i <=15;i++){
      document.write( i+ '\n' );   
    }
  
    //reverse counting
    document.write("<br> Reverse Counting: ");
    for(var i = 10 ; i >= 1;i--){
    document.write( i+ '\n' );   
    }
  
    //Even
    document.write("<br> Even: ");
    for(var i = 0 ; i < 21; i++){

        if( i % 2 === 0){
    document.write( i+ '\n' );  
        } 
    }

    //odd
     document.write("<br> ODD: ");
    for(var i = 0 ; i < 21; i++){
    if( i % 2 !== 0){
        document.write( i+ '\n' );  
            } 
    }

    //Series
    document.write("<br> Series: ");
    for(var i = 2 ; i<21; i++){
        if( i % 2 === 0){
            document.write( i+'k'+'\n' );  
        } 
    } 
 
}

 //chapter 17_20 task 7
function task17_20_7(){
   
    A = ["cake", "apple pie", "cookie", "chips", "patties"];
    var search=prompt("Enter for search in our bakery");
document.write("Array:"+ A +'<br>');

for(i=0 ; i<A.length;i++){

A[i]=A[i].toLowerCase();
search = search.toLowerCase();
    if(A[i]=== search){
        document.write("Found : "+ A[i] + ' at index'+i+ ' in our Bakery <br>');
        break;
      }else if(A[i] !== search){
          document.write("We are sorry " +search +" not found");
          break;
      }

}


}
  
 //chapter 17_20 task 8
 function task17_20_8(){
    A = [24, 53, 78, 91, 12];
  var max =  +Math.max(...A);
  document.write("Array : "+A + '<br>');
    document.write("Largest: " + max);

}


//chapter 17_20 task 9
function task17_20_9(){
    A = [24, 53, 78, 91, 12];
  var min =  +Math.min(...A);
  document.write("Array : "+A + '<br>');
    document.write("Smallest: " + min);
}
  

//chapter 17_20 task 10
function task17_20_10(){
  for(var i = 1; i <= 100;i++){
      if(i%5===0){
      document.write(i + "\n");
      }
  }
}
  