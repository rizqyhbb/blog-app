import Link from 'next/link'
import React from 'react'
import { IPostMetadata } from './PostMetadata'

const PostPreview = (props: IPostMetadata) => {
  return (
    <div key={props.slug} className='mb-4'>
      <Link href={`/posts/${props.slug}`}>
        <h1 className='text-2xl font-bold'>
          {props.title}
        </h1>
      </Link>
      <h2 className='text-lg font-light'>{props.subtitle}</h2>
      <p className='text-sm text-slate-400'>{props.date}</p>
    </div>
  )
}

export default PostPreview