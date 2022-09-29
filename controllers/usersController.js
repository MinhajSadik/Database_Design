import usersModel from "../models/usersModel.js";
import worker from "../utils/helpers/serverWorker.js";

const usersController = {
  // POST /api/user
  createUser: async (req, res) => {
    const { name, email, password } = req.body;
    try {
      const user = await usersModel.findOne({ email });
      if (user) {
        return res.status(400).json({
          message: "User already exists",
        });
      }
      const newUser = await usersModel.create({
        name,
        email,
        password,
      });

      worker.cluster.worker.kill();
      return res.status(201).json(newUser);
    } catch (error) {
      console.log(error);
    }
  },
  // GET /api/users
  getUsers: async (req, res) => {
    try {
      const users = await usersModel.find({});
      // worker.cluster.worker.kill();
      return res.status(200).json(users);
    } catch (error) {
      console.log(error);
    }
  },
};

export default usersController;
