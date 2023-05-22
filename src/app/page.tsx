import { getPostsMetadata } from '@/utils/postHelper'
import PostPreview from '@/components/PostPreview'

export default function Home() {
  const postsmetadata = getPostsMetadata()
  const postPreview = postsmetadata.map((post) => {
    return (
      <PostPreview key={post.slug} {...post}/>
    )
  })


  return (
    <div>{postPreview}</div>
  )
}
