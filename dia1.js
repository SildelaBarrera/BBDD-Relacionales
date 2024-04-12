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
        

//INSERT 
        // let sql = "INSERT INTO colegio.teachers (first_name, last_name)" +
        //         "VALUES ('Paula', 'Durcal'), ('Severiano', 'Lozano'), ('Julia', 'Jimenez'), ('Ana', 'Masa'),"
        //         + "('Lorena', 'del Rio'), ('Jose Luis', 'Quitana'), ('Carmen', 'Tirado'), ('Patricia', 'Lopez')";
        // let [result] = await connection.query(sql);
        // console.log("Datos guardados");
        // console.log(result);

        // sql = "INSERT INTO colegio.students (first_name, last_name)"+
        //       "VALUES ('Angel','Garrido'),('Gema','Manzanero'),('Jose', 'Cebrian'), ('Nerea','Ros'), ('Jairo', 'Suarez'), ('Juliana', 'Gomariz'), ('Laura', 'Ceballos'),('Andrea', 'Requena'),('Jesus','Tapiador')";
        // [result] = await connection.query(sql);
        // console.log("Datos guardados");
        // console.log(result);      

        // sql = "INSERT INTO colegio.subjects (title)" +
        //         "VALUES ('Geografía'),('Arte'),('Química'),('Biología'),('Informática'),('Educación Física'),('Música'),('Inglés'),('Francés')";
        // [result] = await connection.query(sql);
        // console.log("Datos guardados");
        // console.log(result);  

        // sql = "INSERT INTO colegio.groups (name)"+
        //         "VALUES ('2B'),('2C'),('3A'),('3B'),('3C')";
        // [result] = await connection.query(sql);
        // console.log("Datos guardados");
        // console.log(result);

        // sql = "INSERT INTO colegio.marks (date, mark)"+
        //         "VALUES ('2015-01-28', '8'),('2009-03-20', '2'),('2020-04-24', '6'), ('2013-10-27', '4'), ('2019-01-25', '9'),('2012-11-19', '3'), ('2021-09-26', '8'),('2020-12-15', '5'),('2023-10-05', '7')";
        // [result] = await connection.query(sql);
        // console.log("Datos guardados");
        // console.log(result);

//AÑADIR COLUMNA
        // let sql= "ALTER TABLE dirección ADD municipio char(30)";
        // let [result] = await connection.query(sql);
        // console.log("Columna creada");
        // console.log(result);

//BORRAR COLUMNA
        // let sql= "ALTER TABLE dirección DROP calle";
        // let [result] = await connection.query(sql);
        // console.log("Columna borrada");
        // console.log(result);

//DROP TABLA
        // let sql = "DROP TABLE dirección";
        // let [result] = await connection.query(sql);
        // console.log("Tabla borrada");
        // console.log(result);
    
//UPDATE NOTAS
        // let sql = "UPDATE marks SET mark = 0";
        // let [result] = await connection.query(sql);
        // console.log("Datos actualizados");
        // console.log(result);

//SELECT
        // let sql = "SELECT first_name, last_name FROM students";
        // let [result] = await connection.query(sql);
        // console.log("Datos actualizados");
        // console.log(result);
//SELECT
        // let sql = "SELECT * FROM teachers";
        // let [result] = await connection.query(sql);
        // console.log("Datos actualizados");
        // console.log(result);

//DELETE - WHERE
        // let sql = "DELETE FROM marks WHERE date <= '2014-04-10'";
        // let [result] = await connection.query(sql);
        // console.log("Datos actualizados");
        // console.log(result);

//UPDATE
        // let sql = "UPDATE marks SET mark = 5 WHERE mark < 5";
        // let [result] = await connection.query(sql);
        // console.log("Datos actualizados");
        // console.log(result);

    }
    catch(err){
        console.log(err)
        await connection.end();
    }
}
main();

