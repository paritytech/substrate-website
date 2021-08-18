import description from '../fields/authors/description';
import image from '../fields/authors/image';
import name from '../fields/authors/name';
import slug from '../fields/authors/slug';

const posts = {
  format: 'yaml-frontmatter',
  folder: 'content/en/authors',
  media_folder: '/media/images/authors',
  public_folder: '/public/images/authors',
  name: 'authors',
  label: 'Authors',
  label_singular: 'Author',
  create: true,
  slug: '{{slug}}',
  /* require, or `slug` is broken at creation,
   * because default sed is `title`, which does not exist here;
     Docs:
     https://www.netlifycms.org/docs/configuration-options/#identifier_field */
  identifier_field: 'name',
  editor: {
    preview: false,
  },
  fields: [name, slug, description, image],
  description: 'People, displayed as authors (of blog posts etc.)',
};

export default posts;
