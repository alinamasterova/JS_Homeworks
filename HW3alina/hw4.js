const isPalindrome = (word) => {
    const chars = word.toLowerCase().split('');

    const reversedChars = chars.reverse();

    const reversedWord = reversedChars.join('');

    return word.toLowerCase() === reversedWord;
}

console.log(isPalindrome('PsoooP'));