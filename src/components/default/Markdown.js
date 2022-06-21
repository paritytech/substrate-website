import React from 'react';
import rehypeReact from 'rehype-react';

import { Code } from './resolvers/Code';

const components = {
  pre: Code,
};

const renderAst = new rehypeReact({
  createElement: React.createElement,
  components,
}).Compiler;

export default function Markdown({ htmlAst }) {
  return renderAst(htmlAst);
}
