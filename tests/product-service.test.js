// tests/product-service.test.js
var chai = require('chai')
var expect = chai.expect
var productService = require('../src/services/product-service')

describe('Product service', function () {

  it('Should call http endpoint', async function () {
    let weight = await productService.getProductWeight('13')
    expect(weight).to.equal(15.5)
  })
})