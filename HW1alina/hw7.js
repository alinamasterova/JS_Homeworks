const difLetter = (let) => {
    if (let === let.toUpperCase()) {
        return 'Оууу май, большая буква!';
    };

    return 'Нет уж, маленькие буквы - скучно';
};

console.log(difLetter('a'));