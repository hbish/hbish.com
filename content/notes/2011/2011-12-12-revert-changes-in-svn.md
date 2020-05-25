---
title: Revert changes in SVN
author: Ben Shi
type: note
date: 2011-12-12T07:22:17+00:00
url: /revert-changes-in-svn/
categories:
  - notes
tags:
  - svn
  - tips
  - unix
---

There is

```bash
svn revert -R
```

But sometimes after a svn merge, I see a lot of files are marked as modified because their property has changed. There is a way of reverting them separately.

Reverting all file changes

```bash
svn st | grep -e '^M' | awk '{print $2}' | xargs svn revert
```

Revert all file property changes

```bash
svn st | grep -e '^\sM' | awk '{print $2}' | xargs svn revert
```
