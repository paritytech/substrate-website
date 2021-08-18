export default {
  label: 'Categories',
  name: 'categories',
  widget: 'list',
  hint: `Categories this item belongs to.`,
  required: false,
  fields: [
    {
      label: 'Category',
      name: 'category',
      widget: 'relation',
      collection: 'categories',
      value_field: 'title',
      search_fields: ['title'],
      display_fields: ['title'],
      hint: 'A category to add to this blog post.',
      required: true,
    },
  ],
};
