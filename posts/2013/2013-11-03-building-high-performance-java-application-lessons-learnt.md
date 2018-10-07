---
title: Building high performance Java application (Lessons Learnt)
author: ben
type: post
date: 2013-11-03T08:00:13+00:00
url: /building-high-performance-java-application-lessons-learnt/
categories:
  - notes
tags:
  - heap space
  - java
  - multithreading
  - performance
  - tuning
---

Whilst on training abroad last month, I had the opportunity of building an automated rates trading system in Java from scratch to compete with systems built by the other teams.

Surprisingly, this opportunity has turned out to be a great learning experience for me building a high performance application. My team did well in terms of performance and here are some of the lessons I learnt in the 2 weeks.

## 1. Monetary Calculations

- Try to use `long`/`double` instead of `BigDecimal` for monetary calculation
- Round result of multiplication/division calculation to the smallest currency unit
- Don't convert `double` to `BigDecimal`, convert using a `string` instead

## 2. Caching

- Cache frequently used information to minimise computation
- If possible or too lazy to implement from scratch, use (link: https://code.google.com/p/guava-libraries/wiki/CachesExplained text: Google Guava)

## 3. Listeners

- Keep listeners light
- Hand events to another part of the system for processing

## 3. Multi-Threading

- Thread creation is expensive
- Use threadpools
- Avoid `synchronisation` where possible
- Have flow control to regulate the amount of threads
- Fork-Join in 1.7 (or (link: http://g.oswego.edu/dl/concurrency-interest/ text: jsr166) in 1.6)

## 4. Java Specifics

- When using `LinkedList`, add/remove elements from the end
- Avoid `ConcurrentHashMap`, Use (link: https://github.com/boundary/high-scale-lib text: `NonBlockingHashMap`) instead
- Use LinkedBlockingQueue and ArrayBlockingQueue if you are polling for objects
- (link: http://lmax-exchange.github.io/disruptor/ text: `Disruptors`) are faster
- Enable server flag

```bash
java -server
```

- Enable fast (link: http://hbish.com/blog/Java-pet-peeves-1-string-concatenation text: string concatenation)

```bash
java -XX:+OptimizeStringConcat
```

## 5. Garbage Collection (GC)

- GC can be expensive in a high throughput/low latency app
- Minimise object creation within loops
- Out-of-the-box GC options sucks! Reduce collection time and numbers by using a different collection method and optimising those options ((link: http://www.oracle.com/technetwork/java/javase/gc-tuning-6-140523.html text: Oracle Doc))
- Static heap size

## 6. Benchmark

- Do it regularly (if possible, at the end of every sprint in agile)
- Look for performance consistencies from historical benchmark
- Use jvisualvm and visual GC plugin
- Enable GC monitoring options

```bash
java -verbose:gc -Xloggc:<filename>
-XX:+PrintGCDetails
-XX:+PrintGCDateStamps
-XX:+PrintTenuringDistribution
-XX:+PrintGCApplicationConcurrentTime
-XX:+PrintGCApplicationStoppedTime
```
