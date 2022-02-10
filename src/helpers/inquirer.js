const saveDev = [
        {
            type: 'input',
            name: 'name',
        message: 'Name:'
        },
        {
            type: 'input',
            name: 'email',
            message: 'Email:'
        },
        {
            type: 'list',
            name: 'category',
            message: 'Select category:',
            choices: [
                {
                    value: 'Front',
                    name: 'Front'
                },
                {
                    value: 'Back',
                    name: 'Back'
                },
                {
                    value: 'Mobile',
                    name: 'Mobile'
                },
                {
                    value: 'Data',
                    name: 'Data'
                }
            ]
        },
        {
            type: 'input',
            name: 'phone',
            message: 'phone:'
        },
        {
            type: 'list',
            name: 'date',
            message: 'Select a date',
            choices: [
                {
                    value: 'Feb 28, 2022',
                    name: 'Feb 28, 2022'
                },
                {
                    value: 'Mar 1, 2022',
                    name: 'Mar 1, 2022'
                },
                {
                    value: 'Mar 2, 2022',
                    name: 'Mar 2, 2022'
                },
                {
                    value: 'Mar 3, 2022',
                    name: 'Mar 3, 2022'
                }
            ]
        }
    ];

module.exports = {
    saveDev
}