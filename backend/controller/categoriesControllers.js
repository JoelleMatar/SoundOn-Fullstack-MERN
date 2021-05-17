const Category = require('../models/Category');

const getAllCategories = async (req, res) => {
    console.log("chouu");
    try 
    {
        console.log("kiff");
        const categories = await Category.findById({id: "60a13116df04951a8c33d779"});
        console.log("Categories:" + categories);
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