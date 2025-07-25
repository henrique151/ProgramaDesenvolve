let student = {
  firstName: "João",
  lastName: "Silva",
  course: "Desenvolvimento Web",
  grades: [10, 9, 8],
  isActive: true,
};
// console.log(student["firstName"]);

// console.log("Antes:", student.isActive);
// student.isActive = false;
// console.log("Depois:", student.isActive);

//student.email = "joao@gmail.com.br";
// console.log(student);
// delete student.email

// console.log(student);

// Object.keys();
const keys = Object.keys(student);
console.log("Keys", keys);

// Object.values();
const values = Object.values(student);
console.log("Values", values);

// Object.entries();
const entries = Object.entries(student);
console.log("Entries", entries);
