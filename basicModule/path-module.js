const path = require('path');

console.log(path.sep);

const filePath = path.join('C:\\User\HP', 'test.txt');
console.log(filePath);

//get the final file name
const fileName = path.basename(filePath);
console.log(fileName);

//get the absolute path
console.log(__dirname);

const absoluteFilePath = path.resolve('Hp', 'test.txt');
console.log(absoluteFilePath);