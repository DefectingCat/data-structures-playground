import Queue from './Queue';

const myQ = new Queue([1, 2, 3, 4, 5]);

myQ.map((item) => console.log(item));
console.log(myQ);
