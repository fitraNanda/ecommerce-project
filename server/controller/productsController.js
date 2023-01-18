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
            name: "Donat",
            price: 5000,
            image: filePath,
            description: "Donat berbagai rasa yang enak",
            CategoryId: 1,
          });
          res.status(200).send(result);
        } catch (error) {
          console.log(error);
        }
      });
    } catch (error) {
      console.log(error);
    }
  }

  static async get(req, res) {
    try {
      let result = await Products.findAll({ include: [Categories] });
      res.status(200).send(result);
    } catch (error) {
      console.log(error);
      res.status(500).send(error);
    }
  }
}

module.exports = ProductsController;
