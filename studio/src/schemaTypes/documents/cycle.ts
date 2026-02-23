import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'cycle',
  title: 'Exhibition Cycle',
  type: 'document',
  fields: [
    defineField({
      name: 'year',
      title: 'Year',
      type: 'string',
      validation: (Rule) => Rule.required(),
      description: 'Single year identifier (e.g., "2022", "2024", "2026").',
    }),
    defineField({
      name: 'isCurrent',
      title: 'Is Current Cycle?',
      type: 'boolean',
      initialValue: false,
      description: 'Only one cycle should be marked as current at a time.',
    }),
    defineField({
      name: 'unveilingDate',
      title: 'Unveiling Date',
      type: 'date',
      description: 'Date of the unveiling ceremony.',
    }),
    defineField({
      name: 'description',
      title: 'Cycle Description',
      type: 'text',
      rows: 3,
      description: 'Optional introductory text for this cycle.',
    }),
  ],
  preview: {
    select: {
      title: 'year',
      isCurrent: 'isCurrent',
    },
    prepare({ title, isCurrent }) {
      return {
        title: `${title} Cycle`,
        subtitle: isCurrent ? '✦ Current' : 'Past',
      }
    },
  },
  orderings: [
    {
      title: 'Year (Newest First)',
      name: 'yearDesc',
      by: [{ field: 'year', direction: 'desc' }],
    },
  ],
})