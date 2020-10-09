const test = {
    test1: 'test1',
    test2: 'test2',
    test3: 'test3',
    test4: 'test4'
}

// console.log(JSON.stringify(test));

// test["test1"] = 'test1U';

// console.log(JSON.stringify(test));

// test.test1 = 'test1U 2';
// console.log(JSON.stringify(test));

const test2 = { ...test, ['test4']: 'test4 U' };
console.log(JSON.stringify(test2));