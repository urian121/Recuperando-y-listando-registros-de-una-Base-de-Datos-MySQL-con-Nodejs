## Listando registros de una Base de Datos MySQL con Node.js 😲

###### Este proyecto trata de como poder conectarme a Mysql y recuperar los registros de una tabla en dicho gestor de base de datos, para esto requerimos usar express como servidor y ejs como motor de plantilla para express, obvion MySQL como gestor de BD.

#### Paso para inicial el proyecto en NodeJS

`npm init -y`
`npm install express --save`
`npm i ejs`
`npm i cors`
`npm install --save mysql2`
`https://www.npmjs.com/package/mysql2`

## Para correr proyecto existente;

    npm i
    npm run dev
    node --watch server.js

###### Nota: El proyecto ya cuenta con una Tabla la cual solo debe importar en cualquier BD y solo cambiar la configuracion de conexión a la misma.

![](https://raw.githubusercontent.com/urian121/imagenes-proyectos-github/master/portada-listar-registros-de-base-datos-mysql-con-node-urian-viera.png)


#### Notas


    La propiedad "type": "module", en el archivo package.json indica que estamos usando el sistema de modulos ECMAScript(ESM).
    Con el fin de las palabras claves 'import' y 'export' para importar y exportar modulos respectivamente.
    Cuando usamos (ESM) algunas caracteriscticas de nodejs como require() y module.exports no estan disponibles, en su lugar estan import y export.