// /*console.log("this is external file ");
// let 
// var x = 'Rajesh hamal';
// console.log(x);

// x = 'Sharuk khan';
// console.log(x);*/

// let x = 15;
// let y = 8;

// let sum =  x + y ;
// let subtract = x - y ;
// console.log('sum', sum)
// console.log('subtract', subtract)
 

// if(x>y) {
//     console.log(x + 'is greater than '+ y);

// }else{
//     console.log(y + 'is grater than'+ x);
// }




// /*if (year = 2082);  
//     {
//     console.log('this is current year');
// }
// else if (year>2082){
//     console.log('this is upcoming year');

// }
// else if( year<2082 ) {
//     console.log('this is passed year');
// }*/

// //conditions
// //<, >, = assignment operator,  == === data type equal xa or nai 
// // single line comment "//"
// console.log(9%)

//  let num = 10;``
//  // let x = 25;
// // let y = 10;

// // // console.log('Product:',x*y);
// // // console.log('Sum:',x+y);
// // // console.log('Difference:',x-y);

// // var year = 2080;
// // if(year==2082){
// //     console.log('Tapai 2082 ma hunuhunchha');
// // }
// // else if (year>2082){
// //     console.log('Yo aauney year ma ke cha tapai ko plan?');
// // }
// // else if(year<2082){
// //   console.log(${year} Yo bitisake ko samay ho);
// // } 
// // // if(x>y){
// // //     console.log(x +' is greater than '+ y);
// // // }else if(x<y){
// // //     console.log(x + ' is less than ' + y); }
// // num = prompt("Kun number ko table chahinchha?");
// // for (let i = 1; i <= 10; i++) {
// //   console.log(num + " * " + i + " = " + num * i);
// // }
// // let i = 1;
// // while (i <= 10) {
// //   console.log(num + " * " + i + " = " + num * i);
// //   i++;
// // }

// for(let i = 1; i <= 20; i++){
//   if(i%2==0)
//   {
//     continue;
//   }
//   console.log(i + " is a odd number. ");
// }

// function sum ( x, y) {
//     return x+y;
// }
//  console.log(sum(5, 10));


//  function sum (a, b=0){
//     console.log(a+b);

//  }
// sum(4,9);
//week 3
// function sum(x, y) {
//     let total = 0;
//     let nums = [x, y];
//     for (let i = 0; i < nums.length; i++) {
//         total += nums[i];
//     }
//     return total;
// }

// console.log(sum(5, 10));



// function printTable(number) {

//     for (let i = 1; i <= 10; i++) {
//         console.log(number + " x " + i + " = " + (number * i));
//     }
// }


// printTable(9); 


let newArr = ['ram', 'hari', 'sita'];
console.table(newArr);
console.log(newArr[0]);

//if i want tto add new 
newArr.push('Ram Bahadur');
console.table(newArr);

newArr.pop();
console.table(newArr)
newArr.pop();
console.table(newArr);
console.log (newArr[2]);


newArr.shift();
newArr.unshift('hanuman');
console.table(newArr);
console.log(newArr[2]);


const main = document.getElementById("main")
console.log(main)
inner test \