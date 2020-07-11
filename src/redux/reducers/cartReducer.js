import {
    GET_CART,
    ADD_PRODUCT,
    QTY,
    FINISH
} from "../actionTypes";

const initialState = {
    products: [],
    totalQuantity: 0,
    total: 0
};

const cartReducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case GET_CART:
            return { ...state, products: state.products, totalQuantity: state.totalQuantity, total: state.total };
        case ADD_PRODUCT:
            payload.quantity = 1
            console.log('add product')
            return { ...state, products: [...state.products, payload], totalQuantity: state.totalQuantity + payload.quantity, total: state.total + (payload.quantity * payload.productPrice) };
        case QTY:
            const { id, newProduct } = payload;
            let total = 0
            let quantity = 0
            let newProducts = [...state.products]
            if (newProduct.quantity === 0) {
                newProducts = newProducts.filter(e => e.productId !== id)
            }
            else {
                const productIndex = newProducts.find(product => product.id === id)
                if (newProducts)
                    newProducts[productIndex] = { id, ...newProduct }
            }
            newProducts.forEach(e => {
                total += (e.quantity * e.productPrice)
                quantity += e.quantity
            })
            return { ...state, products: newProducts, totalQuantity: quantity, total: total }
        case FINISH:
            return { ...state, products: [], totalQuantity: 0, total: 0 }
        default:
            return state;
    }
};

export default cartReducer;
