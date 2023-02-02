// Array.prototype.copyWithin() :-

// Syntax
// copyWithin(target)
// copyWithin(target, start)
// copyWithin(target, start,end)



const array1 = ['a', 'b', 'c', 'd', 'e'];
            //   0    1    2    3    4
// copy to index 0 the element at index 3

//copy the value of index 3 at index 0 and copy index value upto 4
console.log(array1.copyWithin(0, 3,4));
// expected output: Array ["d", "b", "c", "d", "e"]

// copy to index 1 all elements from index 3 to the end
console.log(array1.copyWithin(1, 3));
// expected output: Array ["d", "d", "e", "d", "e"]
