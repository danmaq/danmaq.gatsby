---
title: Stop WordPress and start Jekyll!
post_id: '8783'
date: '2017-02-09T22:19:26+09:00'
draft: false
cover: ../../../assets/misc/2017-wp-to-jekyll.png
tags:
  - release
  - diary
  - jekyll
  - wordpress
---

Hi guys.

Well, from the end of this month to the beginning of March, I will transfer the blog system of danmaq.com from WordPress to Jekyll!

## Why is the blog update frequency low?

I tried thinking about various reasons, such as I am not good at long blogging such a long sentence, or habitat isolation with Twitter is not good, The reason for being most comfortable is as follows.

* **It is hassle to open a browser for editing**
* Sometimes WordPress's editor does not like it, but **the browser's TextArea is not suitable for editing,** though.
* I want use Markdown!
* I'm going out a lot and the WordPress rich UI is painful in an environment where the mobile line is thin.

It is a story that if the blue bird flies swiftly and feels sweet aside when riding in the VW car which tends to be stalled with tattered bugs, I want going to go over there. (It is troublesome to launch even the Twitter application recently. So I tweet using Siri)

So, if you do not open the browser, edit with only vim and terminal and push the article to GitHub, I think that Jenkins who is hanging on the server hooks and posts to WordPress without permission It was.　Then I got such a tweet so I'd like to use Jekyll immediately! I thought it was.

> [I feel that](https://twitter.com/danmaq) @ [danmaq](https://twitter.com/danmaq) hexo or jekyll was a similar mechanism, is there a feeling that it is unlikely to meet the requirement?
> 
> \- Sai (@ saigyojiyu) [January 10, 2017](https://twitter.com/saigyojiyu/status/818766546700861441)

## Why I want to move to Jekyll

* As mentioned above, you can contribute blogs in cooperation with Jenkins → GitHub Pages with `git push` one shot
* I can post with **vim and terminal without browser** !
* Better yet, once relocating danmaq.com to GitHub Pages, you can barely halt restrictions on rental servers
* Unlike WordPress it's a static page so it looks light! (By the way, danmaq.com was a static blog until 2011 ... but it's all manually!)
* Markdown It's easy to edit because it is standard compliant!
* Jekyll is about seven years better than WordPress!
* Depending on frenzy I feel like I can post posting linked with SNS! (I can do it even in WordPress, but too unstable)

## Reason why I do not want to move to Jekyll

* Initial cost of introduction. Although it does not cost money, it requires technology beyond introducing WordPress on its own.
* It is necessary to prepare oneself something like Makefile like build when it is called. 
    → if only I can endure it!

Therefore, pages may be under construction from the end of this month, but please pardon our understanding!
