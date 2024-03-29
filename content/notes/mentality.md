---
layout: layouts/base.njk
title: Mentality
description: Developer's Mentality
---

# Developer's Mentality

I work with various stacks and there's always room for improvement in most stacks, some setup's
might not be as developer friendly (developer experience wise) and these vary from stack to stack
so when working as a developer it's important to be ready to adapt to newer setup's , testing them out
and finding reason as to whether something can be used to improve the current workflow or not.

**Example**

I've been using `husky` for years now and the main issue is that devs with window's systems are never able to
fully use the husky setup. Sometimes the hook doesn't run, sometime's it just gets stuck.

This obviously ends up causing a lot of changes in the Merge Requests that I end up having to review just because
one developer's editor style was different than the other and each have their own formatter, thus the need for husky
and the need for handling staged files, I've written custom plugins for these and they are tedios to setup
so we now have a few projects that are experimenting with `lefthook` and if that works as expected, that'll be
migrated to other projects accordingly
