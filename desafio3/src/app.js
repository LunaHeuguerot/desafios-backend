import { ProductManager } from './ProductManager.js';
import express from 'express';

const PORT = 8080;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const productManager = new ProductManager('src/products.json');

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`)
});

app.get('/products', async(req, res) => {
    try {
        const products = await productManager.getProducts();
        const limit = parseInt(req.query.limit);
        let limitedProducts = [...products];

        if(!isNaN(limit) && limit > 0){
            limitedProducts = limitedProducts.slice(0, limit);
        }

        res.status(200).send(limitedProducts);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener los productos' });
    }
});

app.get('/products/:pid', async(req, res) => {
    try {
        const products = await productManager.getProducts();
        let pid = parseInt(req.params.pid);
        let product = products.find(p => p.id === pid);

        if(!product) return res.status(404).json({ error: 'Producto no encontrado' });

        res.send(product);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener producto' });
    }
});