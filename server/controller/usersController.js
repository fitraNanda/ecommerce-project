const { Users } = require("../models");

class UsersController {
  static async get(req, res) {
    try {
      let users = await Users.findAll();
      res.status(200).send(users);
    } catch (error) {
      console.log(error);
      res.status(500).send(error);
    }
  }

  static async register(req, res) {
    const { username, email, password, image, role } = req.body;

    try {
      let result = await Users.create({
        username,
        email,
        password,
        image,
        role,
      });

      res.status(200).send("berhasil menambahkan user: " + result);
    } catch (error) {
      console.log(error);
      res.status(500).send(error);
    }
  }
}
module.exports = UsersController;
