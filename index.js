const greetTheStudent = studentName => `Hello there ${studentName}`;

const fullName = (firstName, middleName, lastName) => `${lastName}, ${middleName}, ${firstName}`;

const titleName = fullName('Mary', 'R', 'Jane');
console.log(titleName);