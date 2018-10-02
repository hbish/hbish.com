---
title: Reenabling Key Repeats in OSX Yosemite
author: ben
type: post
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

<pre class="lang:sh decode:true " >defaults write -g ApplePressAndHoldEnabled -bool false</pre>

In case you don&#8217;t like the delay with key repeats, you can remove it by running:

<pre class="lang:sh decode:true " >defaults write NSGlobalDomain KeyRepeat -int 0</pre>

and of course disable the annoying spell checker

<pre class="lang:sh decode:true " >defaults write NSGlobalDomain NSAutomaticSpellingCorrectionEnabled -bool false</pre>