---
title: Deleting Old Tweets
author: Ben Shi
type: post
date: 2020-06-07T00:00:00+00:00
url: /deleting-old-tweets/
tags:
  - programming
  - twitter
  - history
---

I joined
[Twitter](https://twitter.com/) back in August 2007. At the time I was
18, in my final year of high school. I literally used twitter as an
outlet to vent all of my feelings, happy or sad. I dropped a few f bombs
here and there. I complained about various things like telcos, sydney
trains and broken electronics. I use it to talk/meet new people, in fact
I had a relationship with someone I met on twitter for about 4 years. I
literally tweeted about anything and everything.

Fast forward to 2020, we now live in a world where your past can come
back and haunt you, just about anyone can be a detective and dig through
your past. I had accumulated well over 30k tweets over the years and its
physically not possible to remember every one of them or every single
photo I have posted. There is one thing for sure, the old me was dumb
and naive. I actually don't mind the silliness and embarrassing selfies
but what I can not handle is an innocent tweet being turned into a
something more sinister. There is also an excellent TEDTalk "
[How one tweet can ruin your life](https://www.youtube.com/watch?v=wAIP6fI0NAI)"
by Jon Ronsons that talks about this. Its well worth a watch.

So how to delete tweets? You can do it manually via the UI and do it one
by one or use one of the are many services out there that would delete
your old timeline items. Most of them are on a freemium model such as
[tweetdelete](https://tweetdelete.net/),
[twitwipe](http://twitwipe.com/) and
[tweetdeleter](https://tweetdeleter.com/). Using these services requires
you to sign into your twitter account so please check their privacy
statements before using those services. Or finally you can write a
script like I did.

[delete-old-tweets](https://github.com/hbish/delete-old-tweets) is a
open-source script I wrote almost three years ago to go through your
twitter archives and remove the tweets from your timeline. You can
specify a cutoff date so any tweets before that date would be deleted
from your timeline. You can follow the instructions on the
[README.md](https://github.com/hbish/delete-old-tweets/blob/master/README.md).

![Ben Shi GIF](./benshi.gif)

Why the gif? This was actually a result of a series of prank wars in the
office with a former colleague, the person actually dug through my
twitter timeline all the way back till 2011 and found a series of
embarrassing selfies I took and stitched them together to make a
:benshi: gif. While I wasn't very happy about it at the time, we laugh
over it now.

Next time you post something on the internet, just remember

> Once on the internet, always stays on the internet.


