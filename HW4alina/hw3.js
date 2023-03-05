// 	Функция принимает массив чисел. Функция должна вернуть число, которое встречается больше всего раз. 

// fn([1,1,2,3]) // 1
// fn([1,2,3,4,2]) // 2

const x = [1, 1, 1, 2, 2, 3, 3, 3, 4, 4, 4, 4, 4, 4, 5] 

const findMostFrequent = (numbers) => {
    const meetingsCountMap = numbers.reduce((countMap, number) => {
        if (!countMap.hasOwnProperty(number)) {
            countMap[number] = 1;
        } else {
            countMap[number] += 1;
        }

        return countMap;
    }, {});

    const entries = Object.entries(meetingsCountMap);

    const [key] = entries.reduce((result, currentSubArray, index) => {
        return result[1] > currentSubArray[1] ? result : currentSubArray;
    });

    return Number(key)
}

console.log(findMostFrequent(x));
