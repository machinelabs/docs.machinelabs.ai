---
title: Using the CLI
type: guide
order: 5
---

Creating and running labs on [machinelabs.ai](https://machinelabs.ai) is great. Sometimes however, we prefer to start our experiments on our local machines, or, we have an existing project that we'd like to import into MachineLabs to run it there.

The MachineLabs CLI makes it easy to create new labs, import existing projects, as well as pulling labs from the MachineLabs platform - all that without leaving your terminal!

## Prerequisites

Before we get started looking into how to use the CLI, make sure you have the following things installed on your machine:

- [Node](https://nodejs.org/en/download/)
- npm - Comes with Node
- [yarn](https://yarnpkg.com/en/) - Only if that's your preferred package manager

## Installation

The MachineLabs CLI can be easily installed using your package manager of choice. We recommend installing it globally so you can use the `ml` command in your entire system.

If you're using **npm**, run the following command to install the CLI:

```
$ npm install -g @machinelabs/cli
```

As a **yarn** user, the command would be:

```
$ yarn global add @machinelabds/cli
```

That's it! You should now have the `ml` command globally available on your machine. Feel free to verify everything went smooth by running the `ml` command like this:

```
$ ml
```

Which should give you an output that looks like this:

```
Usage: ml [options] [command]


Options:

  -V, --version  output the version number
  -h, --help     output usage information


Commands:

  login           Login to MachineLabs
  logout          Log the CLI out from MachineLabs
  push [options]  Push current directory as a lab 
  init [options]  Initialize current directory as lab
  pull [options]  Pull existing lab to your local file system

```

Great! Let's create our first lab using the MachineLabs CLI!

## Authentication

In order to push and pull labs to and from the MachineLabs platform, we need to be authenticated at some point. The CLI offers a `login` and `logout` command respectively.

#### Logging in

To login into MachineLabs with the CLI, simply run

```
$ ml login
```

This will open up your default browser with a handshake screen that asks you for permission to let the CLI authenticate as you. "You" in this case is whoever is authenticated (logged in) at MachineLabs in the browser. So make sure to be logged in in the web before logging in with the CLI. The browser will also show you a hash that should match the one that is output by the CLI. Make sure to only confirm the handshake when the hash in the browser window matches the one in your terminal.

<p class="tip"><strong>Important:</strong> Only confirm the handshake if the shown hash matches the one in your terminal.</p>

#### Logging out

Logging out from MachineLabs with the CLI is as simple as running the `logout` command without further action:

```
$ ml logout
```

## Initializing Labs

Once logged in, we can start interacting with the CLI. There are several scenarios where initializing a lab might be want we want. We either start a new project and have to initialize it eventually, so we can push it to the MachineLabs platform, or we already have an existing project we'd like to run on MachineLabs. For the latter, the CLI comes in very handy.

To initialize a new or existing project, all we have to do is navigating into the projects folder and use the `init` command:

```
$ cd path/to/project
$ ml init
```

This will create an `ml.yaml` file for our project, which is required to run a lab on MachineLabs. If our project already comes with an `ml.yaml` configuration file and we wish to override it, we can use the `--force` option:

```
$ ml init --force
```

If you want to learn more about what can be configured in a lab's `ml.yaml` file, head over to our guide on [Configuring Labs](configuring-labs.html).

Alright, now that our project is initialized, we can push it up on MachineLabs to execute it there!

## Saving and updating Labs

Whether we're creating a new lab or taking an existing project, eventually, we want to push whatever we have and run it on the MachineLabs platform. That's where the CLI's `push` command comes into play. It lets either update a lab we own, or push an entirely new one, which will then be available on the web.

#### Saving new Labs

To create a new lab, we run the `push` command from within our project folder. This will also create a new id for our lab and write it to the projects `ml.yaml` file. We should also give it a `name` and a `description` using the dedicated options, so people on MachineLabs can easier understand what our lab is about:

```
$ ml push --name "My first lab" --description "This is my first lab, created using the CLI"
```

Note that as of right now, every lab needs a `main.py` file so it can be pushed to MachineLabs.

Once pushed, the CLI will give us a link which points to the lab on MachineLabs - cool right?

#### Updating Labs

Often we want to update our labs on MachineLabs with the changes we've done on our local machine. The `push` command makes this possible as well. In fact, all we need to do is running the push command again and it'll take whatever is in the current project and update the lab on MachineLabs witht he id that is in the project's `ml.yaml`.

In case there's no lab id in the projects `ml.yaml`, we can pass the `id` option explicitly when we push our changes So assuming we've changed the contents of our project's `main.py` and our lab's id is `4711`, we can either simply run `ml push` or pass the `id` option like this:

```
$ ml push --id 4711
```

Keep in mind that pushing changes to MachineLabs will override your lab and previous versions will be gone. If you want to keep version control of your projects, use [Git](https://git-scm.com) in combination with MachineLabs.

## Cloning existing labs

Ever wanted to take a lab from one of your peers and fiddle with it on your local machine? We can use the CLI's `pull` command to clone labs to our machines. Let's say we want to play around with MachineLabs [Neural Style Transfer Demo](https://machinelabs.ai/editor/rJQrQ5wjZ/1506415557004-HkTTQ5Dob?file=ml.yaml&tab=editor). All we have to do is using the `pull` command and give it the `id` of the lab we're interested in:

```
$ ml pull --id rJQrQ5wjZ
```

This will pull the lab into the current directory. If we wish to pull it into a different directory, we can easily configure it using the `directory` option like this:

```
$ ml pull --id rJQrQ5wjZ --directory path/to/folder
```

We can now access the code on our local machine!

