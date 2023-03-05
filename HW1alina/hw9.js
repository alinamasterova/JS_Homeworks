const someStr = (str, number) => {
    if (str.length > number) {
        return 'String is too long!'
    };
    return str;
}

console.log(someStr('Hello', 2));