// Destructuring an object

var destruct = {                              // if we print variable "a" you get full object 
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
        // var {company:{brand:{height}}}=destruct;
         //here i am trying to destructure height and return height:::: output: display object of height
         // return height; 
         // }
         // var dest= heightDestruct(); 
         //storing the function in variable 
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
    

function brandDestruct(params){ 
    console.log(params); 
var {company:{[params]:{height:{dimension:{third}}}}}=destruct;  //we can perform object destructure even after params is used
    return third
    }
var brandObj=brandDestruct("brand");
console.log(brandObj);