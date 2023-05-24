import { readFileSync } from 'fs';
import Markdown from 'markdown-to-jsx';
import React from 'react'
import CodeBlock from '../../../components/markdown/CodeBlock';
import matter from 'gray-matter';
import { getPostsMetadata } from '@/utils/postHelper';

const getPostContent = (slug: string) => {
  const dir = "posts/";
  const file = `${dir}${slug}.md`;
  const content = readFileSync(file, "utf-8");
  const matterResult = matter(content)

  return matterResult
}

export const generateStaticParams = async () => {
  const posts = getPostsMetadata()

  return posts.map((post) => ({
    slug: post.slug
  }))
}

const PostPage = (props: any) => {
  const { slug } = props.params

  const post = getPostContent(slug)
  return (
    <div>
      <h1 className='text-3xl lg:text-5xl font-black'>{post.data.title}</h1>
      <article className='prose min-w-full'>
        <Markdown options={{ overrides: { pre: CodeBlock } }}>{post.content}</Markdown>
      </article>

    </div>
  )
}

export default PostPage