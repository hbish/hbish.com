---
title: Recursively remove all .svn directories
author: ben
type: note
date: 2012-02-16T07:43:21+00:00
url: /recursively-remove-all-svn-directories/
categories:
  - notes
tags:
  - svn
  - tips
  - unix
---

While moving some of my old projects from my svn server at home over to Bitbucket, I used this snippets to remove all the .svn directories.

```bash
find . -name ".svn" -type d -exec rm -rf {} \;
```

Can also be very useful when you accidentally did a checkout instead of a export.
