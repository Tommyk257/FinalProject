
const express = require('express');
const app = express();
const router  = require('./routes/products'); 

app.use('/products', router );

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});