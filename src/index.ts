import { v4 as uuidv4 } from "uuid";

type Item = {
    readonly id: string,
    name: string,
    price: number,
    description: string
};

type User = {
    readonly id: string,
    name: string,
    age: number,
    cart: Item[]
}

function createUser(name:string, age:number):User{ 
    const newUser: User = {
        id: uuidv4(),
        name,
        age,
        cart: []
    }
    return newUser;
}

function createItem(name:string, price:number, description:string):Item{
    const newItem: Item = {
        id: uuidv4(),
        name,
        price,
        description
    };
    return newItem;
}

function addToCart(user:User, item: Item):void{
    user.cart.push(item)
}

function removeFromCart(user: User, itemToRemove: Item):void{
    user.cart = user.cart.filter(item => item.id !== itemToRemove.id)
}

function removeQuantityFromCart(user: User, itemToRemove: Item, quantity:number):void{
    for (let i=0; i<quantity; i++){
        let index = user.cart.findIndex(item => item.id === itemToRemove.id);
        user.cart.splice(index, 1);
    }
}

function cartTotal(user:User){
    let total = 0
    for (let x of user.cart){
        total+= x.price
    }
    console.log(total) 
}

function printCart(user:User){
    for(let x of user.cart){
        console.log(x.name)
    }
}


const andy = createUser('Andy', 27);
const hotTopicShirt = createItem('Flaming Tee', 49.99, 'Flaming Hot Topic T-Shirt');
const bananas = createItem('Bananas', 2.99, '1 lb of Yellow Chiquita Bananas');
const gucciBandanna = createItem('Gucci Bandanna', 189.99, 'Gucci Bandanna Gucci Gucci Bandanna')

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