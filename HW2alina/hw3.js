const numbersFn = (numbers) => {
    if (!Array.isArray(numbers)) return;

    return numbers.map((number, index) => `Value: ${number}; Index: ${index}; Squared: ${number**2}`
    );
};

console.log(numbersFn([1, 2, 3]));