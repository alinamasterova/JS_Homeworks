const findMissingNumber = (numbers) => {
    for (let i = 0; i < numbers.length; i++) {
        const currentNumber = numbers[i];
        const nextNumber = numbers[i + 1];
        const numberAfterNextNumber = numbers[i + 2];

        const differenceNumber = (nextNumber - currentNumber);
        const nextDifferenceNumber = (numberAfterNextNumber - nextNumber);

        if (differenceNumber !== nextDifferenceNumber) {
            return currentNumber + nextDifferenceNumber;
        };
    };
};

console.log(findMissingNumber([1, 3, 7, 9]))