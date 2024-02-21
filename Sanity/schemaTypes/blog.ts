// schemas/pet.js
export default {
    name: 'blog',
    type: 'document',
    title: 'Blog',
    fields: [
      {
        title: 'Title',
        name: 'title',
        type: 'string',
        description: 'Make it catchy',
      },
      {
        title: 'Slug',
        name: 'slug',
        type: 'slug',
        options: {
          source: 'title',
          maxLength: 200, // will be ignored if slugify is set
          slugify: (input: string) => input
                               .toLowerCase()
                               .replace(/\s+/g, '-')
                               .slice(0, 200)
        }
      },
      {
        title: 'Published date',
        name: 'releaseDate',
        type: 'date'
      },
      {
        title: 'Small Description',
        name: 'smallDescription',
        type: 'text'
      },
      {
        name:'content',
        type:'array',
        title:'Content',
        of:[
          {
            type:'block',
          },
        ]
      },
      {
        title: 'Poster',
        name: 'poster',
        type: 'image',
        options: {
          hotspot: true // <-- Defaults to false
        },
      }
    ]
  }