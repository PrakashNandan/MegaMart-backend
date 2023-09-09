const express = require('express');
const server = express();
const mongoose = require('mongoose');
const {createProduct} = require('./controller/Product')
const productsRouter = require('./routes/product');
const categoriesRouter = require('./routes/category');
const brandsRouter = require('./routes/brand');
const cors = require('cors');

// Middlewares
server.use(cors({
    exposedHeaders:['X-Total-Count']
}))
server.use(express.json()); // to parse req..body
server.use('/products', productsRouter.router);
server.use('/categories', categoriesRouter.router);
server.use('/brands', brandsRouter.router);




main().catch(err=> console.log(err));

async function main(){
    await mongoose.connect('mongodb://127.0.0.1:27017/ecommerce');
    console.log('database connected')
}



server.get('/', (req,res)=>{
        res.json({status:"success"});
})

// server.post('/products', createProduct)


server.listen(8080, ()=>{
    console.log("server started");
});