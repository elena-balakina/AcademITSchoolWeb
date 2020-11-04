var array = [1, 3, 10, 8, 5, -4, 18, 24, 0, -7, 2, 22, 93]

console.log("Отсортированный по убыванию массив: " + sortByDescending(array));
console.log("Первые 5 элементов массива: " + array.slice(0, 6));
console.log("Последние 5 элементов массива: " + array.slice(array.length - 5));
console.log("Сумма четных элементов массива: " + getEvenNumbersSum(array));

var array1to100 = getArray(1, 100);
console.log(array1to100);
console.log("Массив квадратов четных чисел данного массива: " + getEvenNumbersSquaresArray(array1to100));

function sortByDescending(array) {
    return array.sort(function (e1, e2) {
        return e2 - e1;
    });
}

function getEvenNumbersSum(array) {
    return array.filter(function (e) {
        return e % 2 === 0;
    }).reduce(function (sum, current) {
        return sum + current;
    }, 0);
}

function getArray(from, to) {
    var array = [];

    for (var i = from; i <= to; i++) {
        array.push(i);
    }
    return array;
}

function getEvenNumbersSquaresArray(array) {
    return array.filter(function (e) {
        return e % 2 === 0;
    }).map(function (e) {
        return e * e;
    });
}