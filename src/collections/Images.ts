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
      label:"画像URL",
      type: 'text',
      required: true,
    },
    {
      name: 'tags',
      label:"タグ",
      type: 'relationship',
      relationTo: Tags.slug, 
      hasMany: true
    },
  ],
 
}