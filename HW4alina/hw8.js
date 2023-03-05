Array.prototype.myFilter = function(callback) {
    const  result = [];

    for (let i = 0; i < this.length; i++) {
        const currentItem = this[i];

        const isAcceptable = callback(currentItem, i, this);

        if (isAcceptable) {
            result.push(currentItem);
    }
}
return result;
};

console.log([1, 2, 3, 5, 6].myFilter((number) => number > 2));