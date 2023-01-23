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
}

module.exports = cartsController;
