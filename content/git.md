---
layout: layouts/base.njk
title: Git Flow
description: How to use git and it's basics
crumbs: [{ title: "Git Flow", href: "#" }]
---

# Git Setup

- Setup SSH Keys: https://help.github.com/articles/generating-ssh-keys/

## Git Guidelines

- Keep logical commits and code formatting commits separate.
- Proper commit message is a must.
- Make your commits at most granular level. Make frequent commits with little code changes rather than seldom commits with huge code change.
- Do not use https for auth. Always rely on ssh.
- Make sure your code goes through the development and testing branches before it is merged into stable
- Make sure you get your code reviewed before merging to stable.
- stable branch should always be the tried and tested code branch consider it your production server
- Never force push on a remote branch that's being worked on by multiple people
- Do not merge your branch in master locally. Always create a pull request.
- Create different branches for different features. This will help in reducing features inter-dependnce at the time of deployment.
- Never force-push a branch to server

## Frequently used git command set

Before starting work on a new feature, make sure to switch to stable branch and pull the latest code.
Create a new branch from it locally and push to server, if the feature you plan to work on is dependent on an
existing branch waiting for review, use that branch as your base

```sh
git checkout stable
git pull origin stable
git checkout -b feature-abc
git push -u origin feature-abc
```

To see your unstaged changes

```
git diff
```

To get latest code from master branch into your branch, rebase!

```sh
git checkout master
git pull --rebase
git checkout feature-abc

# then merge
git merge master
```

You can also do a local merge from master branch to your feature branch. Make sure to never do this merge on server.

```sh
git merge master
```

To store uncommited changes locally, stash them , instead of creating a incomplete commit

```sh
git stash
```

Pop the last stash to restore the stashed changes

```
git stash pop
```

To push your changes to server

```
git push origin feature-abc
```
