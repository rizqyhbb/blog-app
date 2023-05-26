import { getPostsMetadata } from '@/utils/postHelper'
import PostPreview from '@/components/PostPreview'

export default function Home() {
  const postsmetadata = getPostsMetadata()
  const sortPostsMetadata = postsmetadata.sort((a, b) => {
    let da = new Date(a.date).getTime()
    let db = new Date(b.date).getTime()

    return db - da
  })
  const postPreview = sortPostsMetadata.map((post) => {
    return (
      <PostPreview key={post.slug} {...post} />
    )
  })

  return (
    <div>{postPreview}</div>
  )
}
