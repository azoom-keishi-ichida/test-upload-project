import { CollectionConfig } from 'payload/types';

export const Tags: CollectionConfig = {
  slug: 'tags',
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
      name: 'images',
      type: 'relationship',
      relationTo: 'images',
      hasMany: true
    },
    {
      name: 'categories',
      type: 'relationship',
      relationTo: 'categories',
      hasMany: false
    },
  ],
}
