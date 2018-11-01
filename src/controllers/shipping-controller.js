
// src/controllers/shipping-controller.js
var productService = require('../services/product-service')

class ShippingController {

  constructor() {
    this.REGULAR_PRICE = 0.1
    this.OVERNIGHT_PRICE = 1
  }

  async getItemShipping(item) {
    var shippingAmount = await productService.getProductWeight(item.id)
<<<<<<< HEAD
    return shippingAmount * this.REGULAR_PRICE
=======
    if (item.type.toLowerCase() === 'overnight') {
      return shippingAmount * this.OVERNIGHT_PRICE
    } else {
      return shippingAmount * this.REGULAR_PRICE
    }
>>>>>>> c5342a566a8262dd36d87e99b039e5dcf65dd1ec
  }

}

module.exports = ShippingController;