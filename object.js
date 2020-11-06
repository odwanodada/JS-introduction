//Object
let table = {length:4,
              width:5,
              color:"Red",myarea:function(){return 5*4}
             };//keys and Values Method or function
//console.log(table.length);
//console.log(table.width);
//console.log(table.color);
//document.write(table['width'])
console.log(table.myarea());
table.color = "pink";
document.write(table.color + "<br/><br/>");
document.write(table + "<br/><br/>");

//Array

let selectedColors = ['red','blue'];
console.log(selectedColors[0]);//inex
console.log(selectedColors.length);//length

let numbers = [1,2,3,4,5];
console.log(numbers);


///////Exercise////

let car = {wheels:4,
           doors:4,
           window:6,
           key:1,area_of_circle:function(myRadius){return myRadius * myRadius * Math.PI}
          };
          var myRadius = parseInt(prompt("Please enter radius"))
          var area = area_of_circle(myRadius);

console.log(car.wheels);
console.log(car.doors);
console.log(car.window);
console.log(car.key);
console.log(car.area_of_circle());
