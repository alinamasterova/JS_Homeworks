// 6.	Написать функция которая принимает строку, и допустимое количество символов. Если длина строки превышает допустимое 
// количество символов, функция должна обрезать строку а в конец  добавить многоточие fn(‘Hello’, 3) // ‘Hel…’

const cutString = (string, availableChars) => {
    if (string.length > availableChars) {
        return `${string.slice(0, availableChars)}...`;
     }

    return string;
};

console.log(cutString("AlinaNikitaLove", 10));