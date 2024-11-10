//1
const array = [2, 3, 1, 4, 6, 10, 33, 42, 55, 11, 12, 843]
const evenNum = []
const oddNum = []

for (let i of array) {
    if(i % 2 === 0) {
        evenNum.push(i)
    }else {
        oddNum.push(i)
    }
}

console.log('Четные числа: ', evenNum);
console.log('Нечетные числа: ', oddNum);


//==========================================================================================================


//2
const grade = [5, 4, 5, 3, 2, 1, 3]
const gradeUSA = []


for (let i in grade) {
     
    switch(grade[i]) {
        case 5:
            gradeUSA[i] = 'A'
            break;
            
        case 4:
            gradeUSA[i] = 'B'
            break;
            
        case 3:
            gradeUSA[i] = 'C'
            break;

        case 2:
            gradeUSA[i] = 'D'
            break;

        case 1:
            gradeUSA[i] = 'E'
            break;
    }
}

console.log('Оценки:',gradeUSA);