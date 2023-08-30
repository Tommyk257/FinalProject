const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const { Router } = require('express');

const fruitRouter = Router();

fruitRouter.get('/', async (req, res) => {
    try {
      const products = await prisma.Product.findMany({
        where: {
          product_type: 'Fruit',
        },
        select: {
          product_name: true,
          product_price: true,
          product_description: true,
          product_image: true,
          product_type: true,
        }
      });
    
      res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
      return res.json(products,  );
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Unable to retrieve products' });
    }
  });


module.exports = fruitRouter;