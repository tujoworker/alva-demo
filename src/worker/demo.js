// import worker from 'workerize-loader!./worker'
//
// // https://github.com/developit/workerize-loader
// let instance = worker() // `new` is optional
//
// instance.expensive(1000).then(count => {
//   console.log(`Ran ${count} loops`)
// })

import workerize from 'workerize'

let worker = workerize(`
	export function add(a, b) {
		// block for half a second to demonstrate asynchronicity
		let start = Date.now();
		while (Date.now()-start < 250);
		return a + b;
	}
`)
;(async () => {
  console.log('3 + 9 = ', await worker.add(3, 9))
  console.log('1 + 2 = ', await worker.add(1, 2))
})()
