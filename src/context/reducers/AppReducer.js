export default (state, action) => {
    switch(action.type){
        case 'ADD_TRANSAC' :
            return {
                ...state,
                transactions : [...state.transactions, action.payload]
            }
            
        case 'DELETE_TRANSAC' :
            return {
                ...state,
                transactions : state.transactions.filter(transaction => transaction.id != action.payload)
            }
        default:
            return state;

    }
}