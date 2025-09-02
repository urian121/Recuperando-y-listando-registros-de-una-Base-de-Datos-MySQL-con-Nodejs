# Obtener y mostrar datos de MySQL usando Node.js y Express

Aplicación web que demuestra cómo conectar Node.js con MySQL para listar registros de una base de datos usando Express y EJS.

![Vista previa del proyecto](https://raw.githubusercontent.com/urian121/imagenes-proyectos-github/master/portada-listar-registros-de-base-datos-mysql-con-node-urian-viera.png)

## 🚀 Tecnologías

- **Backend:** Node.js + Express
- **Base de datos:** MySQL
- **Motor de plantillas:** EJS
- **Frontend:** Bootstrap 5
- **Módulos:** ES6 (import/export)

## 📋 Requisitos

- Node.js 16+
- MySQL 5.7+

## ⚡ Instalación

### Proyecto nuevo:
```bash
npm init -y
npm install express ejs cors mysql2
```

### Proyecto existente:
```bash
npm install
npm run dev
```

## 🗄️ Base de datos

1. Importa el archivo `bd/nodejs.sql` en tu MySQL
2. Configura la conexión en `configBD/configBD.js`:

```javascript
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "CrudNodejs", // Cambia por tu BD
  port: 3306,
});
```

## 🏃‍♂️ Ejecutar

```bash
npm run dev
# o
node --watch app.js
```

Visita: `http://localhost:3500`

## 📁 Estructura

```
├── app.js              # Servidor principal
├── configBD/           # Configuración MySQL
├── bd/                 # Script SQL
├── views/              # Plantillas EJS
├── public/             # Archivos estáticos
└── package.json        # Dependencias
```
