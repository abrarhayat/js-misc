class Test2 {
    setCB(cb) {
        //console.log(cb);
        cb();
    }
}

class Test1 {
    constructor() {
        //console.log(this);
        let test2 = new Test2();
        test2.setCB(this.test1cb);
        test2.setCB(this.test2cb.bind(this));
        // test2.setCB(function () {
        //     this.test3cb(); //fails as this is undefined
        // });
        test2.setCB(() => {
            this.test3cb();
        });
    }

    test1cb() {
        console.log('From test1cb', this);
    }
    test2cb() {
        console.log('From test2cb', this);
    }
    test3cb() {
        console.log('From test3cb', this);
    }
}

test1 = new Test1();