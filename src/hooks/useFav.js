import { useContext } from "react"
import FavContext from "/src/contexts/FavContext.js"

export default function useFav() {
    return useContext(FavContext)
}