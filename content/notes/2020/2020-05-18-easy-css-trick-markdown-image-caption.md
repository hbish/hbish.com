---
title: Easy CSS trick to have image captions on Markdown
author: ben
type: note
date: 2020-05-18T19:10:00+00:00
url: /easy-css-trick-image-caption-markdown/
categories:
  - notes
tags:
  - css
  - markdown
  - image
---

Image captions doesn't come out of the box when it comes to markdown.

We can fix this up by applying CSS
[adjacent sibling combinator](https://developer.mozilla.org/en-US/docs/Web/CSS/Adjacent_sibling_combinator).
This selector works by matching two elements only when its immediately
after one another, and both elements needs to be contained with in the
same element. So let see how we can make this work.

Suppose we have the markdown below with the image followed by some text.

```markdown
![image](./some-image.jpg) 
*image by xyz*
```

If we inspect the generated HTML we may see something like the snippet
below. Now its worth mentioning that each markdown parser may generate
different html, especially when you are using static web generators on
top of that. Therefore it is important to understand what is generated
before proceeding to write the css selector.

```html
<p>
  <a href="/static/some-image.jpg">
    <img src="some-image.jpg">
  </a>
  <em>image by xyz</em>
</p>
```

From the snippet above, we can see that the parent `<p>` element
contains 2 child elements `<a>` and `<em>`. Therefore we are able to
write css selector using the adjacent sibling combinator `+` since the
rules above applies. It would look something like:

```css
a + em {
    display: inherit;
    text-align: center;
    font-size: 1.4rem;
}
```

There you go! You should get something similar to the image below.

![Markdown Image Caption](markdown-image-caption.png) *image showing
caption under image*
