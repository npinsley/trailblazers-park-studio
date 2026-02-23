import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'starFountain',
  title: 'STAR Fountain (Permanent Installation)',
  type: 'document',
  // Singleton: only one document of this type should exist
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      initialValue: 'STAR Fountain',
    }),
    defineField({
      name: 'artistName',
      title: 'Artist',
      type: 'string',
      initialValue: 'TM Davy',
    }),
    defineField({
      name: 'honorees',
      title: 'Honored Individuals',
      type: 'string',
      initialValue: 'Marsha P. Johnson & Sylvia Rivera',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'array',
      of: [{ type: 'block' }],
      description: 'Description of the STAR Fountain.',
    }),
    defineField({
      name: 'marshaJohnsonBio',
      title: 'Marsha P. Johnson Biography',
      type: 'array',
      of: [{ type: 'block' }],
    }),
    defineField({
      name: 'sylviaRiveraBio',
      title: 'Sylvia Rivera Biography',
      type: 'array',
      of: [{ type: 'block' }],
    }),
    defineField({
      name: 'mosaicImage',
      title: 'Mosaic Image',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'additionalImages',
      title: 'Additional Images',
      type: 'array',
      of: [{ type: 'image', options: { hotspot: true } }],
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'STAR Fountain',
        subtitle: 'Marsha P. Johnson & Sylvia Rivera · TM Davy',
      }
    },
  },
})