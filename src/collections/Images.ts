import { CollectionConfig } from 'payload/types'
import { Tags } from './Tags';

export const Images: CollectionConfig = {
  slug: 'images',
  upload:{
    adminThumbnail: 'thumbnail',
    mimeTypes: ['image/*'],
  },
  fields: [
    {
      name: 'imageUrl',
      type: 'text',
      required: true,
    },
    {
      name: 'status',
      type: 'checkbox', 
    },
    {
      name: 'tags',
      type: 'relationship',
      relationTo: Tags.slug, 
      hasMany: true
    },
  ],
}