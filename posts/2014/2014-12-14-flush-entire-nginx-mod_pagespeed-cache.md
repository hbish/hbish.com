---
title: Flush entire nginx mod_pagespeed cache
author: ben
type: post
date: 2014-12-14T05:12:29+00:00
url: /flush-entire-nginx-mod_pagespeed-cache/
categories:
  - notes
tags:
  - cache
  - flushing cache
  - nginx
  - notes
  - pagespeed

---
While removing the entire cache folder is perfectly fine, according to [pagespeed docs][1], the safest way of doing so is to touch the cache.flush file.

    sudo touch /var/ngx_pagespeed_cache/cache.flush
    

Depending how your nginx installation is setup, you may need to make www-data the owner for this to make the magic happen.

    sudo chown www-data:www-data /var/ngx_pagespeed_cache/cache.flush

 [1]: https://developers.google.com/speed/pagespeed/module/system