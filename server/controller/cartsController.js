const { Products, Users, Carts } = require("../models");

class cartsController {
  static async addCarts(req, res) {
    const { UserId, ProductId, quantity, isPay } = req.body;
    try {
      let result = await Carts.create({
        UserId,
        ProductId,
        quantity,
        isPay,
      });
      res.status(200).send(result);
    } catch (error) {
      console.log(error);
    }
  }

  static async getCarts(req, res) {
    try {
      let result = await Carts.findAll({
        include: [Products, Users],
        order: [["id", "ASC"]],
        where: { UserId: req.params.id },
      });
      res.status(200).send(result);
    } catch (error) {
      console.log(error);
      res.status(500).send(error);
    }
  }
}

module.exports = cartsController;
