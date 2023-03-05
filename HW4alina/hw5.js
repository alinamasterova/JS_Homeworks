//	Функция принимает массив чисел, а возвращает чсло которое встречается лишь 1 раз. 

// fn([1,2,2,3,4,3,4]) // 1
// fn([1,1,2,3,3,4,4]) // 2

const nums = [1,1,1,1,2,2,2,8,8,8,7,4,4,4,4] 

const findUnique = (nums) => {
    return nums.find(
        (number) => nums.indexOf(number) === nums.lastIndexOf(number)
        )
};

console.log(findUnique(nums));
