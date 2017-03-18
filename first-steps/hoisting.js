// const > let > var

const x = 23;

foo = function () {
  console.log(x); // 2: undefined
  const x = 42; // Deklaration + Definition
  console.log(x); // 3: 42

  console.log(i);
  for (let i = 0; i < 10; i++) {
    console.log(i);
  }
  console.log(i);
};

console.log(x); // 1: 23
foo();
console.log(x); // 4: 23
