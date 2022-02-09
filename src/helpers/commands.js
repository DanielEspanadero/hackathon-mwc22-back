const inquirer = require('inquirer');
const { program } = require('commander');
const { saveDev } = require('./inquirer');
const { addDev,
        listDevs
 } = require('../controllers/developer');

program.version('0.0.1').description('Hackathon MWC 2022 | BackEnd v0.0.1');

//TODO ✅ Task 4 → Generate a CLI command that displays the list of developers. [x]

program
    .command('list')
    .alias('l')
    .description('List all devs')
    .action(async () => {
        console.clear();
        listDevs()
    });

//TODO ✅ Task 5 → Generate a CLI command that allows you to add a new developer and update the database. [x]

program
    .command('save')
    .alias('s')
    .description('Save a new developer in the database.')
    .action(async () => {
        console.clear();
        const data = await inquirer.prompt(saveDev);
        addDev(data);
    });

program.parse(process.argv);