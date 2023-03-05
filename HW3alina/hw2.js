const toUpperFirstLetter = (letters) => {
    if (!Array.isArray(letters)) return;
     
    return letters.map((letter) => {
        const firstUpperLetter = letter[0].toUpperCase();
        const secondLowerPart = letter.slice(1).toLowerCase();
        return `${firstUpperLetter}${secondLowerPart}`;
        }
    )
}

console.log(toUpperFirstLetter(['FgHSj', 'fDFg']));