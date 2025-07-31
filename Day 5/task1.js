//1.filter() - numbers > 10
const nums = [5, 12, 8, 130];
console.log(nums.filter(n => n > 10)); // [12, 130]

// 2. reduce() - sum, product, string
console.log(nums.reduce((a, b) => a + b));     // Sum: 155
console.log(nums.reduce((a, b) => a * b));     // Product: 62400
console.log(['Hi', 'there'].reduce((a, b) => a + ' ' + b)); // "Hi there"

// 3. slice() - extract without changing original
const fruits = ['apple', 'banana', 'cherry'];
console.log(fruits.slice(1, 3)); // ['banana', 'cherry']

// 4. splice() - remove/add elements
const items = ['one', 'two', 'three'];
items.splice(1, 1, 'new');
console.log(items); // ['one', 'new', 'three']

// 5. spread (...) - clone and merge arrays
const a = [1, 2], b = [3, 4];
const clone = [...a], merged = [...a, ...b];
console.log(clone);  // [1, 2]
console.log(merged); // [1, 2, 3, 4]

