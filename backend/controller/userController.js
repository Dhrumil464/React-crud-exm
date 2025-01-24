const Users = require('../model/UserModel');

const createUser = async (req, res) => {
    try {
        const userData = new Users(req.body);

        if (!userData) {
            return res.status(404).json({ msg: 'User data not found!' });
        }

        const savedData = await userData.save();
        res.status(200).json({ User: userData, msg : 'User Created Successfully!' });
    } catch (error) {
        res.status(500).json(error);
    }
}

const getAll = async (req, res) => {
    try {
        const userData = await Users.find();

        if (!userData) {
            return res.status(404).json({ msg: 'User data not found!' });
        }

        res.status(200).json({ Users: userData, msg : 'User Found Successfully!' });
    } catch (error) {
        res.status(500).json(error);
    }
}

const getOne = async (req, res) => {
    try {
        const id = req.params.id;

        const userData = await Users.findById(id);
        if (!userData) {
            return res.status(404).json({ msg: `User data not found with id ${id}!` });
        }

        res.status(200).json({ User: userData, msg : 'User Found Successfully!' });
    } catch (error) {
        res.status(500).json(error);
    }
}

const updateUser = async (req, res) => {
    try {
        const id = req.params.id;

        const userData = await Users.findById(id);
        if (!userData) {
            return res.status(404).json({ msg: `User data not found with id ${id}!` });
        }

        const updatedData = await Users.findByIdAndUpdate(id, req.body, { new: true });
        res.status(200).json({ User: updatedData, msg: 'User Updated Successfully!' });
    } catch (error) {
        res.status(500).json(error);
    }
}

const deleteUser = async (req, res) => {
    try {
        const id = req.params.id;

        const userData = await Users.findById(id);
        if (!userData) {
            return res.status(404).json({ msg: `User data not found with id ${id}!` });
        }

        const deletedData = await Users.findByIdAndDelete(id);
        res.status(200).json({ User: deletedData, msg: 'User Deleted Successfully!' })

    } catch (error) {
        res.status(500).json(error);
    }
}

module.exports.createUser = createUser;
module.exports.getAll = getAll;
module.exports.getOne = getOne;
module.exports.updateUser = updateUser;
module.exports.deleteUser = deleteUser;