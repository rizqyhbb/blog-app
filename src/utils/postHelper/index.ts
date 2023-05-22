import { IPostMetadata } from "@/components/PostMetadata"
import { readFileSync, readdirSync } from "fs"
import matter from "gray-matter"

export const getPostsMetadata = (): IPostMetadata[] => {
  const dir = "posts/"
  const files = readdirSync(dir)
  const mdPosts = files.filter((file) => file.endsWith(".md"))
  // const slugs = mdPosts.map((post) => post.replace(".md", ""))

  const post = mdPosts.map((fileName) => {
    const fileContent = readFileSync(`${dir}/${fileName}`, "utf8")
    const matterResult = matter(fileContent);

    return {
      title: matterResult.data.title,
      subtitle: matterResult.data.subtitle,
      date: matterResult.data.date,
      slug: fileName.replace(".md", "")
    }
  })

  return post
}