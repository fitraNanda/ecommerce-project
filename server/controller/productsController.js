const { Products, Categories } = require("../models");
const { uploader } = require("../helper/uploader");
const fs = require("fs");

class ProductsController {
  static async uploadFile(req, res) {
    try {
      let path = "/images";
      const upload = uploader(path, "IMG").fields([{ name: "file" }]);

      upload(req, res, async (error) => {
        if (error) {
          console.log(error);
          res.status(500).send(error);
          return;
        }

        const { file } = req.files;
        let filePath = file ? path + "/" + file[0].filename : null;

        let data = JSON.parse(req.body.data);

        try {
          let result = await Products.create({
            name: data.name,
            price: data.price,
            image: filePath,
            description: data.description,
            stock: data.stock,
            CategoryId: data.CategoryId,
          });
          res.status(200).send(result);
        } catch (error) {
          console.log(error);
          fs.unlinkSync("./public" + filePath);
        }
      });
    } catch (error) {
      console.log(error);
    }
  }

  static async get(req, res) {
    try {
      let result = await Products.findAll({
        include: [Categories],
        order: [["id", "ASC"]],
      });
      res.status(200).send(result);
    } catch (error) {
      console.log(error);
      res.status(500).send(error);
    }
  }

  static async updateFile(req, res) {
    try {
      let path = "/images";
      const upload = uploader(path, "IMG").fields([{ name: "file" }]);

      upload(req, res, async (error) => {
        if (error) {
          console.log(error);
          res.status(500).send(error);
          return;
        }

        const { file } = req.files;
        let filePath = file ? path + "/" + file[0].filename : null;

        let data = JSON.parse(req.body.data);
        const id = parseInt(req.params.id);

        try {
          let result = await Products.update(
            {
              name: data.name,
              price: data.price,
              image: filePath ? filePath : data.image,
              description: data.description,
              stock: data.stock,
              CategoryId: data.CategoryId,
            },
            {
              where: { id },
            }
          );
          if (filePath) {
            fs.unlinkSync("./public" + data.image);
          }
          res.status(200).send(result);
        } catch (error) {
          fs.unlinkSync("./public" + filePath);
          console.log(error);
        }
      });
    } catch (error) {
      console.log(error);
    }
  }

  static async deleteFile(req, res) {
    const id = +req.params.id;

    try {
      let result = await Products.destroy({
        where: { id },
      });

      fs.unlinkSync("./public" + req.body.image);
      res.status(200).sendStatus(200);
    } catch (error) {
      res.status(500).send(error);
    }
  }
}

module.exports = ProductsController;
