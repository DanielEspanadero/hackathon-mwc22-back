# 🧑🏻‍💻 HACKATHON OF THE MOBILE WORLD CONGRESS 2022 - BARCELONA 🧑🏻‍💻

_Project carried out to participate in the online phase of the Mobile Word Congress 2022 hackathon held in Barcelona, whose dates to carry out the project are from February 7 to 13._

## Translations 💬
_This README file is also available in other languages:_
- [Spanish](https://github.com/DanielEspanadero/hackathon-mwc22-back/blob/develop/docs/README-es.md)
- [Catalan](https://github.com/DanielEspanadero/hackathon-mwc22-back/blob/develop/docs/README-cat.md)

## Starting 🚀
_These instructions will allow you to get a working copy of the project on your local machine for development and testing purposes._

### Pre-requisites 📋
_For the project to work correctly, it is recommended to have a series of programs installed and configured properly:_
- [Visual Studio Code](https://code.visualstudio.com/download)
- [Node.js and npm](https://nodejs.org/es/)
- [MongoDB](https://docs.mongodb.com/manual/installation/)
- [MongoDB Compass](https://www.mongodb.com/products/compass)

_Once you have all this installed, you can make a clone of this repository:_
```
git clone https://github.com/DanielEspanadero/hackathon-mwc22-back.git
```

### Installation 🔧
_Remember to execute the following command in the terminal to install the dependencies and that everything works correctly:_
```
npm install
```

## Commands to run ⌨️

⚠️ BEFORE STARTING, REMEMBER TO HAVE THE MONGODB SERVER STARTED ⚠️

_To see a list of all options and commands use the command:_
```
npm start
```
```
npm start help
```
_Add the developers that are in the Json to the database (This command can be used only once):_
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
_Command to list all developers:_
```
npm start list
```
```
npm start l
```
_Add a new developer to the database:_
```
npm start add
```
```
npm start a
```

## Running the tests ⚙️
_To carry out the unit tests of the application I have used [jest](https://github.com/facebook/jest), if you want to execute them you have to insert the following command:_
```
npm run test
```

## Built with 🛠️
* [JavaScript](https://developer.mozilla.org/es/docs/Web/JavaScript) - Programming language used.
* [Node.js](https://nodejs.org/es/docs/) - Environment to run JavaScript on the server side.
* [NPM](https://www.npmjs.com/) - Dependency manager.
* [MongoDB](https://docs.mongodb.com/) - Database used for the project.
* [Mongoose](https://mongoosejs.com/docs/guide.html) - MongoDB ODM.
* [Jest](https://jestjs.io/docs/getting-started) - Library that allows us to write and execute tests.
* [Inquirer](https://github.com/SBoudrias/Inquirer.js) - Library for creating an interactive console.
* [Colorette](https://github.com/jorgebucaran/colorette) - Library to add colors to the console.
* [Commander](https://www.npmjs.com/package/commander) - Library to add custom commands in the console.
* [Dotenv](https://www.npmjs.com/package/dotenv) - Library to create environment variables.

## Versioned 📌
_I have used semantic versioning [SemVer](http://semver.org/) for this application. For all available versions, check out the [tags in this repository](https://github.com/DanielEspanadero/hackathon-mwc22-back/tags)._

## Author ✒️
* [Daniel Españadero Fernández](https://github.com/DanielEspanadero) - *Complete project*

## License 📄
_This project is licensed under the MIT License - see the file [LICENSE](https://github.com/DanielEspanadero/hackathon-mwc22-back/blob/develop/LICENSE) for details._


## Notes on the realization of the project 📝

_At first I had the idea that instead of commands, the application would be an interaction with the user (Using arrows and numbers), without realizing that this would not be a CLI but rather a GUI, so I changed the idea of how it was going to be done in order to manage it through commands. Another thing that I ruled out that I also had in mind at the beginning is to use an express server, although for what the exercise asks for it is not necessary. Even so, the structure of the project is prepared so that creating a server in express and later making a connection with the front end is a matter of little time._