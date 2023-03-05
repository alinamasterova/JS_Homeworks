const users = [
  {
    id: 1,
    first_name: 'Jeanette',
    last_name: 'Penddreth',
    email: 'jpenddreth0@census.gov',
    gender: 'Female',
    ip_address: '26.58.193.2',
  },
  {
    id: 2,
    first_name: 'Petr',
    last_name: 'Jackson',
    email: 'gfrediani1@senate.gov',
    gender: 'Male',
    ip_address: '229.179.4.212',
  },
];

const splitbyGender = (users) => {

  const WOMEN = "Female";

  return users.reduce(
    (result, { first_name, last_name, ... otherInfo }) => {
    const isWomen = otherInfo.gender === WOMEN; 
    const placeToPush = isWomen ? "women" : "men";

    const userToPush = {
      fullName: `${first_name} ${last_name}`,
      ... otherInfo,
    };

    result[placeToPush].push(userToPush);

    return result;
  }, 
  
  { men: [], women: []}
  );
};

console.log(splitbyGender(users));

