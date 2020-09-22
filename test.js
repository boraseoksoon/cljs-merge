const { merge } = require('./cljs-merge')

const js1 = { k1: "v1", k2: "v2", k3: "v3" }
const js2 = { k1: "v1", k2: undefined, k4: "v4", k5: "v5", k6: null }

const res = merge({src:js1, target: js2})
console.log("res => ", res);
