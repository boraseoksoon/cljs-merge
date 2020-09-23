if (
  typeof module !== 'undefined' &&
  typeof module.exports !== 'undefined'
) {
	const { merge } = require("./cljs_dist/node/index")
	module.exports = { merge }
} 

// const js1 = { k1:1 "v1", k2: "v2", k3: "v3" }
// const js2 = { k1: "v1", k2: undefined, k4: "v4", k5: "v5", k6: null }

// const res = merge({src:js1, target: js2})

// console.log(res);

// { k1: 'v1', k2: 'v2', k3: 'v3', k4: 'v4', k5: 'v5' }

/**
 * Another Example
 */

// const json1 = {	
// 	key1: "1",
// 	key2: "2",
// 	key3: "3",
// 	key4: "4",
// 	key5: {
// 		key22: null,
// 		key11: "10",
// 		key33: "30"
// 	},
// 	special: "BORA"
// }
// const json2 = {	
// 	key1: "10",
// 	key3: null,
// 	key4: "40",
// 	key5: {
// 		key11: null,
// 		key22: "200",
// 		key33: null
// 	}, 
// 	key6: "6", 
// 	quit: -1
// }

// const res = merge({src:json1, target:json2}, { unless:undefined })
// console.log("res : ", res) 

// res => 

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