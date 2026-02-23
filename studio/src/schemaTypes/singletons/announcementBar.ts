import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'announcementBar',
  title: 'Announcement Bar',
  type: 'document',
  // Singleton: only one active announcement at a time
  fields: [
    defineField({
      name: 'text',
      title: 'Announcement Text',
      type: 'string',
      validation: (Rule) => Rule.required(),
      description: 'Keep it short — one line. E.g., "2026 Unveiling Ceremony — May 23rd at 1:00 PM"',
    }),
    defineField({
      name: 'linkText',
      title: 'Link Text',
      type: 'string',
      initialValue: 'Learn More',
    }),
    defineField({
      name: 'linkUrl',
      title: 'Link URL',
      type: 'string',
      initialValue: '/timeline',
      description: 'Internal path (e.g., "/timeline") or external URL.',
    }),
    defineField({
      name: 'isActive',
      title: 'Show Announcement?',
      type: 'boolean',
      initialValue: true,
      description: 'Toggle this off to hide the bar without deleting it.',
    }),
  ],
  preview: {
    select: {
      title: 'text',
      isActive: 'isActive',
    },
    prepare({ title, isActive }) {
      return {
        title: title,
        subtitle: isActive ? '🟢 Active' : '⚫ Hidden',
      }
    },
  },
})