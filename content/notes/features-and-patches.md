---
layout: layouts/base.njk
title: Features and Patches
description: Features and Patches
---

Here we have the specific processes to follow for handling the development of new features and bug fixes. While most of this is already explained in the git flow in a more simplified manner.

We'll go through this in detail here.

## Developing Features

If _adding_ a tiny new thing like a label/button click it can be raised as a PR and will be a part of the [Release Cycle](/notes/release-cycles).

If working on anything that adds as a bigger functionality which could anything that takes over a week or more it could be added behind a feature flag. How to implement this depends on the project you are in, and some of them already have these.

The feature flag's status decides if the feature is supposed to be enabled or disabled on the actual application. This holds true to
for all the apps (web, backend, mobile, etc).

Once this is done the normal deployment process of the app can be followed.

## Developing Patches and Hot Fixes

This should be rare and you need to make sure that this is a mitigation measure and not a permanent/immediate fix. This doesn't have to follow the feature flag rule but needs to be separated from the normal flow of branches.

When working with a hotfix or a patch, get the tag of the last release that has the bug and create a new branch `hotfix/release-v0.0.1` where `v0.0.1` is the last release tag that you are trying to fix.

Before adding anything to this branch, **make sure** the hotfix has been added to the next release cycle's merge request(s). Once done, cherry-pick the commit into the hotfix branch and request a deployment for this tag. Do tag this branch with the next release version so if the last release was `v0.0.1`, this would be patched as `v0.0.2`.

The remaining hotfixes are to be added similarly, though avoid having to go through this flow in the first place, be sure of what's going through the QA before being to released to the live environment.
