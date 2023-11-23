const productos = [
    { id: 1, name: 'Notebook Asus ExpertBook 15.6 FHD I3', img: './src/assets/I3.jpg', price: 100000, category: 'Notebook', description: 'Notebook Intel Core I3', stock: 10 },
    { id: 2, name: 'Notebook Samsung 15.6 FHD Galaxy Book3 i5', img: './src/assets/I5.jpg', price: 150000, category: 'Notebook', description: 'Notebook Intel Core I5', stock: 15 },
    { id: 3, name: 'Notebook HP 14 240 G8 I7-1065G7 8GB 512SSD', img: './src/assets/I7.jpg', price: 100000, category: 'Notebook', description: 'Notebook Intel Core I7', stock: 9 },
    { id: 4, name: 'Teclado Redragon', img: './src/assets/tecladored.jpg', price: 150000, category: 'Perisfericos', description: 'Teclado Redragon', stock: 11 },
    { id: 5, name: 'Mouse Redragon', img: './src/assets/mousered.jpg', price: 100000, category: 'Perisfericos', description: 'Mouse Redragon', stock: 5 },
    { id: 6, name: 'Auricular Redragon', img: './src/assets/auricularred.jpg', price: 150000, category: 'Perisfericos', description: 'Auricular Redragon', stock: 7 },
    { id: 7, name: 'Monitor 19 (18.5) Philips LED HD HDMI VGA', img:`./src/assets/monitor 19 Philips.jpg`, price: 100000, category: 'Monitor', description: 'Monitor 19 pulgadas', stock: 18 },
    { id: 8, name: 'Monitor 19 Viewsonic Va1903H TFTHd Vga Hdmi Vesa', img: `./src/assets/monitor 19 Viewsonic.jpg`, price: 150000, category: 'Monitor', description: 'Monitor 21 pulgadas', stock: 14 },
];

export const getProductos = () => {
    return new Promise((resolve, reject) => {
        if (productos.length > 0) {
            setTimeout(() => {
                resolve(productos);
            }, 3000);
        } else {
            reject('No hay más productos disponibles');
        }
    });
};

export const getProductoById = (id) => {
    return new Promise((resolve, reject) => {
        if (productos.length > 0) {
            const productId = parseInt(id);
            const producto = productos.find((p) => p.id === productId);

            setTimeout(() => {
                if (!producto) {
                    reject(`No se encontró el producto seleccionado con el ID ${id}`);
                }
                resolve(producto);
            }, 3000);
        } else {
            reject('No hay productos');
        }
    });
};

