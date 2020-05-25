---
title: Reenabling Key Repeats in OSX Yosemite
author: Ben Shi
type: note
date: 2015-04-18T09:30:20+00:00
url: /reenabling-key-repeats-in-osx-yosemite/
categories:
  - notes
tags:
  - annoyance
  - osx
  - setup
  - yosemite
---

Apple has disabled key repeats by default in Yosemite. To enable, just run:

```bash
defaults write -g ApplePressAndHoldEnabled -bool false
```

In case you don't like the delay with key repeats, you can remove it by running:

```bash
defaults write NSGlobalDomain KeyRepeat -int 0
```

and of course disable the annoying spell checker

```bash
defaults write NSGlobalDomain NSAutomaticSpellingCorrectionEnabled -bool false
```
