console.time('first');

for (let i = 0; i < 1000000; i++) {
    let num = 5 + 5; // O(1)
}

console.timeEnd('first');
