---
title: Chapter 1 - Formation of Contract
date: '2021-12-01'
tags: ['law-of-contract', 'contract-law', 'chapter-1']
draft: false
summary: 'The blog template supports posts in nested sub-folders. This can be used to group posts of similar content e.g. a multi-part course. This post is itself an example of a nested route!'
---

According to **Sir William Anson** the law of contract is intended to ensure that what a man has led to expect shall come to pass and what has been promised to him shall be performed.

Law of Contract doesnot lay down a number of rights and duties which the law will enforce it consists of rather a number of limiting principles subject to which the parties nay create rights and duties for themselves which the law will uphold.

**Case Law:** Roop Kumar vs Mohan Thedani (AIR 2003) - Importance of written contract was laid down.

### Definitions

**Contract:** An agreement enforceable by law is a contract. (Section 2(h), ICA, 1872)

**Agreement:** Every promise and every set of reciprocal promises forming the consideration for eachother is an agreement. (Section 2(e), ICA, 1872)

**Consideration:**

### Kinds of Contract

The blog template supports posts in nested sub-folders. This helps in organisation and can be used to group posts of similar content e.g. a multi-part series. This post is itself an example of a nested route! It's located in the `/data/blog/nested-route` folder.

## How

Simplify create multiple folders inside the main `/data/blog` folder and add your `.md`/`.mdx` files to them. You can even create something like `/data/blog/nested-route/deeply-nested-route/my-post.md`

We use Next.js catch all routes to handle the routing and path creations.

## Use Cases

Here are some reasons to use nested routes

- More logical content organisation (blogs will still be displayed based on the created date)
- Multi-part posts
- Different sub-routes for each author
- Internationalization (though it would be recommended to use [Next.js built-in i8n routing](https://nextjs.org/docs/advanced-features/i18n-routing))

## Note

- The previous/next post links at bottom of the template are currently sorted by date. One could explore modifying the template to refer the reader to the previous/next post in the series, rather than by date.
