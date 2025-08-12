import FavContext from "../contexts/FavContext"
import { useState } from "react"

const FavProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null)
    const [favorites, setFavorites] = useState([])

    const login = (user) => {
        setCurrentUser(user)
    }

    const logout = () => {
        setCurrentUser(null)
        setFavorites([])
    }

    const addToFav = (favItem) => {
        setFavorites((prev) => {
            if (prev.find((item) => item.idMeal === favItem.idMeal)) {
                return prev
            }
            return [...prev, favItem]
        })
    }

    const removeFromFav = (idMeal) => {
        setFavorites((prev) => prev.filter((fav) => fav.idMeal !== idMeal))
    }

    return (
        <FavContext.Provider
            value={{
                currentUser,
                favorites,
                login,
                logout,
                addToFav,
                removeFromFav
            }}>
            {children}
        </FavContext.Provider>
    )

}

export default FavProvider
