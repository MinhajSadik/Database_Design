import cluster from "node:cluster";
import { cpus } from "node:os";

const numOfCPU = cpus().length;

const worker = {
  cluster: cluster,
  os: cpus.os,
  start: async () => {
    for (let i = 0; i < numOfCPU; i++) {
      cluster.fork();
    }
    cluster.on("exit", (worker, code, signal) => {
      console.log(`worker ${worker.process.pid} died`);
      cluster.fork();
    });
  },
};

export default worker;
