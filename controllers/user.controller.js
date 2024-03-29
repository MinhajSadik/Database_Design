import UserModel from "../models/user.model.js";
import worker from "../utils/helpers/serverWorker.js";

const usersController = {
  // POST /api/user
  registerUser: async (req, res, next) => {
    const { name, email, password } = req.body;
    try {
      const user = await UserModel.findOne({ email });
      if (user) {
        return res.status(400).json({
          message: "User already exists",
        });
      }
      const newUser = await UserModel.create({
        name,
        email,
        password,
      });

      worker.cluster.worker.kill();
      return res.status(201).json(newUser);
    } catch (error) {
      next(error.message)
    }
  },

  loginUser: async (req, res, next) => {
    const { email, password } = req.body;
    try {
      const existedUser = await UserModel.findOne({ email });
      if (!existedUser) {
        return res.status(302).json({
          status: false,
          message: "Could not found expected user",
        });
      }

      // const user = UserModel.create({
      //   email,
      //   password,
      // });

      console.log(existedUser);
    } catch (error) {
      return res.status(500).json({
        status: false,
        message: "There are an server side error" + error.message,
      });
    }
  },
  // GET /api/users
  getUsers: async (req, res) => {
    try {
      const users = await UserModel.find({});
      // worker.cluster.worker.kill();
      res.status(200).json(users);
    } catch (error) {
      return res.status(500).json({
        message: error.message
      })
    }
  },
};

export default usersController;
