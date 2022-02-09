#!/usr/bin/env node

const { dbConection } = require('./db/config');
require('./helpers/commands');

const main = async () => {
    await dbConection();
};

main();