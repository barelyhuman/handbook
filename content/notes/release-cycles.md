---
layout: layouts/base.njk
title: Release Cycles
description: Release Cycles
---

Release cycles are basically maintain differences between environments (Dev, Staging, Production).

A simple way is to do releases every 2 weeks.

## Tagging

A simple way to do this it to create git tags to maintain versions per commit. This can get tedious if multiple people are working on multiple branches and tag each branch so it's easier to just have one branch that maintains the tags.

Simplest way is to manage the tags on a base branch like `master`

## SemVer

The basic followed versioning system is called Semantic Versioning (SemVer for short). We prefer using this method for most of the applications.
Each version can be tagged onto a git commit like so.

```sh
$ git tag v0.0.1
```

Where `0.0.1` defines the semantic version. You can read more about it from the official spec [here](https://semver.org/)

The following can be used in conjuction with tools like commitlint and changesets to generate automatic semvers for you though it's not something we wish to enforce since there's various cases where a commit might not strictly follow `commitlint` or `standard-commit` standards and would cause issues with the auto generated semvers being wrong.

It's much more preferred to just use `npm version <patch|minor|major>` instead if working with a nodejs project
or some other generic tool that can maintain version for you.
