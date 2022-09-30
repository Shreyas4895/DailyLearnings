// // Destructuring an object

// var destruct = {                              // if we print variable "destruct" you get full object 
//     name:"nano", 
//     company:{                                 //if we need to destructure company then var {company}=destruct; 
//         brand:{                               //if we need to destructure brand then var {company:{brand}}=destruct; 
//             name:"tata",                      // var {company:{brand:{which}}}=destruct 
//             color:"white",                    //var {company:{brand:{color}}}=destruct 
//             height: {                         //if we need to destructure height then var {company:{brand:{height}}}=destruct; 
//                 width:'55mm',                 //if we need to display value of width then var {company:{brand:{height:{width}}}}=destruct; 
//                 len:"ft", 
//                 dimension:{                    //if we need to destructure dimension then var {company:{brand:{height:{dimension}}}}=destruct;
//                     first:'mm',                 //let {company:{brand:{height:{dimension:{first}}}}}= destruct 
//                     second:'cm', 
//                     third:{ 
//                         meters:"1000",          //let {company:{brand:{height:{dimension:{third:{meters}}}}}}=destruct 
//                         cubic:"500" 
//                     } 
//                 } 
//             }, 
//         }, 
//     b:{                                     //if we want to destructure 'b' let {b}=destruct 
//         c:"hi", 
//         d:'hello',
//         }, 
//     }
// }
// // console.log(destruct);
// // var {company}=destruct;
// // console.log(company);
// // var {company:{brand}}=destruct;
// // console.log(brand);
// // var {company:{brand:{height:{width}}}}=destruct;
// // console.log(width);


// // function aas(){}
// // aas(height)
// // {                                         //if we need to destructure height then var {company:{brand:{height}}}=destruct;
// // width:'55mm',                             //if we need to dispaly value of width then var {company:{brand:{height:{width}}}}=destruct;
// // len:"ft",
// // dimension:{                               //if we need to destructure dimension then var {company:{brand:{height:{dimension}}}}=destruct;
//         // first:'mm', 
//         //let {company:{brand:{height:{dimension:{first}}}}}= destruct
//         // second:'cm',
//         // third:{
//              // meters:"1000",
//                 // cubic:"500"
//             // }
//         // }
//     // }
    
    
    
    
//     // function heightDestruct(){
//         // var {company:{brand:{height}}}=destruct;             //here i am trying to destructure height and return height:::: output: display object of height
//          // return height; 
//          // }
//          // var dest= heightDestruct();                           //storing the function in variable 
//          // console.log(dest);
    
//     // Dynamic Destructing with params 

//     // here i am trying to destructure "meters" dynamically with params ::::output:meters(i am checking what params is passed) //:1000(value of meters)


    
// // function meterDestruct(params){
// // console.log(params);                  
// // var {company:{brand:{height:{dimension:{third:{[params]:meter}}}}}}=destruct             //if i dynamically pass meter after params, and add meters in params section still i get:::: output: meters and 1000
// // return meter;
// // }
// // var stored = meterDestruct("");                                   // if i change the params passed as meter ::::output: "meter" and "undefined"
// // console.log(stored);                                             //if just quotes is passed into params in function call it gives:::: output: undefined
    

// // function brandDestruct(params){ 
// //     console.log(params); 
// // var {company:{[params]:{height:{dimension:{third}}}}}=destruct;  //we can perform object destructure even after params is used
// //     return third
// // }
// // var brandObj=brandDestruct("brand");
// // console.log(brandObj);


// // function companyDestruct(){
// //     var {company}=destruct;
// //     return company;
// // }
// // var company=companyDestruct();
// // console.log(company);

// // function dimensionDestruct(params){
// //     console.log(params)
// //     var{company:{brand:{height:{[params]:dimension}}}}=destruct
// //     return dimension;
// // }
// // var dimensionObj=dimensionDestruct("dimension");
// // console.log(dimensionObj);

// // function firstDestruct(params){
// //     console.log(params);
// //     let {company:{brand:{height:{[params]:{dimension:{first}}}}}}=destruct;
// //     return dimension;
// // }
// // var firstObj=firstDestruct("dimension");
// // console.log(firstObj);

// // function brandDestruct(params){ 
// //     console.log(params); 
// // var {company:{[params]:{height:{dimension:{third}}}}}=destruct;  //we can perform object destructure even after params is used
// //     return third
// // }
// // var brandObj=brandDestruct("brand");
// // console.log(brandObj);

// //Array Destructuring************

