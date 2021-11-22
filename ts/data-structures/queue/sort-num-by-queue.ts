import Queue from './Queue';

// Make a queue for 0 - 9
const queues = [];
for (let i = 0; i < 10; i++) {
  queues[i] = new Queue<number>();
}

// Numbers
let nums = [];
for (let i = 0; i < 10; i++) {
  nums[i] = Math.floor(Math.random() * (99 - 0 + 1) + 0);
}

const distribute = (nums: number[], queues: Queue<number>[], digit: 1 | 10) => {
  nums.map((item) => {
    digit === 1
      ? queues[item % 10].enqueue(item)
      : queues[Math.floor(item / 10)].enqueue(item);
  });
};

const collect = (queues: Queue<number>[]) => {
  const _arr: number[] = [];
  queues.map((queue) => {
    while (queue.length) {
      _arr.push(queue.dequeue() ?? 0); // Zero will not be happend.
    }
  });
  return _arr;
};

console.log('Before sort: ', nums);
distribute(nums, queues, 1);
console.log(queues);
nums = collect(queues);
console.log('Sort onece: ', nums);
distribute(nums, queues, 10);
console.log(queues);
nums = collect(queues);
console.log('Sort twice: ', nums);
