export const getAllUsers = (req, res) => {
  res.json([{ id: 1, name: "John Doe" }]);
};

export const getUserById = (req, res) => {
  const userId = req.params.id;
  res.json({ id: userId, name: "John Doe" });
};

export const createUser = (req, res) => {
  const newUser = req.body;
  res.status(201).json(newUser);
};

export const updateUser = (req, res) => {
  const userId = req.params.id;
  const updatedUser = req.body;
  res.json({ id: userId, ...updatedUser });
};

export const deleteUser = (req, res) => {
  const userId = req.params.id;
  res.status(204).send();
};