// var planets = ["Mercury", "Venus","Earth", "Mars", "jupiter", "Saturn","uranus","neptune","pluto"];// var [a,,c,...others] = planets;// console.log(a);// console.log(c);// console.log(...others);
// // var [a,,,c,d,...rest]=planets;
// // console.log(...rest);
// // var array=[{
//     // first:{
//         // name:"tony",
//         // age:19,
//         // place:"bangalore"
//         // },
//         // second:{
//             // name:"jake",
//             // age:23,
//             // place:"yelahanka"
//             // },
//             // third:{
//                 // name:"carter",
//                 // age:25,
//                 // place:"vidyanagar"
//                 // }
//                 // },
//                 // {first:000}
//                 // ];
//                 // 
//                 // console.log("Full array:",array); 
//                 //i'm printing full array
// // let [{first,...rest}]=array                      //i'm destructuring array and typing first array and rest of object
// // console.log(first);                              //i got output for first::{ name: 'tony', age: 19, place: 'bangalore' }
// // console.log("restof:",rest);                     //output::restof: {second: { name: 'jake', age: 23, place: 'yelahanka' },third: { name: 'carter', age: 25, place: 'vidyanagar' }}
// // let [{first:{name}}]=array;
// // console.log("name",name);




// // var [a,b,...rest]=array;
// // console.log(a);
// // console.log(b);
// // console.log(rest);
// // var [a,b]=array;
// // console.log(a,b);
// // const [a, , b] = array;
// // console.log(a,b);
// // const [a,b,,,c=cDefault] = array;      //if the value of c is undefined then we can give default value by assigning default value like we need
// // console.log(a);
// // console.log(b);
// // console.log(c)
// // const [a, b,...rest] = array;
// // console.log(a,b);
// // console.log(rest.pop());                                           //pop removes the last item in an array
// // console.log(rest.push("kiwi"));                                    //push adds new items at the end of array
// // console.log(rest.shift());                                        //shift removes first item in an array
// // console.log(rest);
// // const [a, b, ...[c, d]] = array;
// // let array=[1,2,3,4,5];                                             //shift() removes items at the start
// // console.log(array.push("kiwi"));                                   //.push() adds items ta the end
// // console.log(array);                                                //pop removes items at the end 
// // console.log(array.copyWithin(2,5))                                   //copy within copies the files within array


// // var array=[
//     // {
//         // first:{
//             // name:"tony",
//             // age:19,
//             // place:"bangalore"
//             // },
//             // second:{
//                 // name:"jake",
//                 // age:23,
//                 // place:"yelahanka"
//                 // },
//                 // third:{
//                     // name:"carter",
//                     // age:25,
//                     // state:{
//                         // city:"bangalore",
//                         // country:"INDIA"
//                         // }
//                         // }
//                         // }
//                         // ];
// // var [{third:{state:{country}}}]=array
// // console.log(country);
// // function arrayDestructuring(){
//     // let [{third:{state:{city}}}]=array;
//     // return city;
//     // }
//     // var arrayDestruct=arrayDestructuring();
//     // console.log(arrayDestruct);
// var array=[ { 
//     first:{
//          name:"tony",
//           age:19,
//            place:"bangalore" 
//         }, second:{
//              name:"jake",
//               age:23, 
//               place:"yelahanka" },
//                third:{
//                  name:"carter",
//                 age:25, 
//                 state:{ 
//                     city:"bangalore", 
//                     country:"INDIA" 
//                 } 
//             } 
//         }];
// var [{third:{state}}]=array;
// console.log(state);
// // const props = [
//     // { id: 1, name: 'eric'}, 
//     // { id: 2, name: 'Buzz'},
//     // { id: 3, name: 'tony'}
//     // ];
//     // const [,,{ name }] = props;                                   //here i'm trying to get the value of name of third object in this array
//     // console.log(name);                                            //output will be tony



//Map function


// let newArr = oldArr.map((val, index, arr) => {
//     // return element to new Array
//   });
// newArr — the new array that is returned
// oldArr — the array to run the map function on
// val — the current value being processed
// index — the current index of the value being processed
// arr — the original array

// var arr = [1, 2, 3, 4];
// let newArr=arr.map((val,i,arr)=>{
//     return {value:val,
//     index:i};
// })

// let newArr=arr.map(()=>{return 'cats'});
// let newArr=arr.map((v,i,a)=>{
//     return v%2===0?v=v*2:v;
// })
// console.log(newArr);

// let data = [
//     {
//       country: 'China',
//       population: 1409517397,
//     },
//     {
//       country: 'India',
//       population: 1339180127,
//     },
//     {
//       country: 'USA',
//       population: 324459463,
//     },
//     {
//       country: 'Indonesia',
//       population: 263991379,
//     }
//   ]

// let cities = data.filter((val)=>{
//     return val.population>5000000;
// })
// console.log(cities);







