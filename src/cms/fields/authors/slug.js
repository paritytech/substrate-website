import patternPath from '../../patterns/path';

export default {
  label: 'Slug',
  name: 'slug',
  widget: 'string',
  required: true,
  hint: 'The Slug is the text used to create the URL of this item: https://example.com/authors/my-author ; where my-author is the slug of this author',
  pattern: patternPath,
};
