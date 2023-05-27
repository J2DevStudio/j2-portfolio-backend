import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'
// schemas are defined in the './schemas' folder

export default defineConfig({
  name: 'default',
  title: 'j2-portfolio',

  projectId: 'cmn2ovj5',
  dataset: 'production',

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
