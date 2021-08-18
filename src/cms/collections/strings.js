import menus from '../../../locales/en/menus.json';
import translations from '../../../locales/en/translations.json';

/* model-strings is the model responsible for english (en) language strings */

/* List of file names (without .json extension)
 * and the object with all language strings */
const stringFiles = [
  {
    name: 'menus',
    strings: menus,
  },
  {
    name: 'translations',
    strings: translations,
  },
];

/* methods to build files and fields */
const buildFiles = files => {
  return files.map(file => {
    return {
      name: file.name,
      label: file.name,
      file: `locales/en/${file.name}.json`,
      fields: buildFields(file.strings),
    };
  });
};
const buildFields = fieldsJson => {
  return Object.keys(fieldsJson).map(field => {
    return {
      label: field,
      name: field,
      widget: 'string',
    };
  });
};

/* generate the files list and their fields
   from the string in json files */
const strings = {
  name: 'configs',
  label: 'Strings',
  delete: false,
  editor: {
    preview: false,
  },
  files: buildFiles(stringFiles),
  description:
    'Strings of text, which `value` is used to replace the `key` in the site; with the different equivalent in languages. Here is only the english content. These values are the bits of text that are not part of other content types in the cms.',
};

export default strings;
