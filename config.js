var config = {
    texnano: {
        url: "http://texnano.com.ua/index.php?route=product/category&path=110",
        category: "#content .refine-images a",
        products: ".image a",
        product: {
            name: '#content .heading-title',
            code: '.p-cod',
            img: '#content .image a',
            descr: '#content .tabs-content',
            price: '.product-price',
            isAvailable: '.instock'
        }
    }
}

module.exports = config;