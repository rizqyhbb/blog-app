import Link from 'next/link'
import React from 'react'
import { IPostMetadata } from './PostMetadata'

const PostPreview = (props: IPostMetadata) => {
  return (
    <div key={props.slug} className='mb-4'>
        <Link href={`/posts/${props.slug}`}>
          <h2>
            {props.title}
          </h2>
        </Link>
        <p>{props.subtitle}</p>
        <p>{props.date}</p>
      </div>
  )
}

export default PostPreview