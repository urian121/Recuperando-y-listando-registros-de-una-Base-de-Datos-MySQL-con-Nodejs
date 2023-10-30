import mysql from "mysql2";

const connection = mysql.createConnection({
  host: "localhost", // MYSQL HOST NAME
  user: "root", // MYSQL USERNAME
  password: "", // MYSQL PASSWORD
  database: "CrudNodejs", // MYSQL DB NAME
  port: 3306,
});

connection.connect((err) => {
  if (!err) console.log("Database connected successfully");
  else
    console.log("Fallo la conexion a BD" + JSON.stringify(err, undefined, 2));
});

export default connection;
