const userList = ['Alex', 'alex', 'Max', 'Vika', 'Petr'];

const filterUsers = (users, blackListLetters) => {

    if (!Array.isArray(users) || !Array.isArray(blackListLetters)) return;

    const lowerBlackListLetters = blackListLetters.map(letter => 
        letter.toLowerCase()
    ); 

    return users.filter((user) => {
        const firstLetter = user[0].toLowerCase();
        return !lowerBlackListLetters.includes(firstLetter);
    });
};

console.log(filterUsers(userList, ['P', 'v']));

