// task_1

let num = '';
for (let i = 20; i <= 30; i = i + 0.5) {
    num+= i + ' ';
}
console.log(num);

// task_2

const money  = 27;
for (let i= 10; i <= 100; i = i + 10) {
    console.log(money * i);
}

// task_3

const N = 27;
for (let i = 1; i <= 100; i++) {
    if (N >= i ** 2) {
        console.log(i);
    }
}

// task_4

const n = 27;
nextNumber:
for (let i = 2; i <= n; i++) {
    for (let j = 2; j < i; j++) {
        if (i % j == 0) continue nextNumber;
    }
    console.log(i);
}

// task_5

const number = prompt('Введите число');
if (number != null) {
    let x = 0;
    let number1 = 0;
    do {
        x++;
        number1 = Math.pow (3,x);
    }
    while (number1 < number);
    if (number1 == number)
        alert('Число 3 в степени ' + x);
    else
        alert('Число не является степенью числа 3');
}