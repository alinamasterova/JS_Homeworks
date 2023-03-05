const showStr = (word) => {
    const firstCapitalLetter = word[0].toUpperCase();
    const isWordLengthEven = word.length % 2 === 0;

    if (isWordLengthEven) {
        const lastCapitalLetter = word[word.length - 1].toUpperCase();
        const restWord = word.slice(1, -1).toLowerCase();
        return `${firstCapitalLetter}${restWord}${lastCapitalLetter}`;
    }

    return `${firstCapitalLetter}${word.slice(1).toLowerCase()}`;


}

console.log(showStr('helloo'))