# Bookmarkify

Turn JS into a HTML for a bookmarklet

## Install

```sh
npm install -g bookmarkify
```

## Command Line Usage

```sh
bookmarkify source.js label > bookmarklet.js
```

## API

```js
const bookmarkify = require('bookmarkify')
const html = bookmarkify(file, label)
```

