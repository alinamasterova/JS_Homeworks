// 3.	Написать метод которые повторяет логику Object.entries(). 
// EX: customEntries({a: 1, b:2}) // [[‘a’, 1], [‘b’, 2]]


const myObjectEntries = (obj) => {

    const result = [];

    for (const key in obj) {
        const chunk = [key, obj[key]];
        result.push(chunk);
    }
    return result;
}

console.log(myObjectEntries({a: 1, b: 2}));

