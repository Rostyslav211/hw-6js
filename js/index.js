// Завдання 1

let i = 0;

while ( i < 10 ) {
    console.log(i);
    i += 1;
}

// Завдання 2

const con = 10;

for (let i = 0; i < con; i += 1) {
  if (i % 2 !== 0) {
    continue;
  }

  console.log(i); 
}

// Завдання 3



for (let i = 1; i <= 10; i += 1) {
    let total = i * 7
    
    
    console.log(total);
  }

//  Завдання 4

let num = 0;
// const num2 = 5;

while ( num <= 5 ) {
    console.log(num);
    num += 1
}

// Завдання 5

for (let i = 0; i <= 10; i += 1) {
    console.log(i);
  
    if (i === 7) {
      console.log("Знайшли число 7, перериваємо виконання циклу");
      break;
    }
    console.log(`Лог після циклу ${i}`);
  }
  
  

// Завдвання 6

const n = 20;

for (let i = 1; i < 20; i += 1) {
    if (i >= n) {
      break;
    }
  
    console.log(i); 
  }

//   Завдання 7

const number = 20;

for (let i = 1; i < number; i += 1) {
  if (i % 3 === 0) {
    continue;
  }

  console.log(i); 
}