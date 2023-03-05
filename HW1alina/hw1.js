const sayHello = (name) => {
    const specialName = 'mark';
    const isMark = name.toLowerCase() === specialName;
    const greeting = isMark ? 'Hi' : 'Hello';
    return `${greeting}, ${name}!`
};

console.log(sayHello("Mark"));