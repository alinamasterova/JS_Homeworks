// 1.	Creates an array of elements split into groups the length of size. If array can't be split evenly, 
// the final chunk will be the remaining elements.

// Ex:
// chunk(['a', 'b', 'c', 'd'], 2);
// => [['a', 'b'], ['c', 'd']]

// chunk(['a', 'b', 'c', 'd'], 3);
// => [['a', 'b', 'c'], ['d']]

const chunk = (list, size) => {
    const copy = [ ...list ]
    const result = [];

    while (copy.length > 0) {
        const chunkedData = copy.splice(0, size);
        result.push(chunkedData);
    };

    return result;
};

console.log(chunk(['a', 'b', 'c', 'd'], 2));
console.log(chunk(['a', 'b', 'c', 'd'], 3));

