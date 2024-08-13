/**
 * Updates the grades of a list of students in a given city.
 * @param {{
*   id: Number,
*   firstName: String,
*   location: String
* }[]} students - The list of students.
* @param {String} city - The city of students.
* @param {{
*   studentId: Number,
*   grade: Number
* }[]} newGrades - The new grades to be given to a student.
* @returns {{
*   id: Number,
*   firstName: String,
*   location: String,
*   grade: Number | String
* }[]} - The list of students with updated grades.
* @author ugwoke levi
*/
export default function updateStudentGradeByCity(students, city, newGrades) {
   // Filter students by the specified city
   const cityFiltered = students.filter(student => student.location === city);

   // Map over the filtered students to update their grades
   return cityFiltered.map(student => {
       // Find the grade for the current student
       const gradeEntry = newGrades.find(entry => entry.studentId === student.id);

       // Return a new student object with the updated grade
       return {
           ...student, // Spread the existing student properties
           grade: gradeEntry ? gradeEntry.grade : 'N/A' // Set the grade or 'N/A'
       };
   });
}
