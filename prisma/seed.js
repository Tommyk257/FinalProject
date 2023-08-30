const { PrismaClient } = require("@prisma/client");
const { products } = require('./products.js');
const prisma = new PrismaClient();

async function seed() {
  for (let product of products) {
    await prisma.product.create({
      data: product,
    });
  }

  const newUser = await prisma.user.create({
    data: {
      user_name: "customer1",
      email: "user@example.com",
      password: "password123",
    },
  });

  console.log("Seed script executed successfully!");
}

seed()
  .catch(async (e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => {
    prisma.$disconnect();
  });
