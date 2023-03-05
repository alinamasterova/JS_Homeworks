// С помощью функции reduce, вывести url у которого самая большая площадь
const boxarts = [
    {
        width: 200,
        height: 200,
        url: 'http://cdn-0.nflxing.com/images/2891/Fracture200.jpg'
    },
    {
        width: 425,
        height: 150,
        url: 'http://cdn-0.nflxing.com/images/2891/Fracture425.jpg'
    },
    {
        width: 150,
        height: 200,
        url: 'http://cdn-0.nflxing.com/images/2891/Fracture150.jpg'
    },
    {
        width: 300,
        height: 200,
        url: 'http://cdn-0.nflxing.com/images/2891/Fracture300.jpg'
    },
];

const getBiggestSquare = (boxarts) => {
    const { url } = boxarts.reduce((currentBoxart, nextBoxart, index) => {
        const { width, height } = currentBoxart;
        const { width: nextBoxartWidth, height: nextBoxartHeith } = nextBoxart;

        const currentSquare = width * height;
        const nextSquare = nextBoxartWidth * nextBoxartHeith;

        return currentSquare > nextSquare ? currentBoxart : nextBoxart;
    });

    return url;
}

console.log(getBiggestSquare(boxarts));