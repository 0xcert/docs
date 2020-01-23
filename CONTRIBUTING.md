# Contributing

We are using VuePress to build the documentation pages. Files are built locally from `.md` files located in this repository and generated into a `/.vuepress/dist` folder.

First, navigate to the `.vuepress` directory and then install dependencies.

```sh
$ cd .vuepress
$ npm i
```

You can start VuePress in development mode.

```sh
$ npm run dev
```

You can build the documentation locally:

```sh
$ npm run build
```

You can deploy the documentation to GitHub pages:

```sh
$ npm run deploy
```