---
layout: layouts/base.njk
title: NodeJS Basics
description: Node Basics
---

# Node Basics

### Node Version Management

We expect some form of node version management to be used, since different projects are on different
versions of node as they all were started / are being maintained from different points in the timeline of Fountane.

**Recommend**

- [NVM](https://github.com/nvm-sh/nvm)

**Other Options**

- [n](https://www.npmjs.com/package/n)

You can read more about this in [Workstation Setup](/workstation)

Most repositories come with a `.nvmrc` file and will specify the node version that the project expects. In these cases
just switch to the node version mentioned in the `.nvmrc` file.

```sh
nvm use # if the node version requested is already installed
# or
nvm install; nvm use # if the node version isn't already installed
```

### Package Manager

We prefer using `yarn` so please stick to it if you are creating a new project. Though in some cases a project might not have been from Fountane or was setup with a lead who preferred a different package manager. Please make sure you either modify the project to enable corepack or check what `.lock` files are present and use the respective manager instead.

**package-lock.json**

- If a `package-lock.json` was found, please use `npm install` and `npm` based commands.

**yarn.lock**

- If a `yarn.lock` was found, please use `yarn install` and `yarn` based commands.

If a combination of both was found, please consider checking the deployment process and validating if the deployment process uses
`yarn` or `npm`.

Once you've confirmed with package manager is being used, remove the other `lock` file and make sure you sync the lock file using a
`yarn install` or `npm install` accordingly.
