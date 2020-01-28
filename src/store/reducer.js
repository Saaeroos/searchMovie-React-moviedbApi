const initialState = {
    page: 1
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case 'changePage':
            return {
                page: action.activePage
            }
        default:
            return {
                ...state
            }
    }
}

export default reducer