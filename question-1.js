function findStudentById(students, id) {
  for (let i = 0; i < students.length; i++) {
    if (students[i].id === id) {
      return students[i];
    }
  }
  return null;
}

// Test case
const students = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 3, name: "Charlie" },
];

console.log(findStudentById(students, 2)); // Output: { id: 2, name: 'Bob' }
console.log(findStudentById(students, 4)); // Output: null

/**- 
 * You are given an array of student objects, where each object contains an `id` and a `name`.
 * Write a function `findStudentById(students, id)` that takes this array and a student ID and returns the student object with the matching ID **using the linear search algorithm**.
- If no student with the given ID is found, return `null`. 
*/
