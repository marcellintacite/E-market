const products = [
    {
        id: "abc1",
        nom: "Piano",
        detail: "C'est un bon produit de qualité, en provenance de Chine.",
        prix: 10,
        liked: true,
        imgUrl: 0,
        genre: "Matériel",
        value: 0
    },
    {
        id: "abc2",
        nom: "Citron",
        detail: "C'est un bon produit de qualité, en provenance de Chine.",
        prix: 50,
        imgUrl: 1,
        genre: "Aliments",
        value: 0
    },
    {
        id: "abc3",
        nom: "Chaises",
        detail: "C'est un bon produit de qualité, en provenance de Chine.",
        prix: 5,
        imgUrl: 2,
        genre: "Matériel",
        value: 0
    },
    {
        id: "abc4",
        nom: "Ordinateur",
        detail: "C'est un bon produit de qualité, en provenance de Chine.",
        prix: 210,
        imgUrl: 3,
        genre: "Matériel",
        value: 0
    },
    {
        id: "abc5",
        nom: "Iphone 7",
        detail: "C'est un bon produit de qualité, en provenance de Chine.",
        prix: 150,
        imgUrl: 4,
        genre: "Matériel",
        value: 0
    },
    {
        id: "abc6",
        nom: "Haricots viandés",
        detail: "C'est un bon produit de qualité, en provenance de Chine.",
        prix: 20,
        liked: true,
        imgUrl: 5,
        genre: "Aliments",
        value: 0
    },
    {
        id: "abc7",
        nom: "Arachides",
        detail: "C'est un bon produit de qualité, en provenance de Chine.",
        prix: 2,
        imgUrl: 6,
        genre: "Aliments",
        value: 0
    },
    {
        id: "abc8",
        nom: "Television ZEC",
        detail: "C'est un bon produit de qualité, en provenance de Chine.",
        prix: 350,
        imgUrl: 7,
        genre: "Matériel",
        value: 0
    },
    {
        id: "abc9",
        nom: "Table",
        detail: "C'est un bon produit de qualité, en provenance de Chine.",
        prix: 60,
        imgUrl: 8,
        genre: "Matériel",
        value: 0
    },
    {
        id: "abc10",
        nom: "Miels",
        detail: "C'est un bon produit de qualité, en provenance de Chine.",
        prix: 10,
        imgUrl: 9,
        genre: "Aliments",
        value: 0
    },
    {
        id: "abc11",
        nom: "Spagethi",
        detail: "C'est un bon produit de qualité, en provenance de Chine.",
        prix: 3,
        imgUrl: 10,
        genre: "Aliments",
        value: 0
    },
    {
        id: "abc12",
        nom: "Malettes",
        detail: "C'est un bon produit de qualité, en provenance de Chine.",
        prix: 25,
        imgUrl: 11,
        genre: "Matériel",
        value: 0
    }
];

export function getProducts() {
    return products;
}

export function getProduct(moivieId) {
    return products.filter(p => p.id === moivieId)
}

export function saveProduct(product) {
    const productDb = products.find(m => m.id === product.id || {});
    productDb.nom = product.nom;
    productDb.detail = product.detail;
    productDb.prix = product.prix;
    productDb.genre = product.genre
    
    if(!productDb.id) {
        productDb.id = Date.now().toString();
        products.push(productDb)
    }
    return productDb
}