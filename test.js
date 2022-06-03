// Список курсов
let courses = [
    { name: "Courses in England", prices: [0, 100] },
    { name: "Courses in Germany", prices: [500, null] },
    { name: "Courses in Italy", prices: [100, 200] },
    { name: "Courses in Russia", prices: [null, 400] },
    { name: "Courses in China", prices: [50, 250] },
    { name: "Courses in USA", prices: [200, null] },
    { name: "Courses in Kazakhstan", prices: [56, 324] },
    { name: "Courses in France", prices: [null, null] },
];

// Варианты цен (фильтры), которые ищет пользователь
let requiredRange1 = [null, 200];
let requiredRange2 = [100, 350];
let requiredRange3 = [200, null];

function filerPrice(range) {
    return courses.filter(course => {
        if(range[0] !== null && course.prices[1] !== null) {
            if(range[0] <= course.prices[1]) return true
        }
        else if(range[1] !== null && course.prices[0] !==null) {
            if(range[1] >= course.prices[0]) return true
        }
        else return true
    })
}


console.log("requiredRange1 = [0, 200] - вывод всех возможных выхождении", filerPrice(requiredRange1))
console.log("requiredRange2 = [100, 350] - вывод всех возможных выхождении", filerPrice(requiredRange2))
console.log("requiredRange3 = [200, null] - вывод всех возможных выхождении", filerPrice(requiredRange3))