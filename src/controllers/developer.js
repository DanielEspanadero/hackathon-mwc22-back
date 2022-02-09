const colorette = require('colorette');
const developers = require('../models/developer');
const { connection } = require('mongoose');
const info = require('../db/infoMWC.json');
const developersJson = require('../db/developers.json');

const addDev = async (data) => {
    await developers.create(data);
    console.log(`${colorette.magentaBright('New Dev Created!')}`);
    await connection.close();
};

const listDevs = async () => {
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
    console.table(info);
    await connection.close();
    process.exit(0);
};

const addJson = async () => {
    await developers.create(developersJson);
    console.log(`${colorette.magentaBright('Developers Json added!')}`);
    await connection.close();
};

module.exports = {
    addDev,
    listDevs,
    infoMWC,
    addJson
}