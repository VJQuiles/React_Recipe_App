import { useEffect } from "react"
import { Container, Row, Col } from "react-bootstrap"
import ContentCard from "/src/components/pageLayout/ContentCard.jsx"
import { useParams, useNavigate } from "react-router-dom"
import useFav from "/src/hooks/useFav"
import useFetch from "../hooks/useFetch"
import Spinners from "/src/components/pageUtil/Spinners.jsx"

export default function RecipeDetails() {

    const navigate = useNavigate()

    const { slug } = useParams()

    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${slug}`

    const { data, loading, error } = useFetch(url)
    const { favorites, addToFav, removeFromFav } = useFav()

    const selectedRecipe = Array.isArray(data?.meals) ? data.meals[0] : null

    console.log({ loading, error, selectedRecipe, navigate })
    useEffect(() => {
        if ((!loading && (error || !selectedRecipe))) {
            navigate("/not-found")
        }
    }, [loading, error, selectedRecipe, navigate])

    if (loading) {
        return <Spinners animation="border" role="status" />
    }

    if (!selectedRecipe) {
        return <p>Recipe not found: {slug}</p>
    }

    const isFav = favorites.some((fav) => fav.idMeal === slug)

    const handleFaveFivePress = () => {
        if (isFav) {
            removeFromFav(selectedRecipe.idMeal)
            console.log("Remove pressed")
        } else {
            addToFav(selectedRecipe)
            console.log("Add pressed")
        }
    }

    return (
        <Container>
            <Row>
                <Col md={6}>
                    <ContentCard
                        image={selectedRecipe.strMealThumb}
                        title={selectedRecipe.strMeal}
                        description={selectedRecipe.strInstructions}
                        btnText={isFav ? "No Five" : "Fave Five"}
                        onBtnClick={handleFaveFivePress}
                    />
                </Col>
            </Row>
        </Container>
    )
}
