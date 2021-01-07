## cljs-merge
'cljs-merge' recursively merges two jsons into a unified one, excluding null or undefined.

[![NPM Version][npm-image]][npm-url]


```javascript
const { merge } = require('cljs-merge')

const js1 = { k1: "v1", k2: "v2", k3: "v3" }
const js2 = { k1: "v1", k2: undefined, k4: "v4", k5: "v5", k6: null }

const res = merge({ src:js1, target: js2 })
console.log("res ==> ", res);
// res ==> { k1: 'v1', k2: 'v2', k3: 'v3', k4: 'v4', k5: 'v5' }
```

```javascript
const { merge } = require("cljs-merge")

const src = {	
	key1: "1",
	key2: "2",
	key3: "3",
	key4: "4",
	key5: {
		key22: null,
		key11: "10",
		key33: "30"
	},
	special: "BORA"
}

const target = {	
	key1: "10",
	key3: null,
	key4: "40",
	key5: {
		key11: null,
		key22: "200",
		key33: null
	}, 
	key6: "6", 
	quit: -1
}

const res = merge({ src, target })

console.log("res ==> ", res);
// res ==> 
// {	
// 	key1: "10",
// 	key2: "2",
// 	key3: "3",
// 	key4: "40"
//  key5: {
// 		key11: "10", 
// 		key22: "200", 
// 		key33: "30", 
// 	}
// 	key6: "6", 
// 	special: "BORA"
//  quit: -1
// }
```

## Installation for Node.js

This is a [Node.js](https://nodejs.org/en/) module available through the
[npm registry](https://www.npmjs.com/).

Before installing, [download and install Node.js](https://nodejs.org/en/download/).
Node.js 0.10 or higher is required.

If this is a brand new project, make sure to create a `package.json` first with
the [`npm init` command](https://docs.npmjs.com/creating-a-package-json-file).

Installation is done using the
[`npm install` command](https://docs.npmjs.com/getting-started/installing-npm-packages-locally):

```bash
$ npm install cljs-merge
```

## Installation for Web Browser 

CDN

```html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Document</title>
	<script src="https://cdn.jsdelivr.net/npm/cljs-merge@1.1.1/cljs_dist/core/web/cljs.js"></script>
	<script>
		const { merge } = cljs.merge.core
		
		const src = {
			k1: "v1",
			k2: "v2",
			k3: "v3"
		}
	
		const target = {
			k1: "v1",
			k2: undefined,
			k4: "v4",
			k5: "v5",
			k6: null
		}
	
		const res = merge({ src, target })
		
		console.log("res ==> ", res);
		// res ==> { k1: 'v1', k2: 'v2', k3: 'v3', k4: 'v4', k5: 'v5' }
	</script>
</head>
<body>
	
</body>
</html>
```

```html
	<script src="https://cdn.jsdelivr.net/npm/cljs-merge@1.1.1/cljs_dist/core/web/cljs.js"></script>
	<script>
		const { merge } = cljs.merge.core
		
		const src = {
			k1: "v1",
			k2: "v2",
			k3: "v3"
		}
	
		const target = {
			k1: "v1",
			k2: undefined,
			k4: "v4",
			k5: "v5",
			k6: null
		}
	
		const res = merge({ src, target })
		
		console.log("res ==> ", res);
		// res ==> { k1: 'v1', k2: 'v2', k3: 'v3', k4: 'v4', k5: 'v5' }
	</script>
```

## Contributing

[Contributing Guide](Contributing.md)

## License

[MIT](LICENSE)

[npm-image]: https://img.shields.io/npm/v/express.svg
[npm-url]: https://npmjs.org/package/express
