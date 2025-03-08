exports.getUsers = (req, res) => {
  res.json([{ id: 1, name: "John Doe", email: "john@example.com" }]);
};

exports.createUser = (req, res) => {
  res.status(201).json({ message: "User created", data: req.body });
};

exports.updateUser = (req, res) => {
  res.json({ message: `User ${req.params.id} updated`, data: req.body });
};

exports.deleteUser = (req, res) => {
  res.json({ message: `User ${req.params.id} deleted` });
};
