---
title: Xcode 6.1 SourceKitService Crashes Continously
author: Ben Shi
type: note
date: 2014-10-25T23:31:09+00:00
url: /xcode-6-1-sourcekitservice-crashes-continously/
categories:
  - notes
tags:
  - sourcekitservice
  - swift
  - xcode
---

After importing some files I started getting this error every few seconds. I tried restarting Xcode and went through all the obvious steps but to no avail. The diagnostic logs wasn't helpful either.

Turned out all I had to blow away all the derived data.

_In Xcode > Preferences > Locations > Derived Data > Remove the entire Derived Data directory_
