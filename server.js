//Importando el módulo 'express'
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

//Importando la conexion a BD
const connection = require("./configBD");

//Creando una nueva aplicación Express.
const app = express();
const path = require("path");

/**
 * app.use(cors()): Es un middleware de CORS (Cross-Origin Resource Sharing) en tu aplicación Express.
 * CORS es un mecanismo de seguridad implementado en los navegadores que restringe las solicitudes HTTP
 * que se pueden realizar desde un origen (dominio) a otro. Al utilizar app.use(cors()),
 * estás permitiendo que tu servidor responda a las solicitudes de otros dominios,
 * lo que es útil cuando estás construyendo una API o cuando tu frontend se encuentra
 * en un dominio diferente al backend.
 *
 * app.use(bodyParser.urlencoded({ extended: false })): habilita el middleware de body-parser para analizar los datos enviados
 * en el cuerpo de las solicitudes HTTP.
 * body-parser es un middleware de Express que permite acceder y procesar los datos enviados en formularios HTML.
 * bodyParser.urlencoded() se utiliza para analizar los datos codificados en URL enviados en las solicitudes POST.
 * El parámetro { extended: false } configura el analizador para que solo admita datos codificados en URL tradicionales,
 * no datos complejos como matrices o objetos anidados.
 */
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

/**
 * app.use Se utiliza para montar middlewares en la aplicación Express.
 * Los middlewares son funciones que se ejecutan en el flujo de procesamiento de una solicitud antes
 * de que se envíe una respuesta Middleware para servir archivos estáticos desde la carpeta "public"
 */
app.use("/public", express.static(path.join(__dirname, "public")));

/**
 * Establecer EJS como el Motor de plantillas
 * se utiliza para establecer la configuración de la aplicación Express. Puedes utilizar app.set
 * para configurar variables de entorno, ajustes específicos de la aplicación o valores personalizados.
 */
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

/**
 * Definiendo mi ruta Home
 */
app.get("/", (req, res) => {
  res.render("inicio", {
    rutaActual: "/",
  });
});

app.get("/lista-estudiante", (req, res) => {
  const sql = "SELECT * FROM estudiantes ORDER BY id_estudiante DESC";

  /** La función query() se usa para ejecutar la consulta SQL en la base de datos MySQL */
  connection.query(sql, (err, results, fields) => {
    if (err) throw err; //Mostrará este mensaje si hay error en la consulta SQL.

    /**Si no hay error en la consulta SQL */
    //console.log(results);
    console.log(`Total de Registros: ${results.length}`);
    console.table(results);

    /**Recorriendo todos los registros con el metodo forEach de JavaScript */
    /*results.forEach((result) => {
      console.log(result);
    });*/

    res.render("pages/estudiantes", {
      rutaActual: "/lista-estudiante",
      results: results,
    });
  });
});

/**
 * Otra forma de hacer, Separación de lógica
 */
// Función de consulta de estudiantes
const consultarEstudiantes = (callback) => {
  const sql = "SELECT * FROM estudiantes ORDER BY id_estudiante DESC";
  connection.query(sql, callback);
};

// Ruta para listar estudiantes
app.get("/lista-estudiantex", (req, res, next) => {
  consultarEstudiantes((err, results, fields) => {
    if (err) {
      next(err);
      return;
    }

    console.log(`Total de Registros: ${results.length}`);
    console.table(results);

    res.render("pages/estudiantes", {
      rutaActual: "/lista-estudiante",
      results: results,
    });
  });
});

/**
 * Levantando mi servidor con Express
 */
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
