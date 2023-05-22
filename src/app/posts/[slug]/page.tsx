import { readFileSync } from 'fs';
import Markdown from 'markdown-to-jsx';
import React from 'react'
import CodeBlock from './components/markdown/CodeBlock';

const getPostContent = (slug: string) => {
  const dir = "posts/";
  const file = `${dir}${slug}.md`;
  const content = readFileSync(file, "utf-8");

  return content;
}

const PostPage = (props: any) => {
  const { slug } = props.params

  const content = getPostContent(slug)
  return (
    <div>
      <h1>{slug}</h1>
      <Markdown
        options={{
          forceBlock: true,
          overrides: { pre: { component: CodeBlock } }
        }}>
        {content}</Markdown>

    </div>
  )
}

export default PostPage