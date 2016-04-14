# Quick Start Install

Make sure you've installed Node.js - We recommend the latest **Node v0.10.x** release. For other versions [click here](http://support.ghost.org/supported-node-versions/). May contain nuts.

1. Download the [latest release](https://ghost.org/download/) of Ghost
1. Unzip in the location you want to install
1. Fire up a terminal
1. `npm install --production`
1. Go to `content/themes/reconfirm` and do a `grunt build`
1. Start Ghost! (from ghost root folder)
    - Local environment: `npm start`
    - On a server: `npm start --production`
1. `http://localhost:2368/ghost` :tada:


# Developer Install (from git)

Install Node.js. (See [Supported Node.js versions](http://support.ghost.org/supported-node-versions/))

```bash
# Node v0.10.x - recommended
# Node v0.12.x and v4.2+ LTS - supported
#
# Choose wisely
```

Clone :ghost:

```bash
git clone git://github.com/tryghost/ghost.git
cd ghost
```

Install grunt. No prizes here.

```bash
npm install -g grunt-cli
```

Install Ghost. If you're running locally, use [master](https://github.com/TryGhost/Ghost/tree/master). For production, use [stable](https://github.com/TryGhost/Ghost/tree/stable). :no_entry_sign::rocket::microscope:

```bash
npm install
```

Build the things!

```bash
grunt init
```

We have a custom theme!
Go to content/themes/reconfirm and do a


```bash
grunt build
```

We also have search! But for the search to work, you need to add a post with the name `search` and make it a static page ( using the ghost editor)

For adding downloadable files to a post, insert the following code in the editor, and change the `URL_TO_FILE` parameter to the file location.
```bash
<button class="download-button" data-toggle="modal" data-target="#download-modal" data-download-url="URL_TO_FILE"><i class="fa fa-download"></i>Download now</button>
## e.g. for URL_TO_FILE: http://cdn.datavalidation.com/DV_casestudy_Funky-Christmas-Sweaters.pdf
```

By default, images inserted into a post are full width.
In order to have smaller images, we have these classes: `height-500`, `height-400` `height-300`, which can be used like this:
```bash
<div class="height-500">
  ![planuri](/content/images/2016/04/some_image.png)
</div>
```


Minify that shit for production?

```bash
grunt prod
```

Start your engines.

```bash
npm start

## running production? Add --production
```

Congrats! You made it. BTW you can also just `npm install ghost` if you're into that sort of thing. NPM aficionados can also read up on using [Ghost as an NPM module](https://github.com/TryGhost/Ghost/wiki/Using-Ghost-as-an-npm-module).

More general [install docs](http://support.ghost.org/installation/) here in case you got stuck.


# Deploying Ghost

[Other options](http://support.ghost.org/deploying-ghost/) are also available if you prefer playing around with servers by yourself.


# Staying Up to Date

When a new version of Ghost comes out, you'll want to look over these [upgrade instructions](http://support.ghost.org/how-to-upgrade/) for what to do next.

You can talk to other Ghost users and developers in our [public Slack team](https://ghost.org/slack/) (it's pretty awesome). We have a public meeting every Tuesday at 5:30pm UK time.

New releases are announced on the [dev blog](http://dev.ghost.org/tag/releases/). You can subscribe by email or follow [@TryGhost_Dev](https://twitter.com/tryghost_dev) on Twitter, if you prefer your updates bite-sized and facetious.

:saxophone::turtle:


# Copyright & License

Copyright (c) 2013-2016 Ghost Foundation - Released under the [MIT license](LICENSE).
