import { UserModel } from "../repository/models/userModel";

// const users = [
//   {
//     id: 1,
//     fullname: "Sawan Y",
//     username: "sawany",
//     password: "thebestpassword",
//   },
//   {
//     id: 2,
//     fullname: "John AB",
//     username: "johnb",
//     password: "thebestpassword",
//   },
//   {
//     id: 3,
//     fullname: "Mark Z",
//     username: "MarkZuch",
//     password: "thebestpassword",
//   },
// ];

// const notes = [
//   {
//     id: 1,
//     content: "this is note 1",
//   },
//   {
//     id: 2,
//     content: "this is note 2",
//   },
// ];

export const getAllUsers = async (req: any, res: any) => {
  const users = await UserModel.find({});
  res.status(200).json(users);
};

export const loginUser = async (req: any, res: any) => {
  const { email, password } = req.body;
  const user = await UserModel.findOne({ email });

  if (!user) {
    res.status(404).json({ message: "User does not exist" });
  }

  if (user && user.password !== password) {
    res.status(400);
    throw new Error("Username/password does not match");
  }

  res.status(200).json({ message: "User logged in successfully" });
};

export const createUser = async (req: any, res: any) => {
  const { id, firstName, lastName, email, password } = req.body;

  const user = await UserModel.create({
    id,
    firstName,
    lastName,
    email,
    password,
  });

  if (user) {
    res.status(201).json(user);
  } else {
    res.status(400).json({ message: "Failed to create user" });
  }
};
