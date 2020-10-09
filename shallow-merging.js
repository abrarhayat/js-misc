//This is how react's this.setState() works behind the hood.
//When we are shallow merging two objects, only the matching 
//Keys of the object will be replaced

const test1 = {
    test1: 'test1',
    test2: 'test2',
    test3: 'test3',
    test4: 'test4'
}

const test2 = {
    test1: 'test1 2',
    test2: 'test2 2',
    test6: 'test3',
    test7: 'test4'
}

const test3 = {
    test1: 'To be updated'
};

const shallowMerge = (obj1, obj2) => {
    Object.keys(obj1).forEach(obj1Key => {
        Object.keys(obj2).forEach(obj2Key => {
            if (obj1Key == obj2Key) {
                obj1[obj1Key] = obj2[obj2Key];
            }
        })
    });
    return obj1;
}

//console.log(shallowMerge(test1, test2));
console.log(shallowMerge(test1, test3));

