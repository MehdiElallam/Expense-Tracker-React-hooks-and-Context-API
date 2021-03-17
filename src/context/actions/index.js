
    export const addTransac = transaction => dispatch => {

        dispatch({
            type : 'ADD_TRANSAC',
            payload : transaction
        })

    }
    
    export const deleteTransac = id => dispatch => {

        dispatch({
            type : 'DELETE_TRANSAC',
            payload : id
        })

    }