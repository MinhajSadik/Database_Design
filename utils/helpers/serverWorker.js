import cluster from "cluster";
import os from "os";

const numOfCPU = os.cpus().length;

const serverWorker = {
  cluster: cluster,
  os: os,
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

export default serverWorker;
