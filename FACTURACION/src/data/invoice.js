export const invoice = {
    id: 10,
    name: 'Pizzeria',
    client: {
        name: 'Any ',
        lastname: 'Melisa',
        address: {
            country: 'Colombia',
            city: 'Bucaramanga',
            street: 'Calle 103 # 12 - ',
            number: 86
        },
    },
    company: {
        name: 'PizzaVerona',
        fiscalNumber: 123456789,
    },
    // Arreglos [] y {} objetos
    items: [
        {
            product: 'Criollita',
            price: 9000,
            quantity: 1,
        },
        {
            product: 'Mexicana',
            price: 8500,
            quantity: 1,
        },
        {
            product: 'Marinera',
            price: 10000,
            quantity: 1,
        },
    ]
}
