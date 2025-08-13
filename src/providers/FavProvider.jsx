import FavContext from "../contexts/FavContext"
import { useState, useEffect } from "react"

const FavProvider = ({ children }) => {

    const [favorites, setFavorites] = useState(() => {
        try {
            const stored = localStorage.getItem("favorites")
            return stored ? JSON.parse(stored) : []
        } catch {
            return []
        }
    })

    useEffect(() => {
        localStorage.setItem("favorites", JSON.stringify(favorites))
    }, [favorites])


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
                favorites,
                addToFav,
                removeFromFav
            }}>
            {children}
        </FavContext.Provider>
    )

}

export default FavProvider
