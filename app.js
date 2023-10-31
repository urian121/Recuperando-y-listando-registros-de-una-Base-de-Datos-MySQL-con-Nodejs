import express from "express";
import cors from "cors";
import connection from "./configBD/configBD.js";

// Creando una nueva aplicación Express.
const app = express();
app.use(cors());

app.use(express.json()); // Para analizar JSON en el cuerpo de las solicitudes
app.use(express.urlencoded({ extended: true })); // Para analizar datos de formulario en el cuerpo de las solicitudes

app.use("/public", express.static("public"));

/**
 * Establecer EJS como el Motor de plantillas
 */
app.set("view engine", "ejs");
app.set("views", "./views");

app.get("/", (req, res) => {
  res.render("inicio");
});

app.get("/lista-estudiante", (req, res) => {
  const sql = "SELECT * FROM estudiantes ORDER BY id_estudiante DESC";

  /** La función query() se usa para ejecutar la consulta SQL en la base de datos MySQL */
  connection.query(sql, (err, results, fields) => {
    if (err) throw err; //Mostrará este mensaje si hay error en la consulta SQL.

    console.log(`Total de Registros: ${results.length}`);
    console.table(results);

    /**Recorriendo todos los registros con el metodo forEach de JavaScript */
    /*
    results.forEach((result) => {
      console.log(result);
    });
    */

    res.render("pages/estudiantes", {
      results: results,
    });
  });
});

/**
 * Levantando mi servidor con Express
 */
const PORT = process.env.PORT || 3500;
app.listen(PORT, () => {
  console.log(`Aplicacion corriendo en http://127.0.0.1:${PORT}`);
});
