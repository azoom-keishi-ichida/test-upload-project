import { CollectionConfig } from 'payload/types'

export const Categories: CollectionConfig = {
  slug: 'categories',
  fields: [
    {
      name: 'title',
      label:"カテゴリー",
      type: 'text', 
      unique: true,
      admin:{
        placeholder:"空間の用途",
      }
    },
    
    {
      name: 'tags',
      label:"タグ",
      type: 'relationship',
      relationTo: 'tags',
      hasMany: true
      
    },
  ],
  admin: {
    useAsTitle: "title",
    
  },
}



// import qs from 'qs'

// const query = {
//   'images.tags': {
//     title: '内観',
//   },
// }

// const gettags = async() => await payload.find({collection:"images",where:{'tags.title':{equals:'内観'}}}