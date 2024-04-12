const mysql = require("mysql2/promise");

// CONEXIÓN
async function main(){
    try{
        let connection = await mysql.createConnection(
            { host: "localhost",
            user: "root",
            password: "My5qls3rv3r0723.",
            database: "colegio"
        });

//RETO 1 
//NOTA MEDIA
        // let sql = "SELECT AVG(mark) AS Media FROM marks"
        // let [result] = await connection.query(sql);
        // console.log("Datos mostrados");
        // console.log(result);

//NUMERO TOTAL
        // let sql = "SELECT COUNT(*) FROM students"
        // let [result] = await connection.query(sql);
        // console.log("Datos mostrados");
        // console.log(result);

//LISTAR CAMPOS 
        // let sql = "SELECT group_id, name FROM colegio.groups"
        // let [result] = await connection.query(sql);
        // console.log("Datos mostrados");
        // console.log(result);

// ELIMINAR NOTAS
        // let params = ["5", "2023-10-04"];
        // let sql = "DELETE FROM marks WHERE mark > ? AND date > ?"
        
        // let [result] = await connection.query(sql, params);
        // console.log("Datos eliminados");
        // console.log(result);

// ESTUDIANTES ESTE AÑO
//         let params = ["2023", "2024"];
//         let sql = "SELECT students_id, first_name, last_name FROM students" +
//        " WHERE año_ingreso BETWEEN ? AND ?"

//         let [result] = await connection.query(sql, params);
//         console.log("Datos mostrados");
//         console.log(result);  

//PROFESORES POR ASIGNATURA
        // let sql = "SELECT COUNT(*) AS num_estudiantes, title as asignatura, teachers.first_name, teachers.last_name "+
        // "FROM students INNER JOIN marks ON (marks.student_id = students.student_id) "+ 
        // "INNER JOIN subjects ON (subjects.subject_id = marks.subject_id) "+
        // "INNER JOIN subject_teacher ON (subject_teacher.subject_id = subjects.subject_id) "+
        // "INNER JOIN teachers ON (teachers.teacher_id = subject_teacher.teacher_id) "+
        // "GROUP BY title, teachers.first_name, teachers.last_name"
        // let [result] = await connection.query(sql);
        // console.log("Datos mostrados");
        // console.log(result);    

//RETO2        
//ID Y NOTA
        // let params = ["1", "20", "8", "2023-01-01", "2023-12-31"]
        // let sql = "SELECT student_id as estudiante, mark as nota FROM marks WHERE (student_id BETWEEN ? AND ?)" +
        // "OR (mark > ? AND date BETWEEN ? AND ?)"

        // let [result] = await connection.query(sql, params);
        // console.log("Datos mostrados");
        // console.log(result);   

//MEDIA POR ASIGNATURA
        // let params = ['2023-04-10', '2024-04-10']
        // let sql = "SELECT AVG(mark) AS nota_media, subject_id AS asignatura FROM marks WHERE date BETWEEN ? AND ? GROUP BY subject_id"
        
        // let [result] = await connection.query(sql, params);
        // console.log("Datos mostrados");
        // console.log(result); 

//MEDIA POR ALUMNO
        // let params = ['2023-04-10', '2024-04-10']
        // let sql = "SELECT AVG(mark) AS nota_media, student_id AS estudiante FROM marks WHERE date BETWEEN ? AND ? GROUP BY student_id"
        
        // let [result] = await connection.query(sql, params);
        // console.log("Datos mostrados");
        // console.log(result); 

//RETO3
//NOMBRE, APELLIDO, ASIGNATURA
        // let sql = "SELECT first_name AS nombre, last_name AS apellido, title as asignatura FROM students INNER JOIN marks ON (students.student_id = marks.student_id) INNER JOIN subjects ON (marks.subject_id = subjects.subject_id)"
        // let [result] = await connection.query(sql);
        // console.log("Datos mostrados");
        // console.log(result);  

// RETO4
//NOMBRE, APELLIDO, ASIGNATURA
        // let sql = "SELECT first_name AS nombre, last_name AS apellido, title as asignatura FROM teachers INNER JOIN subject_teacher ON (teachers.teacher_id = subject_teacher.teacher_id) INNER JOIN subjects ON (subject_teacher.subject_id = subjects.subject_id)"
        // let [result] = await connection.query(sql);
        // console.log("Datos mostrados");
        // console.log(result);
// RETO5
//Nº ALUMNOS POR ASIGNATURA, ASIGNATURA Y PROFESOR
// Obtén el número total de alumnos por asignatura, el nombre de la asignatura y el nombre y
// apellidos del profesor que la imparte.

        // let sql = "SELECT first_name AS nombre, last_name AS apellido, title as asignatura FROM teachers INNER JOIN subject_teacher ON (teachers.teacher_id = subject_teacher.teacher_id) INNER JOIN subjects ON (subject_teacher.subject_id = subjects.subject_id)"
        // let [result] = await connection.query(sql);
        // console.log("Datos mostrados");
        // console.log(result);

    }
    catch(err){
        console.log(err)
        await connection.end();
    }
}
main();