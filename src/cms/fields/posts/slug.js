import patternPath from '../../patterns/path';

export default {
  label: 'Slug',
  name: 'slug',
  widget: 'string',
  required: true,
  hint: 'The Slug is the text used to create the URL of this item: https://example.com/my-article ; where my-article is the slug',
  pattern: patternPath,
};
