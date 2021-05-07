# Welcome to react-drupal-json-api 👋

[![Version](https://img.shields.io/npm/v/react-drupal-json-api.svg)](https://www.npmjs.com/package/react-drupal-json-api)
[![License: ISC](https://img.shields.io/badge/License-ISC-yellow.svg)](#)
[![Twitter: brockbalducci](https://img.shields.io/twitter/follow/brockbalducci.svg?style=social)](https://twitter.com/brockbalducci)

> A package of React.js hook(s) to easily **_fetch_** data from a headless Drupal instance using the Drupal JSON API module.

## Install

### NPM

```sh
npm install react-drupal-json-api
```

### Yarn

```sh
yarn add react-drupal-json-api
```

## Usage

```js
import { useDrupalJSONAPI } from "react-drupal-json-api";

let articlesData = await useDrupalJSONAPI({
  baseURL: "www.example.com",
  collection: "article",
  include: ["field_image", "uid"],
  sort: "title",
});
```

### Options

| Key        | Description                                                                                                                                                               | Required |
| ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------- |
| baseURL    | The address of your decoupled Drupal instance.                                                                                                                            | **Yes**  |
| collection | The collection name of the resources you would like to request. (article, post, person, etc.)                                                                             | **Yes**  |
| include    | The names of the relationship fields you would like to include.                                                                                                           | No       |
| sort       | The field (and direction) you would like your data sorted by. (i.e. "title" would sort alphabetically by title while "-created" would sort reversely by date of creation) | No       |

## Issues

Please report all bugs, issues, and feature requests [here](https://github.com/devbrock/react-drupal-json-api/issues).

## Author

👤 **Brock Balducci**

- Website: github.com/devbrock
- Twitter: [@brockbalducci](https://twitter.com/brockbalducci)
- Github: [@devbrock](https://github.com/devbrock)

---

## Show your support

Give a ⭐️ if this project helped you!
