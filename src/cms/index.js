import CMS from 'netlify-cms-app';

import options from './options';

const netlifyCmsGitLocal = process.env.GATSBY_NETLIFY_CMS_GIT_LOCAL === 'true';

if (netlifyCmsGitLocal) {
  options.config.local_backend = true;
  options.config.backend = {
    name: 'git-gateway',
  };
} else {
  options.config.backend = {
    name: 'github',
    repo: 'w3f-webops/polkadot.network',
    branch: 'main',
    auth_scope: 'repo',
    open_authoring: true,
    use_graphql: true,
  };
}

CMS.init(options);
