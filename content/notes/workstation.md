---
layout: layouts/base.njk
title: Workstation Setup
description: Setting up your workstation
---

# Workstation Setup

## Install base set packages

**On MAC OS X**

- Install [homebrew](https://brew.sh/) and then

```sh
brew install git
brew install wget
```

**On Ubuntu**

```sh
apt install build-essential
apt install git
apt install wget
```

### Install NVM and node version 12 (minimum)

```sh
touch ~/.bash_profile
wget -qO- https://raw.githubusercontent.com/creationix/nvm/v0.32.1/install.sh | bash
source ~/.bash_profile
nvm install 12
nvm install 14
nvm install 16
nvm use 12
nvm alias default 12
```

### Install global packages

```sh
npm install -g yarn nodemon
```

### Install local dependencies from project directory

```sh
npm i
#or
yarn install
```

### Docker

Majority projects contain a `Dockerfile` and a `docker-compose.yml` file that can be
used to orchestrate docker containers on the go, which is what is recommended, so based your system download and install `docker` and `docker compose`

- Mac OS X / Windows => Download and install Docker Desktop
- Linux => Use your system package manager to install the community version of `docker` and `docker-compose` (>= 2.0.0)

### Databases

If working with a project that needs a local postgres database, look through the config to see the development configuration and create the database with the needed users

**But** it is recommend to just use docker to create these databases and use them to avoid having to deal with various postgres version and different user roles
