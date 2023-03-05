// 1.	Creates an array of elements split into groups the length of size. If array can't be split evenly, 
// the final chunk will be the remaining elements.

// Ex:
// chunk(['a', 'b', 'c', 'd'], 2);
// => [['a', 'b'], ['c', 'd']]

// chunk(['a', 'b', 'c', 'd'], 3);
// => [['a', 'b', 'c'], ['d']]

const chunk = (array, size) => {

const result = [];
let stack = [];

for (let i = 0; i < array.length; i++) {
    const currentItem = array[i]; 

    stack.push(currentItem);

    if (stack.length === size || i === array.length - 1) {
        result.push(stack);
        stack = [];
    };
};

return result;

};

console.log(chunk(['a', 'b', 'c', 'd'], 2));
console.log(chunk(['a', 'b', 'c', 'd'], 3));

