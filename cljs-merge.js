if (
  typeof module !== 'undefined' &&
  typeof module.exports !== 'undefined'
) {
	const { merge } = require("./cljs_dist/node/index")
	module.exports = { merge }
} 