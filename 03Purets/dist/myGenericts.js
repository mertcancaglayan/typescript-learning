"use strict";
const score = [];
const names = [];
function identityOne(val) {
    return val;
}
function identityTwo(value) {
    return value;
}
function identityThree(val) {
    return val;
}
identityThree(3);
identityThree("Mert");
identityThree(true);
function identityFour(val) {
    return val;
}
identityFour({ brand: "ak", type: 3 });
function getSearchProducts(products) {
    const myIndex = 3;
    return products[myIndex];
}
const getMoreProducts = (products) => {
    const myIndex = 4;
    return products[4];
};
function anotherFunction(val1, val2) {
    return { val1, val2 };
}
anotherFunction(3, { connection: "cal", username: "adad", password: "asdlkşa" });
class Sellable {
    constructor() {
        this.cart = [];
    }
    addToCart(product) {
        this.cart.push(product);
    }
}
