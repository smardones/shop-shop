import React, { createContext, useContext } from "react";
import { useProductReducer } from '../reducers';

const StoreContext = createContext();
const { Provider } = StoreContext;

const StoreProvider = ({value = [], ...props}) => {
    const [state, dispatch] = useProductReducer({
        products: [],
        cart: [],
        cartOpen: false,
        categories: [],
        currentCategory: '',
    });
    console.log(state);
    return <Provider value={[state, dispatch]} {...props} />;
};

const useStoreContext = () => {
    return useContext(StoreContext);
}

export { StoreProvider, useStoreContext };

// AS A REMINDER OF WHAT useProductReducer is
// export function useProductReducer(initialState) {
//     return useReducer(reducer, initialState);
// }