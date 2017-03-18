// Falsy values
// - 0
// - ''
// - false
// - undefined
// - null


// const result = 0 || 42;
//
// console.log(result);



const person1 = {
  firstName: 'Steve',
  middleName: 'Paul',
  lastName: 'Jobs'
};

const person2 = {
  firstName: 'Steve',
  lastName: 'Ballmer'
};

const getFullName = function (p) {
  const isMiddleNameSet = !!p.middleName;
  const asString = 23 + '';
  const asNumber = '23' - 0;



  p.middleName = p.middleName || '';

  return p.firstName + ' ' + p.middleName + ' ' + p.lastName;
};

console.log(getFullName(person1));
console.log(getFullName(person2));
