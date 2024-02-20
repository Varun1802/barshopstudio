// schemas/pet.js
export default {
    name: 'blog',
    type: 'document',
    title: 'Blog',
    fields: [
      {
        name: 'name',
        type: 'string',
        title: 'Title'
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
        title: 'Description',
        name: 'description',
        type: 'text'
      },
      {
        title: 'Poster',
        name: 'poster',
        type: 'image',
        options: {
          hotspot: true // <-- Defaults to false
        },
        fields: [
          {
            name: 'caption',
            type: 'string',
            title: 'Caption',
          }
        ]
      }
    ]
  }