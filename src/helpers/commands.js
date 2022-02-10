const inquirer = require('inquirer');
const { program } = require('commander');
const { saveDev } = require('./inquirer');
const { addDev,
    listDevs,
    infoMWC,
    addJson,
    fixedMenu
} = require('../controllers/developer');

program.version('0.0.1').description(fixedMenu());

//TODO ✅ Task 2 → Insert the .json data into a database (Link to the json in the statement). [x]

program
    .command('json')
    .alias('j')
    .description('Add the developers that are in the Json to the database')
    .action(async () => {
        console.clear();
        addJson();
    });

//TODO ✅ Task 3 → Generate a CLI command to display the information of the MWC (Days that will be available). [x]

program
    .command('days')
    .alias('d')
    .description('List all days')
    .action(async () => {
        console.clear();
        infoMWC();
        console.log(saveDev)
    });

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
    .command('add')
    .alias('a')
    .description('Add a new developer in the database.')
    .action(async () => {
        console.clear();
        const data = await inquirer.prompt(saveDev);
        addDev(data);
    });

program.parse(process.argv);