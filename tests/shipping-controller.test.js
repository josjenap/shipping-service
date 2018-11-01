// tests/shipping-controller.test.js
var chai = require('chai')
var expect = chai.expect
<<<<<<< HEAD
var sinon = require('sinon');
=======
var sinon = require('sinon')
>>>>>>> c5342a566a8262dd36d87e99b039e5dcf65dd1ec
var ShippingController = require('../src/controllers/shipping-controller')
var productService = require('../src/services/product-service')

describe('Shipping controller', function () {
<<<<<<< HEAD
    var shippingCtrl = new ShippingController()
  
    beforeEach(function(){
      sinon.stub(productService, 'getProductWeight').callsFake(async function() {
        return new Promise(function (resolve, reject) {
          setTimeout(() => {
            resolve(5)
          }, 50)
        })
      })
    })
  
    afterEach(function () {
      productService.getProductWeight.restore()
    })
  
    it('Should calculate correct shipping ', async function () {
      let shipping = await shippingCtrl.getItemShipping({ id: 1, type: 'standard' })
      expect(shipping).to.equal(0.5)
    })
  
  })
=======
  var shippingCtrl = new ShippingController()

  beforeEach(function(){
    sinon.stub(productService, 'getProductWeight').callsFake(async function() {
      return new Promise(function (resolve, reject) {
        setTimeout(() => {
          resolve(5)
        }, 50)
      })
    })
  })

  afterEach(function () {
    productService.getProductWeight.restore()
  })

  it('Should calculate correct shipping ', async function () {
    let shipping = await shippingCtrl.getItemShipping({ id: 1, type: 'standard' })
    expect(shipping).to.equal(0.5)
  })

  it('Should calculate correct overnight shipping ', async function () {
    let shipping = await shippingCtrl.getItemShipping({ id: 1, type: 'overnight' })
    expect(shipping).to.equal(5)
  })
})
>>>>>>> c5342a566a8262dd36d87e99b039e5dcf65dd1ec
