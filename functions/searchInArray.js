// function searchValue(array,target){
//     for(let i = 0 ; i<array.length;i++){
//         if(array[i]===target){
//             return i;
//         }
//     }
//     return -1;
// }

// console.log(searchValue([2,6,4,8,9,10],10));




// ******************* function expression ****************************
let searchValue = function (array,target){
    for(let i = 0 ; i<array.length;i++){
        if(array[i]===target){
            return i;
        }
    }
    return -1;
}

console.log(searchValue([2,6,4,8,9,10],3));
// console.log(searchValue([2,6,4,8,9,10],4));





