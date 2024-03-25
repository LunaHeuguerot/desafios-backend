class ProductManager {
    constructor() {
        this.products = [];
    }

    addProduct(product) {
        if(!product.title || !product.description || !product.price || !product.thumbnail || !product.code || !product.stock) {
            console.error('Todos los campos son obligatorios');
        }

        if(this.products.some((p) => p.code === product.code)){
            console.error('El código ya existe');
            return;
        }

        const { title, description, price, thumbnail, code, stock } = product;

        const newProduct = {
            id: this.products.length + 1,
            title,
            description, 
            price,
            thumbnail,
            code,
            stock
        };

        this.products.push(newProduct);
    }

    getProducts() {
        return this.products;
    }

    getProductById(id){
        if(!id){
            console.log('Debes ingresar un id para la búsqueda');
            return;
        }

        const searcher = this.products.find((p) => p.id === id);

        if(searcher){
            console.log(searcher);
        } else {
            console.log('Not found');
        }
    }

};

const productManager = new ProductManager();
productManager.getProducts();

const product1 = {
    title: "Test Product 1",
    description: "Test product",
    price: 100,
    thumbnail: "No image",
    code: 'TEST01',
    stock: 10
};

const product2 = {
    title: "Test Product 2",
    description: "Test product",
    price: 100,
    thumbnail: "No image",
    code: 'TEST02',
    stock: 10
};


//Prueba código

productManager.addProduct(product1);
productManager.getProducts();
productManager.addProduct(product2);
productManager.getProductById(1);
productManager.getProductById(2);
productManager.getProductById();