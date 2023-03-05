const convertRomanianNumber = (romanianNumber) => {
    const romanianNumbersMap = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000,
    };

    let result = 0;

    for (let i = 0; i < romanianNumber.length; i++) {
        const currentSymbol = romanianNumber[i]; 
        const nextSymbol = romanianNumber[i + 1];  

        const currentValue = romanianNumbersMap[currentSymbol];  
        const nextValue = romanianNumbersMap[nextSymbol]; 

        if (currentValue < nextValue) { 
            result -= currentValue; 
        } else {
            result += currentValue; 
        }
    }

    return result;
}

console.log(convertRomanianNumber("MMVIII"));