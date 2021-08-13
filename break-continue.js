const products = [
    { name: 'samsang s3 phone', Price: 12000 },
    { name: 'asus laptop d3', Price: 32000 },
    { name: 'apple smarat watch', Price: 18000 },
    { name: 'bosundhara binding paper', Price: 80 },
    { name: 'lg smart phone', Price: 1000 },
    { name: 'ld granny land phone', Price: 100 },
    { name: 'samsang watch', Price: 32000 },
    { name: 'dell laptop', Price: 41000 },
    { name: 'lenovo laptop', Price: 31000 },
]


for (const product of products) {
    if (product.Price < 10000) {
        break;
    }
    console.log(product);
}

for (const product of products) {
    if (product.Price < 10000) {
        continue;
    }
    console.log(product);

}