const Product = require('../models/Product');

const getAllProducts = async (req, res) => {
    try 
    {
        const products = await Product.find({});

        res.json(products);
    } 
    catch (error) 
    {
        console.error(error);
        res.status(500).json({message: "Server Error"});
    }
}

const getProductByCategory = async (req, res) => {
    let args = {};
    let products = [];

    for (let key in req.body.filters) { 
        args["category"] = req.body.filters[key]; 
        let query = await Product.find(args);
        products = products.concat(query);
    }
    res.json(products);
}

const getProductById = async (req, res) => {
    try 
    {
        const product = await Product.findById(req.params.id);

        res.json(product);
    } 
    catch (error) 
    {
        console.error(error);
        res.status(500).json({message: "Server Error"});
    }
}

// const getProductsByCategories = async (req, res) => {
//     try 
//     {
//         console.log("cava1");
//         const products = await Product.find({category: "guitarInstrument"});

//         res.json(products);
//     } 
//     catch (error) 
//     {
//         console.error(error);
//         res.status(500).json({message: "Server Error"});
//     }
// }

module.exports = {
    getAllProducts,
    getProductById,
    // getProductsByCategories,
    getProductByCategory
};