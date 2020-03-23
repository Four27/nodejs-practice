const fs = require('fs')

const copy = (src, dst) => {
    fs.writeFileSync(dst, fs.readFileSync(src))
}

const main = (argv) => {
    copy(argv[0], argv[1])
}

console.log('process.argv:', process.argv)

main(process.argv)