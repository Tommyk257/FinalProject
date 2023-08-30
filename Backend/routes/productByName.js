const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const { Router } = require('express');

const ProductByNameRouter = Router();

ProductByNameRouter.get('/:product_name', async (req, res) => {
    try {
        const productName = req.params.product_name;
        const product = await prisma.Product.findFirst({
            where: {
                product_name: productName,
            },
            select: {
                product_name: true,
                product_price: true,
                product_description: true,
                product_image: true,
            },
        });
        
        if (!product) {
            return res.status(404).json({
                status: 'error',
                error: 'Product not found',
            });
        }

        res.status(200).json({
            status: 'success',
            data: product,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            status: 'error',
            error: 'Unable to retrieve product',
        });
    }
  });

  module.exports = ProductByNameRouter;