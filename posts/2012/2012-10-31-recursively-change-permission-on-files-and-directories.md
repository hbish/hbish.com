---
title: Recursively change permission on files and directories
author: ben
type: post
date: 2012-10-31T07:52:39+00:00
url: /recursively-change-permission-on-files-and-directories/
categories:
  - notes
tags:
  - chmod
  - permission
  - recursive
  - unix

---
Recursively change permission on ONLY directories

```shell
find . -type d -exec chmod 755 {} \;
```

Recursively change permission on ONLY files

```shell
find . -type f -exec chmod 644 {} \;
```

Recursively change permission on a certain file extension

```shell
find . -type f -name '*.css' -exec chmod 644 {} \;
```