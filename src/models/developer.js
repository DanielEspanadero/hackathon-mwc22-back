const { Schema, model } = require('mongoose');

//TODO ✅ Task 1 → Create a developer model that contains this information: Name, Email, Category ( Front, Back, Mobile, Data), Telephone, Days to attend the mobile ( 28 Feb, 1 -3 March). [x]

const developerSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique:true
    },
    category: {
        type: String,
        required: true,
        ENUM: ['Front', 'Back', 'Mobile', 'Data'],
    },
    phone: {
        type: Number,
        required: true,
        unique: true
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