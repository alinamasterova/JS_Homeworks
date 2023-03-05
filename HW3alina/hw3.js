const users = [
    {
        id: 1,
        name: 'Alex',
    },

    {
        id: 2,
        name: 'Tamara',
    },

    {
        id: 3,
        name: 'Max',
    },
]

const updateUsers = (users, ids) => {
    return users.filter(({id}) => !ids.includes(id));
}

console.log(updateUsers(users, [2]));