export default {
    name: 'education',
    title: 'Education',
    type: 'document',
    // icon: () => '',
    fields: [
        {
            name: 'school',
            title: 'School Name',
            type: 'string',
            description: 'Name of the school',
        },
        {
            name: 'startYear',
            title: 'Start Year',
            type: 'date',
            options: {
                dateFormat: 'YYYY'
            }
        },
        {
            name: 'endYear',
            title: 'End Year',
            type: 'date',
            options: {
                dateFormat: 'YYYY'
            }
        },
        {
            name: 'degree',
            title: 'Degree',
            type: 'string',
        },
    ],
};