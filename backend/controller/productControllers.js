const Product = require('../models/Product');

const getAllProducts = async (req, res) => {
    // try 
    // {
    //     console.log(req.body);
    //     let args = {};
    //     let products = [];
    //     console.log("body");
    //     console.log(req.body);
    //     // if(req.body.filters == []) {
    //     //     console.log("get");
    //     //     console.log(req.body.filters);
    //     // }
    //     // else {
    //     //     console.log("post");
    //     // }
    //     // if(req.body == undefined || req.body == {}) {
    //     //     // console.log("get");
    //     //     products = await Product.find({});
    //     // }
    //     // else {
    //         for (let key in req.body.filters) { 
    //             args["category"] = req.body.filters[key]; 
    //             let query = await Product.find(args);
    //             products = products.concat(query);
    //         }

    //         if(products == []) {
    //             products = await Product.find({});
    //         }

    //     // }
    //     // else {
    //     //     console.log("get");
    //     //     products = await Product.find({});
    //     // }
    //     // console.log(query);
        
    //     // const products = await Product.find(args);
    //     console.log(products);
    //     res.json(products);
    // } 
    // catch (error) 
    // {
    //     console.error(error);
    //     res.status(500).json({message: "Server Error"});
    // }

    try 
    {
        // console.log("cava1");
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