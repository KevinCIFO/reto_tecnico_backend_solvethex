<p align="center">
    <img src="https://media.licdn.com/dms/image/C560BAQE5kuDynLMSSw/company-logo_200_200/0/1680191024110?e=1692835200&v=beta&t=oFmtkAccfB57QKbbuFhMrLuYYNoZzh5S8FfpT5OBF5E" width="150">
</p>
<p align="center">
    <img align="left" src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/2560px-Node.js_logo.svg.png" width="100">
    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/2048px-Typescript_logo_2020.svg.png" width="50">
    <img align="right" src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/SQLite370.svg/1200px-SQLite370.svg.png" width="130">
</p>

# Reto técnico - Backend

En este reto se implementó diferentes endpoints utilizando NodeJS y Express para manejar las operaciones CRUD (crear, leer, actualizar y eliminar) de usuarios en una base de datos SQLite, lo cual da por resultado la creación de una API REST.

### _Tabla de contenidos:_
* **[1] [Requisitos](#requisitos-)**
* **[2] [Instalación](#instalación-)**
* **[3] [Endpoints](#endpoints-)**
* **[4] [Pruebas](#pruebas-)**
* **[5] [Autor](#autor-%EF%B8%8F)**

## Requisitos 📋

Antes de comenzar, asegúrate de tener los siguientes requisitos instalados y configurados en tu entorno de desarrollo:

- [NodeJS](https://nodejs.org/) - El backend se ejecuta con NodeJS y npm como gestor de paquetes.

_Nota: Si quieres saber si ya lo tienes instalado ejecuta este comando:_
``` node -v ```

## Instalación 💻

1. Clona el repositorio en tu máquina local:

   ``` git clone https://github.com/KevinLarriega98/reto_tecnico_backend_solvethex.git ```
2. Navega hasta el directorio raíz del proyecto:

   ``` cd nombre-de-tu-carpeta ```
3. Instala las dependencias del proyecto:

   ``` npm install ```
4. Inicia el servidor
``` npm start ``` o ``` npm run dev ``` si estás en un entorno de desarrollo
5. El servidor estará disponible en la siguiente URL: `http://localhost:3000`.

## Endpoints 📐

- `GET /api/user/:id`: Obtiene un usuario por su ID.
- `GET /api/user`: Obtiene una lista de todos los usuarios.
- `POST /api/user/create`: Crea un nuevo usuario.
- `PUT /api/user/:id`: Actualiza un usuario por su ID.
- `DELETE /api/user/:id`: Elimina un usuario por su ID.

## Pruebas 💡

- Para ejecutar las pruebas automatizadas, utiliza el siguiente comando:
``` npm test ```

## Autor ✒️

- **Nombre:** Kevin Larriega Palomino  
- **Correo:** kevinlarriega@gmail.com 
- **GitHub:** https://github.com/KevinLarriega98