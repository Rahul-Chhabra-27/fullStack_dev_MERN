console.log("start");
// setTimeout(() => {
//   console.log("wait");
//   clearInterval(interval);
// }, 4000);
// const interval = setInterval(() => {
//   console.log("Inside Interval!!!");
// }, 1000);

// console.log(__dirname);
// console.log(__filename);
// const os = require("os");
// console.log(os.hostname(), os.platform(), os.homedir(), os.version());

const fs = require("fs");
// fs.readFile("./docs/data.html", (err, data) => {
//   if (err) console.log(err);
//   console.log(data.toString());
// });
// const myName = "Rahul chhabra";
// fs.writeFile("./docs/data2.html", `${myName}`, (err) => {
//   console.log(err);
// });
// if (!fs.existsSync("./extra")) {
//   fs.mkdir("./extra", (err) => {
//     console.log(err);
//     console.log("directory created!!");
//   });
// } else {
//   fs.rmdir("./extra", (err) => {
//     console.log(err);
//     console.log("directory deleted!!");
//   });
// }
// if (fs.existsSync("./docs/data2.html")) {
//   fs.unlink("./docs/data2.html", (err) => {
//     console.log(err);
//     console.log("file deleted!!");
//   });
// }
const readStream = fs.createReadStream("./docs/data.html", {
  encoding: "utf-8",
});
readStream.on("data", (chunk) => {
  console.log("\n---NEW CHUNK-----\n");
  console.log(chunk);
});
console.log("end");
