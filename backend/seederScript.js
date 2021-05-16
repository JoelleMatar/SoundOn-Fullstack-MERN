require('dotenv').config();

const productsData = require('./data/products');
const connectDB = require('./config/db');
const Product = require('./models/Product');
const categoriesData = require('./data/categories');
const Category = require('./models/Category');

connectDB();

const importData = async () => {
    try
    {
        await Product.deleteMany({});
        await Product.insertMany(productsData);

        await Category.deleteMany({});
        await Category.insertMany(categoriesData);

        console.log("Data Import Success");
        process.exit();
    }
    catch(error)
    {
        console.error("Error with data import");
        process.exit(1);
    }
};

importData();