# Welcome to react-drupal-json-api 👋

[![Version](https://img.shields.io/npm/v/react-drupal-json-api.svg)](https://www.npmjs.com/package/react-drupal-json-api)
[![License: ISC](https://img.shields.io/badge/License-ISC-yellow.svg)](#)
[![Twitter: brockbalducci](https://img.shields.io/twitter/follow/brockbalducci.svg?style=social)](https://twitter.com/brockbalducci)

> A package of React.js hook(s) to easily **_fetch_** data from a headless Drupal instance using the Drupal JSON API module.

## Install

### NPM

```sh
NPM install react-drupal-json-api
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
  apiBase: "api", //optional: defaults to jsonapi
  collection: "article",
  include: ["field_image"],
  sort: "created",
});
```

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
