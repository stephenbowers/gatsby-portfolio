export default {
    name: 'technology',
    title: 'Technologies',
    type: 'document',
    // icon: () => '',
    fields: [
        {
            name: 'name',
            title: 'Technology Name',
            type: 'string',
            description: 'Name of the technology',
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'name',
                maxLength: 100,
            }
        },
    ],
};