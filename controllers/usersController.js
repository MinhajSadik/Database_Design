import usersModel from "../models/usersModel.js";

const usersController = {
  // POST /api/users
  createUser: async (req, res) => {
    const { firstName, lastName, email, country, gender, devices } = req.body;
    try {
      const user = await usersModel.findOne({ email });
      if (user) {
        return res.status(400).json({
          message: "User already exists",
        });
      }
      const newUser = await usersModel.create({
        firstName,
        lastName,
        email,
        country,
        gender,
        devices,
      });

      return res.status(201).json(newUser);
    } catch (error) {
      console.log(error);
    }
  },
  // GET /api/users
  getUsers: async (req, res) => {
    try {
      const users = await usersModel.find({});
      res.status(200).json(users);
      // worker.cluster.worker.kill();
    } catch (error) {
      console.log(error);
    }
  },
};

export default usersController;
