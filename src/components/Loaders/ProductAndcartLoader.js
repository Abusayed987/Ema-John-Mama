import { getStoredCard } from "../../utilities/fakedb";

export const ProductAndCartLoader = async () => {
    //get data
    const productsData = await fetch('products.json');
    const products = await productsData.json();
    //get data
    const savedCart = getStoredCard();
    const initialCart = [];
    for (const id in savedCart) {
        const addedProduct = products.find(product => product.id === id)
        if (addedProduct) {
            const quantity = savedCart[id];
            addedProduct.quantity = quantity;
            initialCart.push(addedProduct);
            // console.log(initialCart);
        }
    }

    return { products: products, initialCart: initialCart };
}