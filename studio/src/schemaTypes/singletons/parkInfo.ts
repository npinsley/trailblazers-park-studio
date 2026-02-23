import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'parkInfo',
  title: 'Park Information',
  type: 'document',
  // Singleton: only one document of this type should exist
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      initialValue: 'Trailblazers Park',
    }),
    defineField({
      name: 'mission',
      title: 'Mission Statement',
      type: 'array',
      of: [{ type: 'block' }],
      description: 'The park\'s mission and description shown on the About page.',
    }),
    defineField({
      name: 'history',
      title: 'Park History',
      type: 'array',
      of: [{ type: 'block' }],
      description: 'Full history narrative for the About / The Park page.',
    }),
    defineField({
      name: 'pullQuote',
      title: 'Featured Pull-Quote',
      type: 'object',
      fields: [
        { name: 'text', title: 'Quote Text', type: 'text', rows: 3 },
        { name: 'attribution', title: 'Attribution', type: 'string' },
        { name: 'role', title: 'Role/Title', type: 'string' },
      ],
      description: 'The Doug Harris pull-quote shown on the homepage.',
    }),
    defineField({
      name: 'designCredits',
      title: 'Design Credits',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'name', title: 'Name', type: 'string' },
            { name: 'role', title: 'Role', type: 'string' },
            { name: 'description', title: 'Description', type: 'text', rows: 2 },
          ],
          preview: {
            select: { title: 'name', subtitle: 'role' },
          },
        },
      ],
    }),
    defineField({
      name: 'taskForce',
      title: 'Task Force Members',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'name', title: 'Name', type: 'string' },
            { name: 'role', title: 'Role', type: 'string' },
          ],
          preview: {
            select: { title: 'name', subtitle: 'role' },
          },
        },
      ],
    }),
    defineField({
      name: 'contactEmail',
      title: 'Contact Email',
      type: 'string',
      initialValue: 'fippoatrailblazers@gmail.com',
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Park Information',
        subtitle: 'About page content & settings',
      }
    },
  },
})