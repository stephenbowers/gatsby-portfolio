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
            name: 'placement',
            title: 'Placement in List',
            type: 'number',
            validation: Rule => Rule.required().integer().positive().min(1),
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
    orderings: [
        {
            title: 'Placement, First to Last',
            name: 'placementRankAsc',
            by: [
                {field: 'placement', direction: 'asc'}
            ],
        },
    ],
};