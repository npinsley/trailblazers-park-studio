import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'trailblazerEntry',
  title: 'Trailblazer Entry',
  type: 'document',
  fields: [
    defineField({
      name: 'trailblazerName',
      title: 'Trailblazer Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'trailblazerName',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'trailblazerBio',
      title: 'Trailblazer Biography',
      type: 'array',
      of: [{ type: 'block' }],
      description: 'Full biography of the trailblazer. Supports rich text.',
    }),
    defineField({
      name: 'trailblazerPhoto',
      title: 'Trailblazer Photo',
      type: 'image',
      options: { hotspot: true },
      description: 'Optional portrait/headshot of the trailblazer.',
    }),
    defineField({
      name: 'artistName',
      title: 'Artist Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
      description: 'Full name of the artist (e.g., "Ian Hannula & Joe Haller")',
    }),
    defineField({
      name: 'artistGroup',
      title: 'Artist Group/Collective',
      type: 'string',
      description: 'If the artist is part of a collective (e.g., "N.I.C.E. Collective")',
    }),
    defineField({
      name: 'artistBio',
      title: 'Artist Biography',
      type: 'array',
      of: [{ type: 'block' }],
    }),
    defineField({
      name: 'artistStatement',
      title: 'Artist Statement',
      type: 'array',
      of: [{ type: 'block' }],
      description: 'Optional statement from the artist about this work.',
    }),
    defineField({
      name: 'artworkImage',
      title: 'Artwork Image',
      type: 'image',
      options: { hotspot: true },
      validation: (Rule) => Rule.required(),
      description: 'The flag artwork photograph.',
    }),
    defineField({
      name: 'artworkTitle',
      title: 'Artwork Title',
      type: 'string',
      description: 'Optional title of the artwork.',
    }),
    defineField({
      name: 'accentColor',
      title: 'Accent Color',
      type: 'string',
      description: 'Hex color code for this entry (e.g., "#E63946").',
      validation: (Rule) => Rule.regex(/^#[0-9A-Fa-f]{6}$/, { name: 'hex color' }),
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      validation: (Rule) => Rule.required().min(1).max(16),
      description: 'Position within the cycle (1–16).',
    }),
    defineField({
      name: 'cycle',
      title: 'Cycle',
      type: 'reference',
      to: [{ type: 'cycle' }],
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'trailblazerName',
      subtitle: 'artistName',
      media: 'artworkImage',
      cycle: 'cycle.year',
    },
    prepare({ title, subtitle, media, cycle }) {
      return {
        title: title,
        subtitle: `${cycle || '—'} · ${subtitle || '—'}`,
        media: media,
      }
    },
  },
  orderings: [
    {
      title: 'Cycle, then Order',
      name: 'cycleOrder',
      by: [
        { field: 'cycle.year', direction: 'desc' },
        { field: 'order', direction: 'asc' },
      ],
    },
    {
      title: 'Trailblazer Name A-Z',
      name: 'nameAsc',
      by: [{ field: 'trailblazerName', direction: 'asc' }],
    },
  ],
})