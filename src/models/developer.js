const { Schema, model } = require('mongoose');
const colorette = require('colorette');
const validator = require('validator')

//TODO ✅ Task 1 → Create a developer model that contains this information: Name, Email, Category ( Front, Back, Mobile, Data), Telephone, Days to attend the mobile ( 28 Feb, 1 -3 March). [x]

const developerSchema = new Schema({
    name: {
        type: String,
        required: [true, colorette.magentaBright('** Name is required **')],
        minlength: [3, colorette.bgMagentaBright('** Name must be at least 3 characters long **')]
    },
    email: {
        type: String,
        required: [true, colorette.magentaBright('** You need to enter a valid email **')],
        unique: [true, colorette.magentaBright('** There can only be one registered email **')],
        // match: [/.+\@.+\..+/, colorette.bgMagentaBright('** Email is invalid **')]  // Another option with reg exp
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error(colorette.bgMagentaBright('** Email is invalid **'));
            }
        }
    },
    category: {
        type: String,
        required: true,
        ENUM: ['Front', 'Back', 'Mobile', 'Data'],
    },
    phone: {
        type: String,
        required: true,
        unique: [true, colorette.magentaBright('** That number is already registered **')],
        minlength: [4, colorette.magentaBright('** The number cannot be less than 4 characters **')],
        maxlength: [16, colorette.magentaBright('** The number cannot have more than 16 characters **')]
    },
    date: {
        type: String,
        required: true,
        ENUM: ['Feb 28, 2022', 'Mar 1, 2022', 'Mar 2, 2022', 'Mar 3, 2022']
    },
},
    {
        versionKey: false
    });

module.exports = model('developers', developerSchema);;