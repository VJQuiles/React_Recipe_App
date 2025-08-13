import { Container, Row, Col } from "react-bootstrap"
import ContentCard from "/src/components/pageLayout/ContentCard.jsx"
import { useParams } from "react-router-dom"
import useFav from "/src/hooks/useFav"
import useFetch from "../hooks/useFetch"
import Spinners from "/src/components/pageUtil/Spinners.jsx"


export default function RecipeDetails() {

    const { slug } = useParams()

    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${slug}`

    const { data, loading, error } = useFetch(url)

    const { favorites, addToFav, removeFromFav } = useFav()

    if (loading) {
        return (
            <Spinners animation="border" role="status" />
        )
    }

    if (error) {
        return (
            <Alert variant="danger">Error: {error.message}</Alert>
        )
    }

    const selectedRecipe = Array.isArray(data?.meals) ? data.meals[0] : null

    const isFav = favorites.some((fav) => fav.idMeal === slug)

    const handleFaveFivePress = () => {
        if (isFav) {
            removeFromFav(selectedRecipe.idMeal)
            console.log("Remove pressed")
        }
        else {
            addToFav(selectedRecipe)
            console.log("Add pressed")
        }
    }

    if (!selectedRecipe) {
        return <p>Are you tired of looking at this yet? {slug}</p>
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
