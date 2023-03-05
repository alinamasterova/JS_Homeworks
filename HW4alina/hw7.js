Array.prototype.myMap = function(callback) {
const result = [];

for (let i = 0; i < this.length; i++) {
const currentItem = this[i];

const newItem = callback(currentItem, i, this);

result.push(newItem);
}

return result;

}

const x = [1, 2, 3]

console.log(x.myMap((item) => item * 2));