---
title: The “Let’s just code” mentality
author: ben
type: post
date: 2013-10-29T07:58:03+00:00
url: /the-lets-just-code-mentality/
categories:
  - opinion
tags:
  - agile
  - coding
  - programming
  - software development
---

As developers, I think the biggest mistake we make is to jump straight into coding.

I have just finished a 5-week long graduate training course in London. Of which, 2 of these weeks was dedicated specifically to a group project to design and implement a simple automated trading system. All the requirements have been clearly laid out along with it acceptance criteria and priorities.

And what do you know, just like most other teams, we jumped straight into coding. We did not have any design or a clear understanding of the system flow. We virtually got no-where after about a day and a half of work, just a bunch of skeleton code that followed a MVVP (whatever that is) pattern someone in the team had thought up.

After realising our mistake about a day or so later, I took charge of the technical side of the project and opted a complete rewrite of what we have already got. Now this idea of a complete rewrite was not well received within the team for obvious reasons, but I manage to get my points across. After about an hour, I was able to get the basic connections, queuing and structure of the code ready.

I was able to do this because while the other developers were getting their hands dirty, I spent the whole time understanding the problem, drawing out potential designs and breaking components up into manageable modules. We manage to get over the line in the end.

Now how did this whole "rewrite" come about? I think it can be attributed to a few things.

### 1. People wanting to impress

Especially in a environment like what I was in. It is obvious that everyone there, wanted to be the next superstar developer and impress at the training. I mean which graduate doesn’t think they are the next big shot developer of the company? Let's face it; some grads are the most ego-driven bunch of people who think they can run the town (I know because I used to be like this too).

What tends to happen in these cases is that they crack under pressure by taking on too much. Coding a university assignment is very different from designing a system where you have to consider a lot of system qualities. You simply do not learn enough real-world examples from universities.

### 2. Code is like cake

Really, think about it. Developers love coding. It is their comfort zone; there is nothing they would rather do than to code. Therefore there is always an innate desire to jump straight into implementation before understanding the actual problem.

Divvy up the cake before you eat it. Or else it might get really messy and you will need to clean up afterwards.

### 3. Death by design patterns

I think another mistake we had was opting with a design pattern early on in the project. By doing so with out proper planning the system will grow in a evolutionary design environment where Martin Fowler [defined][1] it as "_The design ends up being the aggregation of a bunch of ad-hoc tactical decisions, each of which makes the code harder to alter_".

So rather than thinking of a design pattern that will encapsulate the project in what we currently think the end state should be. We should take a planned designed approach where we use what we have at hand and come up with the simplest solution possible and at the same time be modular and flexible to change.

This was my summary of what has happened throughout the course of my project whilst on training. I have definitely learnt a lot about system design, agile and collaboration. I will have more articles in the coming weeks about those specific areas.

[1]: https://martinfowler.com/articles/designDead.html#PlannedAndEvolutionaryDesign
