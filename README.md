# simple-getter-setter.js

The simple getter-setter function.
This library is inspired to the [Mithril.js's m.prop function](http://mithril.js.org/mithril.prop.html).

## Install

```
$ npm install --save-dev simple-getter-setter
```

## Example

```javascript
const prop = require('simple-getter-setter');

const name = prop('foo');
name();  // foo
name('bar');  // bar
name();  // bar
JSON.stringify(name);  // '"bar"'
```

## LICENCE

[MIT](https://opensource.org/licenses/MIT)
