export default {
    name: 'project',
    title: 'Projects',
    type: 'document',
    // icon: () => '',
    fields: [
        {
            name: 'name',
            title: 'Project Name',
            type: 'string',
            description: 'Name of the project',
        },
        {
            name: 'placement',
            title: 'Placement in List',
            type: 'number',
            validation: Rule => Rule.required().integer().positive().min(1),
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
        {
            name: 'image',
            title: 'Image',
            type: 'image',
            options: {
                hotspot: true,
            },
        },
        {
            name: 'description',
            title: 'Description',
            type: 'text',
        },
        {
            name: 'githubUrl',
            title: 'GitHub Link',
            type: 'url',
            description: 'URL to GitHub project repo',
        },
        {
            name: 'demoUrl',
            title: 'Demo Link',
            type: 'url',
            description: 'URL to demo or live site',
        },
        {
            name: 'technologies',
            title: 'Technologies',
            type: 'array',
            of: [{ type: 'reference', to: [{ type: 'technology'}] }],
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