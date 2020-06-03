/* Задача 1 */

console.log('Задача 1');

let num;

console.log('\n Числа от 1 до 50');

for  (num = 1; num <= 50; num++) {
    console.log(num);
}

console.log('\n Числа от 35 до 8');

for  (num = 35; num > 7; num--) {
    console.log(num);
}

/* Задача 2 */

console.log('Задача 2');

num = 89;

while (num >= 11) {
    document.write(num + '<br>');
    num--;
}

/* Задача 3 */

console.log('Задача 3');

let sum = 0;
num = 0;

while (num <= 100) {
    sum += num;
    num++;
}

console.log(sum);

/* Задача 4 */

console.log('Задача 4');
sum = 0;

for(num = 1; num <= 5; num++){
    
    sum += num;

    console.log('Сумма числа' + num + ' = ' + sum);
}

/* Задача 5 */

console.log('Задача 5');
console.log('\n do ... while');

num = 8;
do {
    console.log(num);
    num += 2;
} while(num <= 56)

console.log('\n for');

for (num = 8; num <= 56; num++) {

    if (!num%2) {
        continue;
    }

    console.log(num);
}

/* Задача 6 */

console.log('Задача 6');

for(let i = 2; i <= 10; i++) {

    console.log(`\n\n------${i}--------\n`);
    for(let k = 1; k <= 10; k++) {
        console.log( `${i} * ${k} = ${i * k}`);
    }
}

/* Задача 7 */

console.log('Задача 7');

let iteration = 0;

num = 1000;

while (num > 50) {
    num /= 2;
    iteration ++;
} 

console.log(num + ' ' + iteration);

/* Задача 8 */

console.log('Задача 8');

sum = 0;
iteration = 0;

do {
    num = +prompt('Введите число');

    if(isNaN(num)) {
        alert('Введите пожалуйста число');
        continue;
    }

    if(num === 0) {
        break;
    }

    sum += num;
    iteration++;
} while(true);

console.log('Сумма введенных числе ' + sum);

if(iteration) {
    console.log('Среднее арифметическое ' + sum / iteration);
}

/* Задача 9 */

console.log('Задача 9 \n«4 98 4 6 1 32 4 65 4 3 5 7 89 7 10 1 36 8 57»');

let string = '4 98 4 6 1 32 4 65 4 3 5 7 89 7 10 1 36 8 57',
    max = string[0];
    min = string[0];
num = '';

for(let i = 0; i <= string.length; i++) {

    if(string[i] === ' ') {
        max = (+num > max) ? +num : max;
        min = (+num < min) ? +num : min;
        num = '';
        continue;
    }

    num += string[i];
}

console.log(`Max - ${max};  Min - ${min}`);

/* Задача 9 */

console.log('Задача 10');

let digit,
    countDigit = 0,
    n = 1,
    reverseN = '';

sum = 0;

console.log('число = ' + n);
console.log('число состоит из цифр: ');

while (n > 0) {
    digit = n % 10;
    reverseN += digit;
    sum += digit;
    n = Math.floor(n / 10);
    countDigit++;
    console.log(digit);
}


console.log('цифр в числе = ' + countDigit);

console.log('сумма = ' + sum);

console.log('обратный порядок = ' + reverseN);
