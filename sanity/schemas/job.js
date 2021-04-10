export default {
    name: 'job',
    title: 'Jobs',
    type: 'document',
    // icon: () => '',
    fields: [
        {
            name: 'company',
            title: 'Company Name',
            type: 'string',
            description: 'Name of the company',
        },
        {
            name: 'startDate',
            title: 'Start Date',
            type: 'date',
            options: {
                dateFormat: 'MM-YYYY'
            }
        },
        {
            name: 'endDate',
            title: 'End Date',
            type: 'date',
            options: {
                dateFormat: 'MM-YYYY'
            }
        },
        {
            name: 'location',
            title: 'Location',
            type: 'string',
            description: 'Location of company'
        },
        {
            name: 'title',
            title: 'Job Title',
            type: 'string',
        },
        {
            name: 'duties',
            title: 'Job Duties',
            type: 'array',
            of: [{type: 'string'}],
            description: 'Job Duties and Accomplishments',
        },
    ],
};