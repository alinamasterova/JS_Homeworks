const filterStrings = (data) => {
    if (!Array.isArray(data)) return;

    return data.filter((item) => {
        const isString = typeof item === "string";

        return isString && item.length % 2 === 0;
    });
};

console.log(filterStrings(['gfgfgf', 4, 'Hi', 47, 'jhg']));