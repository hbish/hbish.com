---
title: ffmpeg one liners
author: ben
type: post
date: 2012-10-02T07:51:14+00:00
url: /ffmpeg-one-liners/
categories:
  - notes
tags:
  - ffmpeg
  - tips
  - unix

---
[ffmpeg][1] is a cross-platform library for videos and audio files.

ffmpeg just hit version 1.0 couple days ago and I thought its a good time to blog about some useful one liners I use every now and then.

```shell
# Get infomation for a audio/video
ffmpeg -i file.mp3
```

```shell
# Convert video into images
ffmpeg -i video.avi image_output%d.jpg
```

```shell
# Split audio files
# Generate a section of the audio from the 30 second mark (start) for 15 seconds (duration)
ffmpeg -f mp3 -i input.mp3 -t 00:00:30 -ss 00:00:15 output.mp3
```

```shell
# Covert avi to animated gif
ffmpeg -i video.avi output.gif
```

```shell
# Add audio to a video file
ffmpeg -i music.mp3 -i video.avi output.mpg
```

```shell
# Extract audio from video file"&gt;## Useful for extracting music from youtube videos
# avi to mp3
ffmpeg -i video.avi -vn -ar 44100 -ac 2 -ab 192k -f mp3 output.mp3

# flv to mp3
ffmpeg -i video.flv -ar 44100 -ac 2 -ab 192k -f mp3 output.mp3
```

 [1]: http://ffmpeg.org/