import Link from 'next/link'
import React from 'react'
import { IPostMetadata } from './PostMetadata'

const PostPreview = (props: IPostMetadata) => {
  return (
    <div key={props.slug} className='mb-4'>
      <Link
        href={`/posts/${props.slug}`}
        className={
          'block bg-rose-300 py-4 px-6 rounded-md transition-all ' +
          'shadow-[7px_7px_0px_-1px_rgba(0,0,0,1)] ' +
          'hover:shadow-[15px_15px_0px_-1px_rgba(0,0,0,1)] hover:-translate-x-1 hover:-translate-y-1 ' +
          'hover:bg-rose-400'
        }
      >
        <h1 className='text-2xl font-bold'>
          {props.title}
        </h1>
        <h2 className='text-lg font-light'>{props.subtitle}</h2>
        <p className='text-sm mt-4'>{props.date}</p>
      </Link>
    </div>
  )
}

export default PostPreview