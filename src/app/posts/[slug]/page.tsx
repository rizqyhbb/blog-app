import { readFileSync } from 'fs';
import Markdown from 'markdown-to-jsx';
import React from 'react'
import CodeBlock from '../../../components/markdown/CodeBlock';
import { getPostContent, getPostMetadata, getPostsMetadata } from '@/utils/postHelper';

export const generateStaticParams = async () => {
  const posts = getPostsMetadata()

  return posts.map((post) => ({
    slug: post.slug
  }))
}

export const generateMetadata = async ({ params }: { params: { slug: string } }) => {
  const matter = getPostMetadata(params.slug)

  return {
    title: matter.title,
    description: matter.description,
  }
}

const PostPage = (props: any) => {
  const { slug } = props.params

  const post = getPostContent(slug)
  return (
    <div>
      <h1 className='text-4xl lg:text-5xl font-black mb-6'>{post.data.title}</h1>
      <article className='prose min-w-full'>
        <Markdown options={{ overrides: { pre: CodeBlock } }}>{post.content}</Markdown>
      </article>

    </div>
  )
}

export default PostPage