---
title: 'Java Pet Peeves (#1 – String Concatenation)'
author: ben
type: note
date: 2012-08-27T07:50:10+00:00
url: /java-pet-peeves-1-string-concatenation/
categories:
  - notes
tags:
  - java
  - peeves
  - programming
---

This is one of my most hated thing in Java whenever a friend asked to have a look at their code and it has to do with String Concatenation. String concatenation is really easy in Java, all we do is add (+) string together but this has its pitfalls especially when you're concatenating amount of data. I remember on one occasion I saw something like this in one of my friends code to print out all of the user Ids from a database with more than 30000 entries.

```java
String uid, name;
sqlStatement = conn.prepareStatement("SELECT uid, name FROM Users");
conn = DriverManager.getConnection(url + db, user, pass);
ResultSet rs = sqlStatement.executeQuery();

while(rs.next()) {
  uid += (rs.getString(1) + "\r\n") ;
  name += (rs.getString(2) + "\r\n");
}
```

This is bad because we are appending a string to a existing one over and over. Lets go way back and see what the documentation says about the String object. According to the Java documentation, "_Strings are constant; their values cannot be changed after they are created._" or in other words String objects are immutable. So what really happens when we are changing the value of the String is that we are really creating new String objects and the variable gets referenced to it. So concatenating strings by appending it 'n' times we create 'n' new objects and ever time the old ones are dropped at runtime. This process is very time consuming and very CPU intensive. So what can we do about this? Well we can use StringBuilders (If unavailable use StringBuffers instead). I will explain the reasons for this below.

For large datasets we should always use StringBuilders due to its performance gain. Below is a really simple benchmark comparing the performance of a simple String.concat() vs. StringBuilder.append() vs. StringBuffer.append(). The result is in milliseconds (code is available below the article).

```java
String.concat() - 4354
StringBuffer.append() - 3
StringBuilder.append() - 2
```

You can see the result that String.concat() is horrendously slow, in fact its exponentially slower as the the amount of time you try to concatenate the string increases as larger objects are created as the string gets bigger.I think the only time you should use be using String.concat() is:

1. when you want readable code;
2. if you only have 2-3 operands; or
3. you're just too lazy to deal with Java's boilerplate codes.

But what about the differences between StringBuffer and StringBuilder? I think this is worth a post of its own, or you can play around with the code below and find out yourself.

```java
public class Strings {
  public static void main(String[] args) {
    int LIMIT = 30000;
    long t;

    {
      String s = "";
      t = System.currentTimeMillis();
      for (int i = LIMIT; i-- &gt; 0; ) {
        s += i;
      }
      System.out.println(System.currentTimeMillis() - t);
    }

    {
      StringBuffer sb = new StringBuffer();
      t = System.currentTimeMillis();
      for (int i = LIMIT; i-- &gt; 0; ) {
        sb.append(i);
      }
      System.out.println(System.currentTimeMillis() - t);
    }

    {
      StringBuilder sb = new StringBuilder();
      t = System.currentTimeMillis();
      for (int i = LIMIT; i-- &gt; 0; ) {
        sb.append(i);
      }
      System.out.println(System.currentTimeMillis() - t);
    }
  }
}
```
