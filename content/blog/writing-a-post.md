---
title: "How to add a post to this blog"
date: 2026-10-11
summary: "A quick reference for writing new entries: a markdown file, a little frontmatter, and a git push."
tags: [meta, how-to]
---

Every post is a markdown file in `content/blog/`. The file name becomes the URL, so `my-new-post.md` lives at `/blog/my-new-post`.

## Frontmatter

Start the file with a block like this:

```md
---
title: "My new post"
date: 2026-10-12
summary: "One or two sentences shown on the cards."
tags: [react, research]
draft: true   # optional — hides the post until you remove it
---
```

## Publishing

1. Create the file and write in markdown.
2. Commit and push to GitHub.
3. Your host rebuilds the site and the post shows up.

The three newest posts appear on the home page automatically.
