const obj1 = {
    a: 1,
    b: 'Hello',
    c: null,
    z: undefined,
}

const obj2 = {
    name: 'alex',
    age: 10, 
    friends: [], 
    address: null,
}

const omitNullableFields = (obj) => {
    const entries = Object.entries(obj);

    const filterEntries = entries.filter(
        ([_, value]) => value !== null && typeof value !== 'undefined'
        );

        return Object.fromEntries(filterEntries);
}

console.log(omitNullableFields(obj2));