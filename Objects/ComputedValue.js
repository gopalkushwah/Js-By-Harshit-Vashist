const key1 = 'iskey1';
const key2 = 'iskey2';

const val1 = 'value1';
const val2 = 'value2';
// ----------------------------------------------------------------
// normal ways of adding keys and values
// const obj = {

// }


// obj[key1] = val1;
// obj[key2] = val2;

// for(let key of Object.keys(obj)){
    //     console.log(key ," : ",obj[key]);
    // }
    
    
// ----------------------------------------------------------------
// adding computed value in object 
const obj = {  
    [key1] : val1,
    [key2] : val2
}



for(let key of Object.keys(obj)){
    console.log(key ," : ",obj[key]);
}