//Array methods
// var numbers=[{x:1},{x:2},{x:3},{x:4},{x:5}]
// var sum=numbers.reduce((previousValue,currentValue)=>previousValue+currentValue.x,0);
// console.log(sum);
// var numbers=[[0, 1],[2, 3],[4, 5]]
// var sum=numbers.reduce((previousValue,currentValue)=>previousValue.concat(currentValue),[])
// console.log(sum);

// const friends = [
  // {
    // name: "Anna",
    // books: ["Bible", "Harry Potter"],
    // age: 21,
    // },
    // {
      // name: "Bob",
    // books: ["War and peace", "Romeo and Juliet"],
    // age: 26,
    // },
    // {
      // name: "Alice",
      // books: ["The Lord of the Rings", "The Shining"],
      // age: 18,
      // },
      // ];
// const allBooks=friends.reduce((previousValue,currentValue)=>[...previousValue,...currentValue.books],[])
// console.log(allBooks);
// const names = ["Alice", "Bob", "Tiff", "Bruce", "Jack","Alice","Jack"];
// const sum = names.reduce((i,n)=>i+' '+n);
// console.log(sum);
// const nameCount =names.reduce((allNames,name)=>{
  // const sum = allNames[name]?? 0;
  // return {
    // ...allNames,
    // [name]:sum+1,
    // }
    // },[]);
    // console.log(nameCount);

// const arr1 = ["Cecilie", "Lone"];
// const arr2 = ["Emil", "Tobias", "Linus"];
// const join=arr1.concat(arr2);
// console.log(join);                                                 // concat joins item of array1 and array2
// const ages = [32, 33, 16, 40];
// const check=ages.filter(checkFunction);
// console.log(check);                                          // i'm trying to filter ages above 32 here ,Output::[33,40]
// function checkFunction(age){
  // return age>32
  // }

// const array = ['a', 'b', 'c']; 
// array.forEach((element) => console.log(element));                        //here i'm printing the value of each element
// const array1 = [1,3,7];
// let num=0;
// array1.forEach((element) => {                                                   //here i'm using forEach for array1 
  // console.log({element});
  // num++;
  // }
  // );
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// const allFruits = Object.keys(fruits);
// console.log(allFruits);
// const fruits = ["Apple", "Orange", "Apple", "Mango"];
// let index = fruits.lastIndexOf("Apple"); 
// console.log(index);                                                                   //i'm checking the lastIndex of apple 
// const numbers = [4, 9, 16, 25];
// const root= numbers.map(Math.sqrt);
// console.log(root);

// const arr = [1,2,3,4];
// const map1=arr.map((i)=>i*4);                                    //here i'm trying to use map for arr :output::[4,8,12,16]
// console.log(map1);
// const array = [
  // { key: 1, value: 10 },
  // { key: 2, value: 20 },
  // { key: 3, value: 30 },
  // ];
  // const arrayFormat=array.map(({value})=>({                        //here i'm using map for array output::[ { key: 10 }, { key: 20 }, { key: 30 } ]
  // key:value// }));
  // console.log(arrayFormat);
// const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
// // console.log(fruits.pop());                                         //pop removes items at the end of an array and displays removed item
// // const pushing=fruits.push("kiwi");                                  //push add items at the end of array
 // // const shifting=fruits.shift();                                       //shift rmeoves items at the start of the array
 // // console.log(fruits);
// const slicing= fruits.slice(-3,-1);
// console.log(slicing);

// var arr=[1,2,3,4,5];
// var sum=0;
// arr.map((i)=>sum+=i)                                                     // Adding all the elements using map
// console.log(sum);                                                       // map is used to return an array //// 


//map method maps each value of the array to another value and creating array and output it******

// const arr =[5,1,3,4,6];
// output=arr.map((triple)=>triple*3);                                        //here i'm using map and tripling the array value
// console.log(output);
// const binary=arr.map((x)=>x.toString(2));                                    //here i'm using map and displaying the binary value
// console.log(binary);

// let array = [2, 3, 5, 7];
// var modifiedArray=array.reduce((preValue,nextValue)=>preValue*nextValue);
// console.log(modifiedArray);
// var aa = [1,2,3]
// var sum=1;
// aa.map((a) => sum = sum* a)
// console.log(sum);

// var numbers=[1,2,3,4,5];
// numbers.forEach((n,i,numbers)=>{
  // console.log(n,i,numbers);                                               //forEach accepts function inside a function and iterates for each element
  // })
  // var total=0;
  // var total1=numbers.forEach((arg)=>total+=arg);                           //forEach takes three arguments parameter,index and the array


//////////////////////

// var array=[1,2,3,4,5,6]
// // function isOdd(x){
  // // return x%2;
  // // }
  // var filter=array.filter((x)=>x%2);                                       //here filter method filters the value and displays odd numbers
  // console.log(filter);

