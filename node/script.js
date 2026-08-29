// let n=5;
// for(let i=1;i<=n;i++){
//     console.log("hello",i);
// }
// console.log(process.argv);


// let args= process.argv;
// for(let i=2;i<args.length;i++){
//     console.log("hello to " + args[i]);
// }

const math = require('./math.js');
console.log(math.compoundInterest(1000, 0.05, 4, 5));