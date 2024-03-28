import { CollectionConfig } from 'payload/types';

export const Tags: CollectionConfig = {
  slug: 'tags',
  fields: [
    {
      name: 'title',
      label:"タグ",
      type: 'text', 
      unique: true,
      admin:{
        placeholder:"オフィス"
      }
    },
    {
      name: 'images',
      label:"画像",
      type: 'relationship',
      relationTo: 'images',
      hasMany: true
    },
    {
      name: 'categories',
      label:"カテゴリー",
      type: 'relationship',
      relationTo: 'categories',
      hasMany: false
    },
  ],
  admin: {
    useAsTitle: "title",
    
  },
}
