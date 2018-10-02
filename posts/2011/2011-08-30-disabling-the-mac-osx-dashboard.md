---
title: Disabling the Mac OSX Dashboard
author: ben
type: post
date: 2011-08-30T06:58:18+00:00
url: /disabling-the-mac-osx-dashboard/
categories:
  - notes
tags:
  - bash
  - osx

---
I never liked the idea of widgets in Windows and I don&#8217;t intend to start liking them when I&#8217;m using OSX. In OSX widgets are kept separate from the desktop and only appear when you press fn+f12, to me this defeats the purpose of having widgets in the first place.

So I hear you ask, why not disable it? That&#8217;s exact what I did and here is how. To disable the dashboard, open up your terminal and type:

```shell
defaults write com.apple.dashboard mcx-disabled -boolean YES 
```

Then type the command below to push the change into effect.

```shell
killall Dock
```

To get back the dashboard just change YES to NO.

```shell
defaults write com.apple.dashboard mcx-disabled -boolean NO
```

