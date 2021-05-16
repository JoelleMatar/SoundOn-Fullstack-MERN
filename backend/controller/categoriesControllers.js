const Category = require('../models/Category');

const getAllCategories = async (req, res) => {
    try 
    {
        const categories = await Category.find({});

        res.json(categories);
    } 
    catch (error) 
    {
        console.error(error);
        res.status(500).json({message: "Server Error"});
    }
}

module.exports = {
    getAllCategories,
}