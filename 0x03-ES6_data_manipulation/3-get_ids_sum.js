/**
 * Retrieves the sum of ids of a list of students.
 * @param {{
*   id: Number,
*   firstName: String,
*   location: String
* }[]} students - The list of students.
* @author ugwoke levi
* @returns {Number}
*/

export default function getStudentIdsSum(student){
    if (!( student instanceof Array)){
        return 0;
    }
    return student.reduce((accumulator, student) => accumulator + student.id, 0)
}