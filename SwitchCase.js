let day = +prompt("Enter any day between 1 to 7");
// if no break keyword is used this may couse fall throw problem
// switch(day){
//     case 1:
//         console.log("Monday");
//     case 2:
//         console.log("Tuesday");
//     case 3:
//         console.log("Wednesday");
//     case 4:
//         console.log("Thursday");
//     case 5:
//         console.log("Friday");
//     case 6:
//         console.log("Saturday");
//     case 7:
//         console.log("Sunday");
        
// }

switch(day){
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;

    case 3:
        console.log("Wednesday");
        break;

    case 4:
        console.log("Thursday");
        break;

    case 5:
        console.log("Friday");
        break;

    case 6:
        console.log("Saturday");
        break;

    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Only 7 days are in a week");
}
