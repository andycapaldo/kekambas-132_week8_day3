"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const uuid_1 = require("uuid");
function createUser(name, age) {
    const newUser = {
        id: (0, uuid_1.v4)(),
        name,
        age,
        cart: []
    };
    return newUser;
}
function createItem(name, price, description) {
    const newItem = {
        id: (0, uuid_1.v4)(),
        name,
        price,
        description
    };
    return newItem;
}
function addToCart(user, item) {
    user.cart.push(item);
}
function removeFromCart(user, itemToRemove) {
    user.cart = user.cart.filter(item => item.id !== itemToRemove.id);
}
function removeQuantityFromCart(user, itemToRemove, quantity) {
    for (let i = 0; i < quantity; i++) {
        let index = user.cart.findIndex(item => item.id === itemToRemove.id);
        user.cart.splice(index, 1);
    }
}
function cartTotal(user) {
    let total = 0;
    for (let x of user.cart) {
        total += x.price;
    }
    console.log(total);
}
function printCart(user) {
    for (let x of user.cart) {
        console.log(x.name);
    }
}
const andy = createUser('Andy', 27);
const hotTopicShirt = createItem('Flaming Tee', 49.99, 'Flaming Hot Topic T-Shirt');
const bananas = createItem('Bananas', 2.99, '1 lb of Yellow Chiquita Bananas');
const gucciBandanna = createItem('Gucci Bandanna', 189.99, 'Gucci Bandanna Gucci Gucci Bandanna');
addToCart(andy, hotTopicShirt);
printCart(andy);
cartTotal(andy);
addToCart(andy, bananas);
addToCart(andy, bananas);
addToCart(andy, bananas);
printCart(andy);
cartTotal(andy);
addToCart(andy, gucciBandanna);
addToCart(andy, gucciBandanna);
addToCart(andy, gucciBandanna);
printCart(andy);
cartTotal(andy);
removeFromCart(andy, bananas);
printCart(andy);
cartTotal(andy);
removeQuantityFromCart(andy, gucciBandanna, 2);
printCart(andy);
cartTotal(andy);
