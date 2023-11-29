import User from "../models/user.js";

const createUser = async (req, res) => {
  const { name, email } = req.body;
  if(!name){
    return res.status(404).json({ message: "Name must be added"});
  } if(!email){
    return res.status(404).json({ message: "Email must be added"});
  }
  try {
    
    const user = await User.create({ name, email});
    res.status(200).json({ message: "User created Successfully", user });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to create user" });
  }
};

const deleteUser = async (req, res) => {
  const { id, email } = req.body;
  try {
    if (id){
      const user = await User.destroy({where: {id: id}})
      return res.status(200).json({ message: "User deleted successfully", user });
    }
    else if (email) {
      const user = await User.destroy({where: {email: email}})
      return res.status(200).json({ message: "User deleted successfully", user });
    }
    else{
      return res.status(404).json({ message: "Please insert by either ID or Email."});
    }
  }catch(error){
    return res.status(500).json({ message: "Failed to delete user." });
  }
};

const updateUser = async (req, res) => {
  const { id, name, email } = req.body;
  if (!id){
    return res.status(404).json({ message: "Please insert the id value."});
  }
  try{
    const user = await User.findByPk(id);
    if (name){
      user.name = name;
      await user.save();
    } if (email){
      user.email = email;
      await user.save();
    }
  } catch (error){
    return res.status(500).json({ message: "Failed to update user." });
  }
};

export default {
  createUser,
  deleteUser,
  updateUser
};