// Destructuring an object

var destruct = {                              // if we print variable "destruct" you get full object 
    name:"nano", 
    company:{                                 //if we need to destructure company then var {company}=destruct; 
        brand:{                               //if we need to destructure brand then var {company:{brand}}=destruct; 
            name:"tata",                      // var {company:{brand:{which}}}=destruct 
            color:"white",                    //var {company:{brand:{color}}}=destruct 
            height: {                         //if we need to destructure height then var {company:{brand:{height}}}=destruct; 
                width:'55mm',                 //if we need to display value of width then var {company:{brand:{height:{width}}}}=destruct; 
                len:"ft", 
                dimension:{                    //if we need to destructure dimension then var {company:{brand:{height:{dimension}}}}=destruct;
                    first:'mm',                 //let {company:{brand:{height:{dimension:{first}}}}}= destruct 
                    second:'cm', 
                    third:{ 
                        meters:"1000",          //let {company:{brand:{height:{dimension:{third:{meters}}}}}}=destruct 
                        cubic:"500" 
                    } 
                } 
            }, 
        }, 
    b:{                                     //if we want to destructure 'b' let {b}=destruct 
        c:"hi", 
        d:'hello',
        }, 
    }
}
// console.log(destruct);
// var {company}=destruct;
// console.log(company);
// var {company:{brand}}=destruct;
// console.log(brand);
// var {company:{brand:{height:{width}}}}=destruct;
// console.log(width);


// function aas(){}
// aas(height)
// {                                         //if we need to destructure height then var {company:{brand:{height}}}=destruct;
// width:'55mm',                             //if we need to dispaly value of width then var {company:{brand:{height:{width}}}}=destruct;
// len:"ft",
// dimension:{                               //if we need to destructure dimension then var {company:{brand:{height:{dimension}}}}=destruct;
        // first:'mm', 
        //let {company:{brand:{height:{dimension:{first}}}}}= destruct
        // second:'cm',
        // third:{
             // meters:"1000",
                // cubic:"500"
            // }
        // }
    // }
    
    
    
    
    // function heightDestruct(){
        // var {company:{brand:{height}}}=destruct;             //here i am trying to destructure height and return height:::: output: display object of height
         // return height; 
         // }
         // var dest= heightDestruct();                           //storing the function in variable 
         // console.log(dest);
    
    // Dynamic Destructing with params 

    // here i am trying to destructure "meters" dynamically with params ::::output:meters(i am checking what params is passed) //:1000(value of meters)


    
// function meterDestruct(params){
// console.log(params);                  
// var {company:{brand:{height:{dimension:{third:{[params]:meter}}}}}}=destruct             //if i dynamically pass meter after params, and add meters in params section still i get:::: output: meters and 1000
// return meter;
// }
// var stored = meterDestruct("");                                   // if i change the params passed as meter ::::output: "meter" and "undefined"
// console.log(stored);                                             //if just quotes is passed into params in function call it gives:::: output: undefined
    

// function brandDestruct(params){ 
//     console.log(params); 
// var {company:{[params]:{height:{dimension:{third}}}}}=destruct;  //we can perform object destructure even after params is used
//     return third
// }
// var brandObj=brandDestruct("brand");
// console.log(brandObj);


// function companyDestruct(){
//     var {company}=destruct;
//     return company;
// }
// var company=companyDestruct();
// console.log(company);

// function dimensionDestruct(params){
//     console.log(params)
//     var{company:{brand:{height:{[params]:dimension}}}}=destruct
//     return dimension;
// }
// var dimensionObj=dimensionDestruct("dimension");
// console.log(dimensionObj);

// function firstDestruct(params){
//     console.log(params);
//     let {company:{brand:{height:{[params]:{dimension:{first}}}}}}=destruct;
//     return dimension;
// }
// var firstObj=firstDestruct("dimension");
// console.log(firstObj);

// function brandDestruct(params){ 
//     console.log(params); 
// var {company:{[params]:{height:{dimension:{third}}}}}=destruct;  //we can perform object destructure even after params is used
//     return third
// }
// var brandObj=brandDestruct("brand");
// console.log(brandObj);

//Array Destructuring************

var planets = ["Mercury", "Venus","Earth", "Mars", "jupiter", "Saturn","uranus","neptune","pluto"];// var [a,,c,...others] = planets;// console.log(a);// console.log(c);// console.log(...others);
// var [a,,,c,d,...rest]=planets;
// console.log(...rest);
// var array=[{
    // first:{
        // name:"tony",
        // age:19,
        // place:"bangalore"
        // },
        // second:{
            // name:"jake",
            // age:23,
            // place:"yelahanka"
            // },
            // third:{
                // name:"carter",
                // age:25,
                // place:"vidyanagar"
                // }
                // },
                // {first:000}
                // ];
                // 
                // console.log("Full array:",array); 
                //i'm printing full array
// let [{first,...rest}]=array                      //i'm destructuring array and typing first array and rest of object
// console.log(first);                              //i got output for first::{ name: 'tony', age: 19, place: 'bangalore' }
// console.log("restof:",rest);                     //output::restof: {second: { name: 'jake', age: 23, place: 'yelahanka' },third: { name: 'carter', age: 25, place: 'vidyanagar' }}
// let [{first:{name}}]=array;
// console.log("name",name);




// var [a,b,...rest]=array;
// console.log(a);
// console.log(b);
// console.log(rest);
// var [a,b]=array;
// console.log(a,b);
// const [a, , b] = array;
// console.log(a,b);
// const [a,b,,,c=cDefault] = array;      //if the value of c is undefined then we can give default value by assigning default value like we need
// console.log(a);
// console.log(b);
// console.log(c)
// const [a, b,...rest] = array;
// console.log(a,b);
// console.log(rest.pop());                                           //pop removes the last item in an array
// console.log(rest.push("kiwi"));                                    //push adds new items at the end of array
// console.log(rest.shift());                                        //shift removes first item in an array
// console.log(rest);
// const [a, b, ...[c, d]] = array;
// let array=[1,2,3,4,5];                                             //shift() removes items at the start
// console.log(array.push("kiwi"));                                   //.push() adds items ta the end
// console.log(array);                                                //pop removes items at the end 
// console.log(array.copyWithin(2,5))                                   //copy within copies the files within array


// var array=[
    // {
        // first:{
            // name:"tony",
            // age:19,
            // place:"bangalore"
            // },
            // second:{
                // name:"jake",
                // age:23,
                // place:"yelahanka"
                // },
                // third:{
                    // name:"carter",
                    // age:25,
                    // state:{
                        // city:"bangalore",
                        // country:"INDIA"
                        // }
                        // }
                        // }
                        // ];
// var [{third:{state:{country}}}]=array
// console.log(country);
// function arrayDestructuring(){
    // let [{third:{state:{city}}}]=array;
    // return city;
    // }
    // var arrayDestruct=arrayDestructuring();
    // console.log(arrayDestruct);
var array=[ { 
    first:{
         name:"tony",
          age:19,
           place:"bangalore" 
        }, second:{
             name:"jake",
              age:23, 
              place:"yelahanka" },
               third:{
                 name:"carter",
                age:25, 
                state:{ 
                    city:"bangalore", 
                    country:"INDIA" 
                } 
            } 
        }];
var [{third:{state}}]=array;
console.log(state);
// const props = [
    // { id: 1, name: 'eric'}, 
    // { id: 2, name: 'Buzz'},
    // { id: 3, name: 'tony'}
    // ];
    // const [,,{ name }] = props;                                   //here i'm trying to get the value of name of third object in this array
    // console.log(name);                                            //output will be tony


