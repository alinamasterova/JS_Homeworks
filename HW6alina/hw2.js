// 2.	Для задания вам понадобиться вот этот сайт https://jsonplaceholder.typicode.com/.

// Вам потребуется сделать 2 запроса на данные эндпоинты  

// Результатом работы вашей функции должен быть массив пользователей. У каждого объекта пользователя должно появиться поле myPosts: 
/// [<в этом массиве будут посты, которые сделал этот пользователь>]. Поле массив, так как у одного пользователя может быть более 1-го поста.

const BASE_URL = 'https://jsonplaceholder.typicode.com/';

const addPostsToUsers = async () => {
    try {
        const [users, posts] = await Promise.all([
            fetch(`${BASE_URL}users`).then((response) => response.json()),
            fetch(`${BASE_URL}posts`).then((response) => response.json()),
        ]);

        const UserIdPostsMap = new Map();

        posts.forEach((post) => {
            if (!UserIdPostsMap.has(post.userId)) {
                UserIdPostsMap.set(post.userId, []);
            }

            UserIdPostsMap.get(post.userId).push(post);
        })

        console.log(UserIdPostsMap);

        return users.map((user) => ({
            ...user,
            MyPosts: UserIdPostsMap.get(user.id),
        }));
    } catch (error) {
        console.log(error);
    } finally {
        console.log("Пользователи и их посты");
    };
};

(async () => {
    const data = await addPostsToUsers();
    console.log(data);
})(); 



