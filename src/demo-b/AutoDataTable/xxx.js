import * as test1 from './testImport1.js'
import * as test2 from './testImport2.js'

let test = Object.assign(test1, test2);
console.log(test);

test.test1();
test2.test2();




