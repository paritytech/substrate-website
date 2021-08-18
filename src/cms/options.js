import collections from './collections/index';

const cmsOptions = {
  config: {
    collections,
    display_url: window.location.origin,
    publish_mode: 'editorial_workflow',

    // both folder values, are overwritten
    // by some local collections config
    media_folder: '/media',
    public_folder: '/public',

    // re-defined in ./index.js, from env
    backend: undefined,
    local_backend: false,
  },
};

export default cmsOptions;
