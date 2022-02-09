# 🧑🏻‍💻 HACKATHON DEL MOBILE WORLD CONGRESS 2022 - BARCELONA 🧑🏻‍💻

_Projecte realitzat per participar a la fase online del hackathon Mobile Word Congress 2022 celebrat a Barcelona, ​​les dates per realitzar el projecte són del 7 al 13 de febrer._

![Demo](https://github.com/DanielEspanadero/hackathon-mwc22-back/blob/develop/docs/mwc22back.png)

## Traduccions 💬
_Aquest fitxer README també està disponible en altres llengues:_
- [Castellà](https://github.com/DanielEspanadero/hackathon-mwc22-back/blob/develop/docs/README-es.md)
- [Anglès](https://github.com/DanielEspanadero/hackathon-mwc22-back/blob/develop/README.md)

## Començant 🚀
_Aquestes instruccions us permetran obtenir una còpia de treball del projecte a la vostra màquina local per a fins de desenvolupament i prova._

### Requisits previs 📋
_Perquè el projecte funcioni correctament, es recomana tenir una sèrie de programes instal·lats i configurats adequadament:_
- [Visual Studio Code] (https://code.visualstudio.com/download)
- [Node.js i npm](https://nodejs.org/es/)
- [MongoDB](https://docs.mongodb.com/manual/installation/)
- [MongoDB Compass](https://www.mongodb.com/products/compass)

_Un cop tingueu tot això instal·lat, podeu fer un clon d'aquest repositori:_
```
git clone https://github.com/DanielEspanadero/hackathon-mwc22-back.git
```

### Instal·lació 🔧
_Recorda executar la següent ordre a la terminal per instal·lar les dependències i que tot funcioni correctament:_
````
npm install
````

## Comandes per executar ⌨️

⚠️ ABANS DE COMENÇAR, RECORDA TENIR INICIAT EL SERVIDOR DE MONGODB ⚠️

_La primera ordre que has d'executar en el projecte és (Si no s'executa aquesta ordre, caldria substituir la paraula mwc per npm start a les ordres):_
````
npm link
````
_Per veure una llista de totes les opcions i ordres, useu l'ordre:_
````
mwc help
````
_Afegiu els developers que estan al Json a la base de dades (Aquesta ordre només es pot usar una vegada):_
````
mwc json
````
````
mwc j
````
_Comando per llistar els dies en què se celebra a Mobile Word Congress 2022_
````
mwc days
````
````
mwc d
````
_Comanda per llistar tots els desenvolupadors:_
````
mwc list
````
````
mwc l
````
_Afegir un nou desenvolupador a la base de dades:_
````
mwc add
````
````
mwc a
````

## Executant les proves ⚙️
_Per realitzar les proves unitàries de l'aplicació he utilitzat [jest](https://github.com/facebook/jest), si vols executar-les has d'inserir la següent ordre:_
````
npm run test
````

## Construït amb 🛠️
* [JavaScript](https://developer.mozilla.org/es/docs/Web/JavaScript) - Llenguatge de programació utilitzat.
* [Node.js](https://nodejs.org/es/docs/) - Entorn per executar JavaScript del costat del servidor.
* [NPM](https://www.npmjs.com/) - Administrador de dependències.
* [MongoDB](https://docs.mongodb.com/) - Base de dades utilitzada per al projecte.
* [Mangosta](https://mongoosejs.com/docs/guide.html) - MongoDB ODM.
* [Jest](https://jestjs.io/docs/getting-started) - Biblioteca que ens permet escriure i executar proves.
* [Inquirer](https://github.com/SBoudrias/Inquirer.js) - Biblioteca per crear una consola interactiva.
* [Colorette](https://github.com/jorgebucaran/colorette) - Biblioteca per afegir colors a la consola.
* [Commander](https://www.npmjs.com/package/commander) - Biblioteca per afegir ordres personalitzades a la consola.
* [Dotenv](https://www.npmjs.com/package/dotenv) - Biblioteca per crear variables d'entorn.

## Versionat 📌
_He utilitzat versions semàntiques [SemVer](http://semver.org/) per a aquesta aplicació. Per a totes les versions disponibles, consulta les [etiquetes en aquest repositori](https://github.com/DanielEspanadero/hackathon-mwc22-back/tags)._

## Autor ✒️
* [Daniel Españadero Fernández](https://github.com/DanielEspanadero) - *Projecte complet*

## Llicència 📄
_Aquest projecte està llicenciat sota la Llicència MIT - vegeu el fitxer [LLICÈNCIA](https://github.com/DanielEspanadero/hackathon-mwc22-back/blob/develop/LICENSE) per a més detalls._


## Notes sobre la realització del projecte 📝

_Al principi tenia la idea que en lloc d'ordres l'aplicació seria una interacció amb l'usuari (Usant fletxes i números) sense adonar-me que això no seria una CLI sinó una GUI, així que vaig canviar la idea de com ho faria per gestionar-ho a través d'ordres. Una altra cosa que vaig descartar que també tenia al cap al principi és fer servir un servidor express, encara que pel que demana l'exercici no és necessari. Tot i així, l'estructura del projecte està preparada perquè crear un servidor en express i després fer una connexió amb el front-end sigui qüestió de poc temps._