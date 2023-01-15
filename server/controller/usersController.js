const { Users } = require("../models");
const bcrypt = require("bcryptjs");

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

    //cek user apakah ada
    try {
      let result = await Users.findAll({
        where: {
          username: username,
        },
      });

      if (result.length > 0) {
        res.status(200).send("exist");
      } else {
        //user tidak ditemukan

        //membuat hash password
        const salt = bcrypt.genSaltSync(10);
        const hashedPassword = bcrypt.hashSync(password, salt);

        try {
          let result = await Users.create({
            username,
            email,
            password: hashedPassword,
            image,
            role,
          });

          res.status(200).send("berhasil menambahkan user: " + result);
        } catch (error) {
          console.log(error);
          res.status(500).send(error);
        }
      }
    } catch (error) {
      console.log(error);
      res.status(500).send(error);
    }
  }
}
module.exports = UsersController;
