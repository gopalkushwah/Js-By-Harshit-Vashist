// function as a argument/ parameter for a function is known as callback function 


function myfunc(callback){
    let name = "gopal";
    console.log("this is main func");
    callback(name);
}

function myfunc1(name){
    console.log("this is myfunc1");
    console.log("my name is : ",name);

}

myfunc(myfunc1);