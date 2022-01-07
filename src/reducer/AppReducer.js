import { createStore } from 'redux'

const INITIAL_STATE = {menuHome: true, favorites:[], favoritesId:[]}

const reducer = (state = INITIAL_STATE, action) =>{
    switch (action.type) {
        case 'CHANGE_MENU':
            return { ...state, menuHome: action.menuHome };
        case 'ADD_FAVORITES':
            return { ...state, favorites:[...state.favorites, action.favorite], 
                favoritesId: [...state.favoritesId, action.favoriteId] }
        case 'REMOVE_FAVORITE':
            return {...state, 
                favorites: state.favorites.filter(item => item.id !== action.delete.id),
                favoritesId: state.favoritesId.filter(item => item !== action.deleteId),
            }
        default:
            return state
    }
}
const store = createStore(reducer)

export default store