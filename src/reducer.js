export const initialState = {
  basket: [],
  user: null,
};

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "ADD_TO_BASKET":
      //Logic for adding item to basket
      return {
        ...state,
        basket: [...state.basket, action.item],
      };
    case "REMOVE_FROM_BASKET":
      //Logic for removing item from basket
      let newBasket = [...state.basket];

      const index = state.basket.findIndex((basketItem) => {
        return basketItem.id === action.id;
      });
      if (index >= 0) {
        //Item exists remove it
        newBasket.splice(index, 1);
      } else {
        console.warn(`Can't remove ${action.id} as its not a basket`);
      }
      return { ...state, basket: newBasket };
    default:
      return state;
  }
};

export default reducer;
