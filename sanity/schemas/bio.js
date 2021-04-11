export default {
    name: 'bio',
    title: 'Bio',
    type: 'document',
    // icon: () => '',
    fields: [
        {
            name: 'tagline',
            title: 'Tagline',
            type: 'string',
            description: 'Tagline for bio',
        },
        {
            name: 'biography',
            title: 'Biography',
            type: 'text',
        },
        {
            name: 'image',
            title: 'Image',
            type: 'image',
            options: {
                hotspot: true,
            },
        },
    ],
};