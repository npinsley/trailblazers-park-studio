import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'timelineEvent',
  title: 'Timeline Event',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Event Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'year',
      title: 'Year',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'month',
      title: 'Month',
      type: 'string',
      description: 'Optional month (e.g., "May", "July").',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'isFuture',
      title: 'Is Future Event?',
      type: 'boolean',
      initialValue: false,
      description: 'Future events are highlighted in gold on the timeline.',
    }),
    defineField({
      name: 'linkTo',
      title: 'Link URL',
      type: 'string',
      description: 'Optional internal path (e.g., "/gallery?cycle=2024").',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      year: 'year',
      month: 'month',
      isFuture: 'isFuture',
    },
    prepare({ title, year, month, isFuture }) {
      return {
        title: title,
        subtitle: `${month ? month + ' ' : ''}${year}${isFuture ? ' · Upcoming' : ''}`,
      }
    },
  },
  orderings: [
    {
      title: 'Newest First',
      name: 'yearDesc',
      by: [{ field: 'year', direction: 'desc' }],
    },
  ],
})