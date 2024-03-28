import { CollectionConfig } from 'payload/types'
import Users from './Users';

export const Pages: CollectionConfig = {
  slug: 'pages',
  fields: [
    {
      name: 'myField',
      type: 'text', 
    },
    {
      name: 'otherField',
      type: 'checkbox', 
    },
    {
      name: 'author',
      type: 'relationship',
      relationTo: Users.slug
    },
  ],
}
