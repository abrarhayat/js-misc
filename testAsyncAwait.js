const fs = require('fs');
const util = require('util');

const readFile = util.promisify(fs.readFile);

console.log('start');

const fetch = async () => {
    try {
        const result = await readFile('test.txt', (err, data) => {
            if (!err) {
                return data;
            }
            return err;
        });
        console.log("result:", result.toString());
        console.log('AFTER result');
    } catch (err) {
        console.log(err);
    }
}

fetch();
console.log('end');