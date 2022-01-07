import { createStore } from 'redux'

const INITIAL_STATE = {menuHome: true}

const reducer = (state = INITIAL_STATE, action) =>{
    switch (action.type) {
        case 'CHANGE_MENU':
            return { ...state, menuHome: action.menuHome } 
        default:
            return state
    }
}
const store = createStore(reducer)

export default store