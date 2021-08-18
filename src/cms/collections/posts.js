import authors from '../fields/posts/authors';
import body from '../fields/posts/body';
import categories from '../fields/posts/categories';
import createdAt from '../fields/posts/createdAt';
import excerpt from '../fields/posts/excerpt';
import featuredImage from '../fields/posts/featuredImage';
import isFeatured from '../fields/posts/isFeatured';
import slug from '../fields/posts/slug';
import tags from '../fields/posts/tags';
import title from '../fields/posts/title';

const posts = {
  format: 'yaml-frontmatter',
  folder: 'content/en/posts',
  media_folder: '/media/images/posts',
  public_folder: '/media/images/posts',
  name: 'posts',
  label: 'Posts',
  label_singular: 'Post',
  create: true,
  slug: '{{slug}}',
  editor: {
    preview: false,
  },
  fields: [title, slug, tags, categories, createdAt, isFeatured, featuredImage, excerpt, body, authors],
  description:
    'The posts, are blog articles. They all should be here written in English (translations are then automatically made externally).',
};

export default posts;
