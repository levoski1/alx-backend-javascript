/**
 * Retrieves ids from a list of students.
 * @param {{
*   id: Number,
*   firstName: String,
*   location: String
* }[]} students - The list of students.
* @author ugwoke levi <https://github.com/levoski>
* @returns
*/

export default function getListStudentIds(listofStudent){
    if (!(Array.isArray(listofStudent))){
        return [];
    }
    return listofStudent.map((student) => student.id);
};
