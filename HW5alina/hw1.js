// 1.	Complete the solution so that the function will break up camel casing, using a space between words.

// EX: 
// fn("camelCasing")  //  "camel Casing"
// fn("identifier")  //  "identifier"
// fn(‘helloMyDearFriend’) // ’hello My Dear Friend’

const camelCasing = (string) => {
    let result = "";

    for (const letter of string)  {

        const isBigLetter = letter === letter.toUpperCase();

        if (isBigLetter) {
            result += ` ${letter}`;
        } else {
            result += letter;
        }
    }

    return result;
}

console.log(camelCasing("helloWorld"));
