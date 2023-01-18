const { Categories } = require("../models");

class categoriesController {
  static async add(req, res) {
    try {
      let result = await Categories.create({
        name: req.body.name,
      });

      res.status(200).send(result);
    } catch (error) {
      console.log(error);
      res.status(500).send(error);
    }
  }
}

module.exports = categoriesController;
