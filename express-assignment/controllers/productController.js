exports.getProducts = (req, res) => {
  res.json([{ id: 1, name: "Laptop", price: 1000 }]);
};

exports.createProduct = (req, res) => {
  res.status(201).json({ message: "Product created", data: req.body });
};

exports.updateProduct = (req, res) => {
  res.json({ message: `Product ${req.params.id} updated`, data: req.body });
};

exports.deleteProduct = (req, res) => {
  res.json({ message: `Product ${req.params.id} deleted` });
};
