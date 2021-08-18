import patternPath from '../../patterns/path';

export default {
  label: 'Slug',
  name: 'slug',
  widget: 'string',
  required: true,
  hint: 'The Slug is the text used to create the URL of this item: https://example.com/categories/my-category ; where my-category is the slug of this category',
  pattern: patternPath,
};
