// src/services/product-service.js
<<<<<<< HEAD
module.exports = {
    getProductWeight: async function(productId) {
      // Meanwhile it can be implemented by other developers
    }
};
=======
var axios = require('axios')

module.exports = {
  getProductWeight: async function (productId) {
    let URL = process.env['MICROS_PRODUCTS_URL'] || 'mycluster.icp:8899/products';
    return axios
      .get(`https://${URL}/${productId}`)
      .then(response => {
        if (response.data && !Number.isNaN(parseFloat(response.data.weightLB))) {
          return response.data.weightLB
        } else {
          return Promise.reject('Invalid response object')
        }
      })
      .catch( (err) => {
        throw new Error(err)
      })
  }
}
>>>>>>> c5342a566a8262dd36d87e99b039e5dcf65dd1ec
