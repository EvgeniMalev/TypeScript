let numbers: number[] = [44, 32, 43, 9, 51];

let doubledNumbers: number[] = numbers.map(num => num * 2);
console.log(doubledNumbers); 

let evenNumbers: number[] = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers); 

let sum: number = numbers.reduce((acc, curr) => acc + curr, 0);
console.log(sum);
