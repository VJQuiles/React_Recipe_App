import { Container, Row, Col } from "react-bootstrap"
import ContentCard from "/src/components/pageLayout/ContentCard.jsx"
import { mealDetails } from "../libs/fakeData"
import { useParams } from "react-router-dom"
import useFav from "/src/hooks/useFav"


export default function RecipeDetails() {

    const { slug } = useParams()

    const selectedRecipe = mealDetails[slug]

    const { favorites, addToFav, removeFromFav } = useFav()

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
        return <p>Are you tired of looking at this yet?</p>
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
