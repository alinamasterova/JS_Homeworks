

const findGlovesPairs = (gloves) => {
    const GlovesAmountMap = new Map();

    gloves.forEach((glove) => {
        if (!GlovesAmountMap.has(glove)) {
            GlovesAmountMap.set(glove, 1)
        } else {
            GlovesAmountMap.set(glove, GlovesAmountMap.get(glove) + 1);
        };
    });

    return Array.from(GlovesAmountMap).reduce((result, [gloveColor, glovesAmount], i) => {  

        if (glovesAmount > 1) {
            const pairsAmount = Math.floor(glovesAmount / 2);  
            result += pairsAmount;
        };

        return result;

    }, 0);
    }

    
console.log(findGlovesPairs(["red", "green", "green", "red", "blue", "blue"]));