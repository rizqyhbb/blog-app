# Simple blog app
 
 Try the App [here](https://dev.rizqyhbb.vercel.app/)
 
 This blog app is just one of my simple project. The main purpose is to be my private notes, cause it'll be better to write it down on the web and access it everywhere with style that I want. Also feel free to use this repo, if you want to add some post just add it in `/posts` and add you `.md` file. You have to add meta for `.md` files like this or see the example inside the `/posts` directory:

 ```
 ---
title: "Your Title Here"
subtitle: "Your subtitle here"
description: "Your description here"
date: "2023-05-18"
---

Articles here ....
 ``` 

 ## Getting Staeted
 Tech stack:
 - [NextJs 13](https://nextjs.org/)
 - [TailwindCSS](https://tailwindcss.com/)
 - [markdown-to-jsx](https://github.com/probablyup/markdown-to-jsx)
 - [react-syntax-highlighter](https://github.com/react-syntax-highlighter/react-syntax-highlighter)
 - [grey-matter](https://github.com/jonschlinkert/gray-matter)
 - [Vercel](https://vercel.com/dashboard)

 This project is pinned with [Volta](https://volta.sh/), you can find the version of node and yarn that is used on this project at the most bottom of `package.json`. You can run this project also with any node version manager or just node.

 What to do next is to install all dependencies:
 ```bash
yarn
 ```

 And then you can start the project in development env:
```bash
yarn dev
```

To start in production env:
```bash
## build the app
yarn build

## as this project output is standalone you can just run 
yarn start
```

There you go :D

The last thing is deployment, you can deploy this app in any platform such as Vercel or Fly. If you wanted to deploy on Vercel there is no need to custom any configuration, just add it and it will be smoothly running and deployed. If you wanted to deploy it on Fly for example that is using container I have add the dockerfile so you just need to build dockerfile

```bash
## on the porject directory
docker build -t [name-for-the-image] .
```

I really appreciate if you add credits of me if you decide to using this repo.
Thanks developers!