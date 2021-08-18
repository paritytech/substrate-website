import name from '../fields/tags/name';
import slug from '../fields/tags/slug';

const tags = {
  format: 'yaml-frontmatter',
  folder: 'content/en/tags',
  name: 'tags',
  label: 'Tags',
  label_singular: 'Tag',
  create: true,
  slug: '{{slug}}',
  identifier_field: 'name',
  editor: {
    preview: false,
  },
  fields: [name, slug],
  description: 'Tags, general groups to organize the blog posts.',
};

export default tags;
