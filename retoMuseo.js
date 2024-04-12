const mysql = require("mysql2/promise");

// CONEXIÓN
async function main(){
    try{
        let connection = await mysql.createConnection(
            { host: "localhost",
            user: "root",
            password: "My5qls3rv3r0723.",
            database: "museo"
        });


//Obtener un listado de todos los objetos que el museo tiene en préstamo, su localización dentro
//de la exposición, la fecha de expiración de este, la información básica (nombre, apellidos y
//email) de la persona que los ha prestado.

        // let params = ['prestado de']
        // let sql = "SELECT nombre_pieza, nombre, apellido, email, tipo_estado FROM propietario "+
        // "INNER JOIN piezas ON (piezas.id_propietario = propietario.id_propietario) "+ 
        // "INNER JOIN estado ON (estado.id_estado = piezas.id_estado) WHERE tipo_estado = ? "
        // let [result] = await connection.query(sql, params);
        // console.log("Datos mostrados");
        // console.log(result);

//Obtener de forma ordenada de mayor a menor, el número total de objetos o piezas agrupados
//por su situación dentro de la organización, esto es, cuántos hay expuestos, cuántos en
//itinerancia y cuántos almacenados.

        // let sql = "SELECT COUNT(*) AS num_piezas, colección AS situación FROM piezas GROUP BY colección ORDER BY num_piezas ASC"
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