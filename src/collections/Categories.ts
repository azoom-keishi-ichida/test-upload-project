import { CollectionConfig } from 'payload/types'

export const Categories: CollectionConfig = {
  slug: 'categories',
  fields: [
    {
      name: 'title',
      type: 'text', 
    },
    {
      name: 'status',
      type: 'checkbox', 
    },
    {
      name: 'color',
      type: 'select',
      options: ['mint', 'dark-gray', 'white'],
    },
    {
      name: 'tags',
      type: 'relationship',
      relationTo: 'tags',
      hasMany: true
    },
  ],
}



// import qs from 'qs'

// const query = {
//   'images.tags': {
//     title: '内観',
//   },
// }

// const gettags = async() => await payload.find({collection:"images",where:{'tags.title':{equals:'内観'}}}