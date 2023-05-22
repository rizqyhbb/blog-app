import { readdirSync } from 'fs'
import Link from 'next/link'

const getPostsmetadata = () => {
  const dir = "posts/"
  const files = readdirSync(dir)
  const mdPosts = files.filter((file) => file.endsWith(".md"))
  const slugs = mdPosts.map((post) => post.replace(".md", ""))

  return slugs;
}

export default function Home() {
  const postsmetadata = getPostsmetadata()
  const postPreview = postsmetadata.map((slug) => {
    return (
      <div key={slug}>
        <Link href={`/posts/${slug}`}>{slug}</Link>
      </div>
    )
  })


  return (
    <div>{postPreview}</div>
  )
}
