import { IPostMetadata } from "@/components/PostMetadata"
import { readFileSync, readdirSync } from "fs"
import matter from "gray-matter"

export const getPostsMetadata = (): IPostMetadata[] => {
  const dir = "posts/"
  const files = readdirSync(dir)
  const mdPosts = files.filter((file) => file.endsWith(".md"))

  const post = mdPosts.map((fileName) => {
    const fileContent = readFileSync(`${dir}/${fileName}`, "utf8")
    const matterResult = matter(fileContent);

    return {
      title: matterResult.data.title,
      subtitle: matterResult.data.subtitle,
      date: matterResult.data.date,
      slug: fileName.replace(".md", ""),
      description: matterResult.data.description
    }
  })

  return post
}

export const getPostMetadata = (slug: string): IPostMetadata => {
  const dir = 'posts/'
  const post = readFileSync(`${dir}${slug}.md`)
  const matterResult = matter(post)

  return {
    title: matterResult.data.title,
    subtitle: matterResult.data.subtitle,
    date: matterResult.data.date,
    slug,
    description: matterResult.data.description
  }
}

export const getPostContent = (slug: string) => {
  const dir = "posts/";
  const file = `${dir}${slug}.md`;
  const content = readFileSync(file, "utf-8");
  const matterResult = matter(content)

  return matterResult
}
