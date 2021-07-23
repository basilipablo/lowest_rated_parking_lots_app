const initialState = {
    businesses: [],
    total: 0,
};

const reducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case 'SET_BUSINESSES': {
            return {
                businesses: action.payload.businesses,
                total: action.payload.total,
            }
        }
        default:
            return {
                ...state
            }
    }
}

export default reducer