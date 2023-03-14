---
layout: layouts/base.njk
title: Welcome
description: Handbook
eleventyImport:
  collections: ["posts"]
---

## Hey Developer

If you've been sent here by the [Fountane](https://fountane.com) Team, then
firstly, **A huge welcome to the team!** If not, that's fine, you can still read this, I grant you the needed permissions.

The handbook is based off of learnings and changes in process that I've
implemented in my own development workflow over the years and is what I wish
to share with you so we can maintain consistency while working together.

<p className='font-bold dark:text-zinc-50'>
	Here's the things we'll be going through :-
</p>

<ul>

{%- for note in collections.notes | reverse -%}

  <li><a href="{{ note.url }}">{{ note.data.title }}</a></li>
{%- endfor -%}
