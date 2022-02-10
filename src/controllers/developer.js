const colorette = require('colorette');
const developers = require('../models/developer');
const { connection } = require('mongoose');
const info = require('../db/infoMWC.json');
const developersJson = require('../db/developers.json');

const fixedMenu = async () => {
    console.clear();
    console.log(colorette.magentaBright(`\n     -----------------------------------------------------`));
    console.log(colorette.greenBright(`
      M   M W     W  CCC    22   22    b             k    
      MM MM W     W C      2  2 2  2   b             k k  
      M M M W  W  W C        2    2    bbb   aa  ccc kk   
      M   M  W W W  C       2    2     b  b a a c    k k  
      M   M   W W    CCC   2222 2222   bbb  aaa  ccc k  k 
`));
    console.log(colorette.magentaBright(`     -----------------------------------------------------\n`));
};

const addDev = async (data) => {
    fixedMenu()
    await developers.create(data);
    console.log(`${colorette.magentaBright('New Dev Created!')}`);
    await connection.close();
};

const listDevs = async () => {
    fixedMenu();
    const devs = await developers.find().lean();
    console.log(`${colorette.magentaBright('Total Developers Result:')} ${colorette.redBright(devs.length)}`);
    console.table(
        devs.map((developers) => ({
            name: developers.name,
            // email: developers.email,
            category: developers.category,
            // phone: developers.phone,
            date: developers.date
        }))
    );
    await connection.close();
    process.exit(0);
};

const infoMWC = async () => {
    fixedMenu();
    console.table(info);
    await connection.close();
    process.exit(0);
};

const addJson = async () => {
    fixedMenu();
    await developers.create(developersJson);
    console.log(`${colorette.magentaBright('Developers Json added!')}`);
    await connection.close();
};

module.exports = {
    addDev,
    listDevs,
    infoMWC,
    addJson,
    fixedMenu
}