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
        // Can add technologies
    ],
};