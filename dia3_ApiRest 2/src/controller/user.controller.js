const {connection} = require("../database")

//MEDIA
const getUser = async (request, response) =>
{
    try{
        let params =[request.query.student_id]
        let sql = "SELECT AVG(mark) as media FROM marks WHERE student_id = ?";

        let [result] = await connection.query(sql, params);
        console.log(result);
        response.send(result);  
    }
    catch (err){
        console.log(err)
    }
}
//ASIGNATURAS APUNTADAS
const getUser2 = async (request, response) =>
{
    try{
        let sql;
        if(request.query.student_id != null){
            let params =[request.query.student_id]
            sql = "SELECT title FROM subjects JOIN marks ON (marks.subject_id = subjects.subject_id) "+ 
            "JOIN students ON (marks.student_id = students.student_id) "+
            "WHERE students.student_id = ?"

            let [result] = await connection.query(sql, params);
            console.log(result);
            response.send(result); 
        } 
        else{
            sql = "SELECT first_name, last_name, title FROM students "+
            "JOIN marks ON (students.student_id = marks.student_id) "+
            "JOIN subjects ON (marks.subject_id = subjects.subject_id)"

            let [result] = await connection.query(sql);
            console.log(result);
            response.send(result);  
        }
    }
    catch (err){
        console.log(err)
    }
}
//ASIGNATURAS IMPARTIDAS
const getUser3 = async (request, response) =>
{
    try{
        let sql;
        if(request.query.teacher_id != null){
            let params =[request.query.teacher_id]
            sql = "SELECT first_name, last_name, title FROM teachers "+
            "JOIN subject_teacher ON (subject_teacher.teacher_id = teachers.teacher_id) "+
            "JOIN subjects ON (subjects.subject_id = subject_teacher.subject_id) "+
            "WHERE teachers.teacher_id = ?"

            let [result] = await connection.query(sql, params);
            console.log(result);
            response.send(result); 
        } 
        else{
            sql = "SELECT first_name, last_name, title FROM teachers "+
            "JOIN subject_teacher ON (subject_teacher.teacher_id = teachers.teacher_id) "+
            "JOIN subjects ON (subjects.subject_id = subject_teacher.subject_id) "+
            "GROUP BY first_name, last_name, title"

            let [result] = await connection.query(sql);
            console.log(result);
            response.send(result);  
        }
    }
    catch (err){
        console.log(err)
    }
}


module.exports = {getUser, getUser2, getUser3};
