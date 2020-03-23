const fs = require("fs");

const copy = (src, dst) => {
	fs.createReadStream(src).pipe(fs.createWriteStream(dst));
};

const main = argv => {
	copy(argv[0], argv[1]);
};

console.log("process.argv:", process.argv);

main(process.argv);
