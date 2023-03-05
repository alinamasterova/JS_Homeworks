// 4.	Написать метод которые повторяет логику Object.fromEntries(). 
// EX: customFromEntries([[‘a’, 1], [‘b’, 2]]) // { a: 1, b:2 }

const myFromEntries = (list) => {
  
    return list.reduce((result, [key, value]) => {
        result[key] = value;
        
        return result;
    }, {});
};

console.log(myFromEntries([["a", 1], ["b", 2]]));

