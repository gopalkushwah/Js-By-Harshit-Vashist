// console.log(console)    // it will print the all methods which can be used with the console

// OUTPUT : -
// Object [console] {
//     log: [Function: log],
//     warn: [Function: warn],
//     dir: [Function: dir],
//     time: [Function: time],
//     timeEnd: [Function: timeEnd],
//     timeLog: [Function: timeLog],
//     trace: [Function: trace],
//     assert: [Function: assert],
//     clear: [Function: clear],
//     count: [Function: count],
//     countReset: [Function: countReset],
//     group: [Function: group],
//     groupEnd: [Function: groupEnd],
//     table: [Function: table],
//     debug: [Function: debug],
//     info: [Function: info],
//     dirxml: [Function: dirxml],
//     error: [Function: error],
//     groupCollapsed: [Function: groupCollapsed],
//     Console: [Function: Console],
//     profile: [Function: profile],
//     profileEnd: [Function: profileEnd],
//     timeStamp: [Function: timeStamp],
//     context: [Function: context]
//   }

// -------------------------------------------------------------------------------------------------------
// assert :-
// assert()	Writes an error message to the console if a assertion is false
// it will check the provided conditions if conditions are true then ok , if false then it will show an assertion error
// console.assert(5>52);
// output : Assertion failed: console.assert

// console.assert(52>5);  //true ==> ok

// -------------------------------------------------------------------------------------------------------
// clear()	Clears the console
// console.clear();

// -------------------------------------------------------------------------------------------------------
// log()	Outputs a message to the console
// console.log("Hello gopal");

// -------------------------------------------------------------------------------------------------------
// table()	Displays tabular data as a table
// let obj = {a : 'gopal',b : 'mohan',c : 'rohan',d : 'sohan'};
// console.table(obj);

// output : 
// ┌─────────┬─────────┐
// │ (index) │ Values  │
// ├─────────┼─────────┤
// │    a    │ 'gopal' │
// │    b    │ 'mohan' │
// │    c    │ 'rohan' │
// │    d    │ 'sohan' │
// └─────────┴─────────┘


// let a = [20,30,40,50,60,70];
// console.table(a);

// output : 
// ┌─────────┬────────┐
// │ (index) │ Values │
// ├─────────┼────────┤
// │    0    │   20   │
// │    1    │   30   │
// │    2    │   40   │
// │    3    │   50   │
// │    4    │   60   │
// │    5    │   70   │
// └─────────┴────────┘

// console.table(["Audi", "Volvo", "Ford"]);

// output : 
// ┌─────────┬─────────┐
// │ (index) │ Values  │
// ├─────────┼─────────┤
// │    0    │ 'Audi'  │
// │    1    │ 'Volvo' │
// │    2    │ 'Ford'  │
// └─────────┴─────────┘
// -------------------------------------------------------------------------------------------------------

// warn()	Outputs a warning message to the console

// console.warn("Please say not to drugs");
// output:
// C:\Users\gopal\OneDrive\Desktop\js by harsit\Js by cwh\console_warn.png

// -------------------------------------------------------------------------------------------------------
// let n = [1,2,3,4,5,6,7,8,9];
// let obj = {
//     a : 10,
//     b : 20,
//     c : 30
// }
// console.dir(n);
// console.dir(obj.b);
// -------------------------------------------------------------------------------------------------------
// time()	Starts a timer (can track how long an operation takes)
// timeEnd()	Stops a timer that was previously started by console.time()
// let  arr = [10,20,30,4,50];
// console.time(arr);
// for(let n of arr){
//     console.log(n);
// }
// console.timeEnd(arr);
 
// console.time(arr);
// for(i = 0;i<arr.length;i++){
//     console.log(arr[i]);
// }
// console.timeEnd(arr);


// -------------------------------------------------------------------------------------------------------






// -------------------------------------------------------------------------------------------------------


