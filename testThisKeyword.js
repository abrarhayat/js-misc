testObj = {
    test1: () => {
        console.info('test1:', this);
    },
    test2: function () {
        console.info('test2:', this);
    },
    test3: (cb) => {
        cb(this);
    },
    test4: function (cb) {
        cb(this);
    }
}

testObj.test1(); //this is an empty object

testObj.test2(); //this is the testObj

testObj.test3((obj) => {
    console.info('test3', obj); //this is an empty object
});

testObj.test4((obj) => {
    console.info('test4', obj); //this is the testObj
});
