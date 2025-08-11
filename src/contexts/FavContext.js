import { createContext } from "react"

const FavContext = createContext({
    currentUser: null,
    favorites: [],
    login: () => { },
    logout: () => { },
    addToFav: () => { },
    removeFromFav: () => { }
})

export default FavContext