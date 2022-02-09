# 🧑🏻‍💻 HACKATHON DEL MOBILE WORLD CONGRESS 2022 - BARCELONA 🧑🏻‍💻

_Proyecto realizado para participar en la fase online del hackathon Mobile Word Congress 2022 celebrado en Barcelona, ​​cuyas fechas para realizar el proyecto son del 7 al 13 de febrero._

## Traducciones 💬
_Este archivo README también está disponible en otros idiomas:_
- [Catalán](https://github.com/DanielEspanadero/hackathon-mwc22-back/blob/develop/docs/README-cat.md)
- [Inglés](https://github.com/DanielEspanadero/hackathon-mwc22-back/blob/develop/README.md)

## Empezando 🚀
_Estas instrucciones le permitirán obtener una copia de trabajo del proyecto en su máquina local para fines de desarrollo y prueba._

### Requisitos previos 📋
_Para que el proyecto funcione correctamente, se recomienda tener una serie de programas instalados y configurados adecuadamente:_
- [Visual Studio Code] (https://code.visualstudio.com/download)
- [Node.js y npm](https://nodejs.org/es/)
- [MongoDB](https://docs.mongodb.com/manual/installation/)
- [MongoDB Compass](https://www.mongodb.com/products/compass)

_Una vez tengas todo esto instalado, puedes hacer un clon de este repositorio:_
```
git clone https://github.com/DanielEspanadero/hackathon-mwc22-back.git
```

### Instalación 🔧
_Recuerda ejecutar el siguiente comando en la terminal para instalar las dependencias y que todo funcione correctamente:_
```
npm install
```

## Comandos para ejecutar ⌨️

⚠️ ANTES DE EMPEZAR, RECUERDA TENER INICIADO EL SERVIDOR DE MONGODB ⚠️

_Para ver una lista de todas las opciones y comandos, use el comando:_
```
npm start
```
```
npm start help
```
_Agregue los developers que están en el Json a la base de datos (Este comando solo se puede usar una vez):_
```
npm start json
```
```
npm start j
```
_Comando para listar los dias en los que se celebra en Mobile Word Congress 2022_
```
npm start days
```
```
npm start d
```
_Comando para listar todos los desarrolladores:_
```
npm start list
```
```
npm start l
```
_Añadir un nuevo desarrollador a la base de datos:_
```
npm start save
```
```
npm start s
```

## Ejecutando las pruebas ⚙️
_Para realizar las pruebas unitarias de la aplicación he utilizado [jest](https://github.com/facebook/jest), si quieres ejecutarlas tienes que insertar el siguiente comando:_
```
npm run test
```

## Construido con 🛠️
* [JavaScript](https://developer.mozilla.org/es/docs/Web/JavaScript) - Lenguaje de programación utilizado.
* [Node.js](https://nodejs.org/es/docs/) - Entorno para ejecutar JavaScript del lado del servidor.
* [NPM](https://www.npmjs.com/) - Administrador de dependencias.
* [MongoDB](https://docs.mongodb.com/) - Base de datos utilizada para el proyecto.
* [Mangosta](https://mongoosejs.com/docs/guide.html) - MongoDB ODM.
* [Jest](https://jestjs.io/docs/getting-started) - Biblioteca que nos permite escribir y ejecutar pruebas.
* [Inquirer](https://github.com/SBoudrias/Inquirer.js) - Biblioteca para crear una consola interactiva.
* [Colorette](https://github.com/jorgebucaran/colorette) - Biblioteca para agregar colores a la consola.
* [Commander](https://www.npmjs.com/package/commander) - Biblioteca para agregar comandos personalizados en la consola.
* [Dotenv](https://www.npmjs.com/package/dotenv) - Biblioteca para crear variables de entorno.

## Versionado 📌
_He utilizado versiones semánticas [SemVer](http://semver.org/) para esta aplicación. Para todas las versiones disponibles, consulta las [etiquetas en este repositorio](https://github.com/DanielEspanadero/hackathon-mwc22-back/tags)._

## Autor ✒️
* [Daniel Españadero Fernández](https://github.com/DanielEspanadero) - *Proyecto completo*

## Licencia 📄
_Este proyecto está licenciado bajo la Licencia MIT - vea el archivo [LICENCIA](https://github.com/DanielEspanadero/hackathon-mwc22-back/blob/develop/LICENSE) para más detalles._


## Notas sobre la realización del proyecto 📝

_Al principio tenía la idea de que en lugar de comandos la aplicación sería una interacción con el usuario (Usando flechas y números) sin darme cuenta de que esto no sería una CLI sino una GUI, así que cambié la idea de cómo lo iba a hacer para gestionarlo a través de comandos. Otra cosa que descarté que también tenía en mente al principio es usar un servidor express, aunque para lo que pide el ejercicio no es necesario. Aun así, la estructura del proyecto está preparada para que crear un servidor en express y luego hacer una conexión con el front-end sea cuestión de poco tiempo._