const { Users } = require("../models");
const bcrypt = require("bcryptjs");
const { createToken } = require("../helper/createToken");
const transporter = require("../helper/nodemailer");
const jwt = require("jsonwebtoken");

class UsersController {
  static async get(req, res) {
    //tes awal postman
    try {
      let users = await Users.findAll();
      res.status(200).send(users);
    } catch (error) {
      console.log(error);
      res.status(500).send(error);
    }
  }

  static async register(req, res) {
    const { username, email, password, image, role, status } = req.body;
    console.log(username, email, password, image, role, status);
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
            status,
          });

          // res.status(200).send("berhasil menambahkan user: " + result);

          //setelah user register get lagi
          try {
            let result2 = await Users.findAll({
              where: { id: result.id },
            });

            // sukses get, lalu buat token dari data result2

            const { id, username, email, role } = result2[0];

            let token = createToken({ id, username, email, role });

            // //token dikirim menggunakan nodemailer
            let mail = {
              from: `Admin <bagginsbilbo938@gmail.com>`,
              to: `${email}`,
              subject: `Account verification`,
              html: `<p>Hai ${username}, silahkan verikasi akunmu</p><br></br><a href='http://localhost:3000/authentication/${token}'>Click Here</a>`,
            };

            transporter.sendMail(mail, (errMail, resMail) => {
              if (errMail) {
                console.log(errMail);
                res.status(500).send({
                  message: "Registration failed",
                  success: false,
                  err: errMail,
                });
              }
              res.status(200).send({
                message: "Registration success, check your Email",
                success: true,
              });
            });
          } catch (error) {
            console.log(error);
            res.status(500).send(error);
          }
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

  static async verif(req, res) {
    const id = +req.user.id;
    try {
      let result = await Users.update(
        { status: "verified" },
        {
          where: { id },
        }
      );
      res.status(200).send(result);
    } catch (error) {
      res.status(500).send(error);
      console.log(error);
    }
  }

  static async login(req, res) {
    // 1. check our user

    try {
      let result = await Users.findAll({
        where: { username: req.body.username },
      });

      if (!result.length) {
        //user tidak ketemu
        res.status(401).send("user not found!");
      }

      //jika ketemu, 2. cek passwordnya

      const checkPassword = bcrypt.compareSync(
        req.body.password,
        result[0].password
      );

      if (!checkPassword) {
        //jika passwordnya salah
        res.status(401).send("wrong username or password");
        return; //untuk menghentikan proses pembacaan kode ke bawah (agar tidak error)
      }

      //password benar

      const token = jwt.sign({ id: result[0].id }, "private123");
      const { username, email, image, role, status } = result[0];

      res
        .cookie("accessToken", token, {
          httpOnly: true,
        })
        .status(200)
        .json({ username, email, image, role, status });
    } catch (error) {
      res.status(500).send(error);
      console.log(error);
    }
  }

  static async logout(req, res) {
    res
      .clearCookie("accessToken", {
        secure: true,
        sameSite: "none",
      })
      .status(200)
      .json("User has been logout");
  }
}
module.exports = UsersController;
