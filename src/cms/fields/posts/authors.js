export default {
  label: 'Authors',
  name: 'authors',
  widget: 'list',
  required: false,
  hint: 'The persons authoring this content',
  fields: [
    {
      label: 'Author',
      name: 'author',
      widget: 'relation',
      collection: 'authors',
      value_field: 'slug',
      search_fields: ['name'],
      display_fields: ['name'],
      hint: 'One author.ess, who has been editing this content',
      required: false,
    },
  ],
};
