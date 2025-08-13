import useQuery from "../hooks/useQuery"
import SearchResults from "../components/pageContents/SearchResults"



export default function SearchReultsPage() {
    const query = useQuery().get("query") || ""

    const everyMeal = Object.values(mealsByCategory).flat()

    const queriedResults = everyMeal.filter((meal) => meal.strMeal.toLowerCase().includes(query.toLowerCase())
    )

    const resultsFormat = queriedResults.map((meal) => ({
        id: meal.idMeal,
        image: meal.strMealThumb,
        title: meal.strMeal
    }))

    return (
        <>
            <h2>Is this what you were looking for?</h2>
            <SearchResults searchResults={resultsFormat} />
        </>
    )
}