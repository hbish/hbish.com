---
title: Reversing a string without temp variables or library functions
author: ben
type: post
date: 2012-08-23T07:44:24+00:00
url: /reversing-a-string-without-temp-variables-or-library-functions/
categories:
  - notes
tags:
  - exercise
  - java
  - programming

---
So yesterday my friend [Jimmy][1] asked me to reverse a string while we were in one of the computers labs at uni. At first I thought &#8220;hey, isn&#8217;t this like really simple and straightforward, could just use a StringBuffer?&#8221;. Then Jimmy said &#8220;You can&#8217;t use any library functions or temporary variables&#8221;. I thought for a second and said &#8220;you can do it with arrays&#8221; and surely you can definitely do it with arrays as shown by one of our other friend Kevin.

But was that was messy and surely it wasn&#8217;t the only solutions. Like many programming problems, this isn&#8217;t!

I figured this can be done with a little bit of looping and string manipulation (Note: implementation is in Java). As shown in **line 25-27**, I looped through the string and reassembled it n times. The reassembling is actually quiet tricky because I reconstructed the original string by cutting and carefully rearranging it every loop. This solution is pretty messy and hard to comprehend without a pen and paper to follow through with it (well at least for me).

It was just past 10 o&#8217;clock and I looked at the clock on the top right of my MBP. The time was 10:01 pm, then all of a sudden an idea struck me, I could have just reverse the string using a reverse loop, append it to the original string and cut the palindromic string leaving only the latter half. This solution (**line 33-36**) was much simpler and easier to remember.

Can&#8217;t believe something so simple took me this long to think up. Thank you **palindrome**!

<pre><code class="java">import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class reverseString {
  public static void main (String[] args) {

    String s = null;
    int length = 0;

    System.out.print("Enter a string: ");
    BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

    try {
      s = br.readLine();
    } catch (IOException ioe) {
      System.out.println("IO error");
      System.exit(1);
    }

    length = s.length();
    System.out.println("Initial String " + s);

    //Reverse
    for (int i = 0; i &lt; length; i++){
     s = (s.substring(1, s.length() - i) + s.charAt(0) + s.substring(s.length() - i));
    }

    System.out.println("Reversed String " + s);

    //Reversing is back to original
    // -- Decided to be smart about it
    for (int i = (length - 1); i &gt;= 0; i--){
      s += s.charAt(i);
    }
    s = s.substring(length);

    System.out.println("Reverted String " + s);
  }
}
```

 [1]: http://blaytenshi.net/