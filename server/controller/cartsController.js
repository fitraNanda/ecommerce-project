const { Products, Users, Carts } = require("../models");

class cartsController {
  static async addCarts(req, res) {
    const { UserId, ProductId, quantity, isPay } = req.body;

    try {
      let result = await Carts.findAll({
        where: { UserId, ProductId },
      });

      if (result.length !== 0) {
        try {
          let result2 = await Carts.update(
            {
              quantity: result[0].quantity + quantity,
            },
            { where: { id: result[0].id } }
          );
          res.status(200).send(result2);
        } catch (error) {
          console.log(error);
        }
      } else {
        try {
          let result2 = await Carts.create({
            UserId,
            ProductId,
            quantity,
            isPay,
          });
          res.status(200).send(result2);
        } catch (error) {
          console.log(error);
        }
      }
    } catch (error) {
      console.log(error);
    }
  }

  static async getCarts(req, res) {
    try {
      let result = await Carts.findAll({
        include: [Products, Users],
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
