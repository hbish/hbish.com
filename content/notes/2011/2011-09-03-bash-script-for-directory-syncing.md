---
title: Bash Script for Directory Syncing
author: ben
type: note
date: 2011-09-03T07:01:15+00:00
url: /bash-script-for-directory-syncing/
categories:
  - notes
tags:
  - backup
  - sync
  - unix
---

Text: Found it on archlinux forum earlier tonight. This bash script will only sync one way, so it will come in handy during backup or offloading data from my old servers. I mean if I ever wanted bi-directional syncing, there is always (link: https://everythinglinux.org/rsync/ text: rsync).

To sync, just run:

```bash
esync.sh -y Dir1 Dir2
```

Download: (link: https://www.doomicide.1x.net/scripts/esync.sh text: esync.sh)

Source: (link: https://bbs.archlinux.org/viewtopic.php?id=12557)
