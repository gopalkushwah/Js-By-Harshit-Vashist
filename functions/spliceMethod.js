// Splice method :
// start deleteCount insertValue

//it will change the origional array
// splice can we used for all works which can we done by shift unshift pop and push 

// The splice() method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place. To access part of an array without modifying it, see slice(). 
//it is use to insert or replace the element in present array

        //  0        1      2          3       4       5
let arr = ['item1','item2','item3','item4','item5','item6'];

// arr.splice(1,2);  //start from index 1 , delete 2 value , insert nothing
// console.log(arr);   //  OUTPUT : ['item1', 'item4', 'item5', 'item6']

// arr.splice(1,2,'gopal','kushwah');   ////start from index 1 , delete 2 value , insert 2 values => 'gopal','kushwah'
// console.log(arr);   //  OUTPUT : ['item1', 'gopal', 'kushwah', 'item4', 'item5', 'item6']


// how to check deleted items : 
let deletedItem = arr.splice(1,2,'gopal','kushwah');   
console.log(deletedItem);   //OUTPUT : ['item2', 'item3']
console.log(arr);   //OUTPUT : ['item1', 'gopal', 'kushwah', 'item4', 'item5', 'item6']



