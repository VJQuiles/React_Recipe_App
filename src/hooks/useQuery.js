import { useLocation } from "react-router-dom"

function useQuery() {
    return URLSearchParams(useLocation().search)
}

export default useQuery