const genre = [
    {
        id: 1,
        nom: "Matériel"
    },

    {
        id: 2,
        nom: "Aliments"
    }
];

const prices = [
    {
        id: 1,
        type: 40
    },
    {
        id: 2,
        type: 80
    },
    {
        id: 3,
        type: 150
    },
    {
        id: 4,
        type: 300
    },
]

export function getGenre() {
    return genre
}
export function getPrices() {
    return prices
}