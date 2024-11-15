import User from "../models/user.model.js";

class UserController{
    constructor(){
        this.user = User
    }

    getUsers = async (req, res) => {
        try {
            const users = await User.find();
            res.json(users);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }; 

    getCount = async (req, res) => {
        try {
            const count = await User.countDocuments();
            res.json({ count });
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }

    createUser = async (req, res) => {
        try {
            const newUser = new User(req.body);
            await newUser.save();
            res.status(201).json({ 
                message: 'Usuario cargado correctamente', 
                newUser 
            });
        } catch (err) {
            res.status(400).json({ error: err.message });
        }
    }
}

export default UserController;