import { fork } from "child_process";
const forked = fork("");

// // fork method working
// forked.on("message", (msg) => {
//   console.log("Message from child", msg);
// });

// forked.send({ hello: "world" });

// process.on("message", (msg) => {
//   console.log("Message from parent:", msg);
// });

// let counter = 0;

// setInterval(() => {
//   process.send({ counter: counter++ });
// }, 1000);
