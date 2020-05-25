---
title: Disabling the Mac OSX Dashboard
author: Ben Shi
type: note
date: 2011-08-30T06:58:18+00:00
url: /disabling-the-mac-osx-dashboard/
categories:
  - notes
tags:
  - bash
  - osx
---

I never liked the idea of widgets in Windows and I don't intend to start liking them when I'm using OSX. In OSX widgets are kept separate from the desktop and only appear when you press fn+f12, to me this defeats the purpose of having widgets in the first place.

So I hear you ask, why not disable it? That's exact what I did and here is how. To disable the dashboard, open up your terminal and type:

```bash
defaults write com.apple.dashboard mcx-disabled -boolean YES
```

Then type the command below to push the change into effect.

```bash
killall Dock
```

To get back the dashboard just change YES to NO.

```bash
defaults write com.apple.dashboard mcx-disabled -boolean NO
```
