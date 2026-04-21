import type { Block } from 'payload'

import { lexicalEditor } from '@payloadcms/richtext-lexical'

export const MyBlock: Block = {
  slug: 'my-block',
  fields: [
    {
      name: 'items',
      type: 'array',
      fields: [
        {
          name: 'body',
          type: 'richText',
          editor: lexicalEditor({
            features: ({ defaultFeatures }) => [...defaultFeatures],
          }),
        },
        {
          name: 'subitems',
          type: 'array',
          fields: [{ name: 'label', type: 'text' }],
        },
      ],
    },
  ],
}
