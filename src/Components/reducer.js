export const initialState = {
    basket: []
}

// Finding Total Amount
// The reducer walks through the array element - by - element, at each step adding the current array value to the result from the previous step(this result is the running sum of all the previous steps) — until there are no more elements to add.
export const getBasketTotal = (basket) =>
    basket?.reduce((amount, item) => item.price + amount, 0)

const reducer = (state, action) => {

    switch (action.type) {
        case "ADD_TO_BASKET":
            return {
                ...state,
                basket: [...state.basket, action.item]
            }

        case "REMOVE_FROM_BASKET":
            const index = state.basket.findIndex(
                (basketItem) => basketItem.title === action.title
            )
            let newBasket = [...state.basket]
            if (index >= 0) {
                newBasket.splice(index, 1)
            } else {
                console.log(`can't remove form basket`);
            }
            return {
                ...state,
                basket: newBasket
            }
        default:
            return state
    }

}

export default reducer;