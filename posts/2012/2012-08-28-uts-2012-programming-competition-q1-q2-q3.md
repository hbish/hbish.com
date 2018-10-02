---
title: UTS 2012 Programming Competition – Q1, Q2, Q3
author: ben
type: post
date: 2012-08-28T07:48:27+00:00
url: /uts-2012-programming-competition-q1-q2-q3/
categories:
  - notes
tags:
  - exercise
  - java
  - programming
---

A couple weeks ago, I attended the [UTS Programming Competition][1] as a group of three. Although we didn&#8217;t go quiet as well but it wasn&#8217;t too bad either. We had four hours to solve as many questions from the 8 questions given and the time we took to solve them were accumulated into points. It was definitely an interesting experiences and I would definitely attend it again.

Below are the questions from this years Programming Competition and my solution for the first three questions implemented in Java. Will post up rest of my solutions in a another post.

**Question 1**

```java
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class problem1 {
  public static void main (String[] args) throws IOException {
    int n;

    BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
    n = Integer.parseInt(br.readLine());

    if (n &gt;= 1 || n &lt;= 80) {
      for (int i = 1; i &lt;= n; i++){
        for (int j = 0; j &lt; i; j++ ){
          System.out.print("*");
        }
        System.out.print("\n");
      }
    }
  }
}
```

**Question 2**

<pre><code class="java">import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class problem2 {
  public static void main (String[] args) throws IOException {
    int n;
    String s;

    BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

    while ((s = br.readLine()) != null) {
      n = Integer.parseInt(s);

      if (n &gt;= 1 || n &lt;= 9999999) {
        int sum = 0;
        int len = s.length();

        for (int i = 0; i &lt; len; i++) {
          sum += Character.getNumericValue(s.charAt(i));
        }
        if (n % sum == 0) {
          System.out.println(s + " GREAT JOY");
        } else {
          System.out.println(s + " sadness");
        }
      }
    }
  }
}
```

**Question 3**

<pre><code class="java">import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class problem3 {
  public static void main (String[] args) throws IOException {
    int nPages, nLines;
    String page, line;

    BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

    while ((page = br.readLine()) != null) {
      nPages = Integer.parseInt(page);

      if (nPages &gt;= 1 || nPages &lt;= 100) {
        for (int i = 0; i &lt; nPages; i++ ){
          nLines = Integer.parseInt(br.readLine());
          for (int j = 1; j &lt;= nLines; j++){
            line = br.readLine();
            if (line.toLowerCase().contains("molly")){
              System.out.println(j);
            }
          }
        }
        System.exit(0);
      }
    }
  }
}
```

 [1]: http://progsoc.org/wiki/UTS_Programming_Competition_2012