/////////reduce function is basically used at a place where you have to take all elements of array and come out with single value out of it

// const array=[ {name:"tony",age:12,place:'bangalore'}, {name:"Jack",age:22,place:'vrpuram'}, {name:"giant",age:32,place:'krpuram'}, {name:"carter",age:32,place:'krpuram'}]
// const output=array.reduce((acc,curr)=>{
  // if(acc[curr.age]){
    // acc[curr.age]=++acc[curr.age]
    // }else{
      // acc[curr.age]=1
    // }
    // return acc;
    // },{})
// console.log(output);                                                       //// now i'm using filter and map together to display age and name of the people who has age<30 as shown below by using both map and filter
 // const output=array.filter((x)=>x.age<30).map((x)=>x.name);                //in this stage i'm using filter to check age<30 and map the name to age <30 
 // console.log(output);                                                        //output will be "Tony" and "Jack" 
//  const output=array.filter((x)=>x.age<30).reduce((acc,cur)=>{  ///here i'm trying to use reduce to get output as 'tony' and 'Jack' 
//   if(cur.age<30){
//     acc.push(cur.name);
//    } return acc; },[]); 
//    console.log(output);


// ###########################**********Promise javaScript**********#######################


// let p = new Promise((resolve,reject)=>{                            //we are creating a variable p and assigning promise to it ,
   // let a=1+1                                                   //the callback used to initialise the promise are resolve and reject in this case
   // if(a==2){                                                //here i'm trying to check if the condition satisfies if resolved and setting a message to it
     // resolve("success")
     // }else{
      // reject("failed")                                       //here i'm checking if the condition gets rejected and message is set
      // }
      // })
// p.then((message)=>{                                           //i'm checking what happens if promise is resolved and printing the message 
  // console.log("this is in the then "+message)
  // }).catch((message)=>{                                     //checking if the condition gets rejected? and catching error and printing message
     // console.log("this is in the catch "+message)
     // })
// let first=()=>{                                                               //i'm creating a first variable with promise 
  // return new Promise(                                                        //returning promise to it
    // function(resolve,reject){
      // resolve("you have cat! ")                                                //setting message if success
      // }
      // )
      // }
// let second=function(dataF){                                                      //creating second variable and returning promise and setting message
  // return new Promise(
    // function(resolve,reject){
      // resolve(dataF +"really?")
      // }
      // )
      // }
      // first().then((data)=> 
      // second(data))
      // .then((data)=>
      // console.log(data))

// #######promise Chain#######


// var myPromise=new Promise(function(resolve,reject){                              //here i'm trying to check if the condition satisfies if resolved and setting a message to it
   // resolve(1)
   // })
   // .then(function(myPromise) { 
    // console.log(myPromise); 
    // return myPromise * 2;
// }).then(function(myPromise) { 
// console.log(myPromise); 
// return myPrmise * 2;
// }).then(function(myPromise) {
// console.log(myPromise); 
// return myPromise * 2;
// })
// .catch(function(){
  // console.error("will show error")
  // })

// const fetchHandler
// fetch('http://example.com/movies.json')
// .then((response) => response.json())
// .then((data) => console.log(data));


// const fetch=()=>{
  // fetch('http://example.com/movies.json')
  // .then((response) => response.json())
  // .then((data) => console.log(data))
  // .catch((error) => {
    // console.error('Error:', error);
    // });
    // }



    // function resolveAfter2Seconds(x) {
    //   return new Promise((resolve) => {                       // creating new promise and passing in resolve
    //     setTimeout(() => {                                     //setting timout for 2 seconds 
    //       resolve(x);
    //     }, 2000);
    //   });
    // }
    
    // async function f1() {                                            //qcalling promise inside async function
    //   const x = await resolveAfter2Seconds(10);
    //   console.log(x); // 10                                      //printing the output ,which gets delayed for 2 seconds
    // }
    
    // f1();


    // async function foo(name) {                                           //here i'm checking how the code works inside async
    //   console.log(name, "start");
    //   await console.log(name, "middle");
    //   console.log(name, "end");
    // }
    
    // foo("First");
    // foo("Second");


//output:First start
// First middle
// Second start
// Second middle
// First end
// Second end




// // console.log('First!');

// setTimeout(function second(){
//     console.log('Timed Out!')
// }, 0000)

// console.log('Final!');

//output ::first,final! and Timed out!


// async function example() {

//   let promise = new Promise((resolve, reject) => {
//     setTimeout(() => resolve("done!"), 2000)
//   });

//   let result = await promise; // wait until the promise resolves (*)

//   console.log(result); // "done!"
// }

// example();




