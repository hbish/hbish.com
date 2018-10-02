---
title: Share linux folders using NFS
author: ben
type: post
date: 2016-03-13T05:25:21+00:00
url: /share-linux-mounts-using-nfs/
categories:
  - notes
tags:
  - debian
  - linux
  - mounts
  - nfs

---
I&#8217;ve moved all my disk mounts on my HP Proliant Server over from Samba to NFS.

The steps below are for a simple setup used in my own home and by no means secure.

### Install NFS

<pre class="lang:sh decode:true " >sudo apt-get install rpcbind nfs-kernel-server</pre>

### Setup Configuration File

<pre class="lang:sh decode:true " >sudo vim /etc/exports

# Added the following line to the file (add additional lines for new shares)
#
# - Path to share: replace with path you'd like to share e.g. /mnt/shareme
# - Client ip or subnet: replace with the ip address of the client or a collection of ip address using subnet masks e.g. 10.1.1.1 or 10.1.1.0/24
# - YYYY: anonuid = maps all anonymous connections to a uid local to the server
# - ZZZZ: anongid = maps all anonymous connections to a gid local to the server

&lt;path to share> &lt;client ip or subnet>(rw,sync,no_subtree_check,insecure,anonuid=&lt;YYYY>,anongid=&lt;ZZZZ>)</pre>

### Restart NFS Server

<pre class="lang:sh decode:true " >sudo service nfs-kernel-server restart</pre>

Additional Info: <https://help.ubuntu.com/community/SettingUpNFSHowTo>