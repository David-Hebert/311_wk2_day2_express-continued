const products = require('../data/products');

const list = (req, res) => {
    res.json(products)
};

const show = (req, res) => {
    const productId = req.params.id
        for (let product of products){
            if (product._id === parseInt(productId)){
                res.json(product)
            }
        }
};

const create = (req, res) => {
    const newProduct = {
      _id: products.length + 1,
      name: req.body.name,
      description: req.body.description
    }
    
    if(!newProduct.name || !newProduct.description){
      return res.status(400).json({ msg: "Please name and description" });
    }
  
    products.push(newProduct)
    res.json(products)
};

module.exports = {
  list, 
  show,
  create
};