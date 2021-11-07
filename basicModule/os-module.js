const os = require('os')

const user = os.userInfo()
console.log(user)

const curSys = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem()
}

console.log(curSys);