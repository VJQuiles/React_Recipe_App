import { Container, Row, Col } from "react-bootstrap"
import ContentCard from "/src/components/pageLayout/ContentCard.jsx"

export default function RecipeDetails({
    recipe,
    isFavorite = false,
    onAddToFav,
    onRemoveFromFav
}) {
    if (!recipe) {
        return <p>The secret to goodness incoming...</p>
    }

    return (
        <Container>
            <Row>
                <Col md={6}>
                    <ContentCard
                        image={recipe.strMealThumb}
                        title={recipe.strMeal}
                        description={recipe.strInstructions}
                        btnText={isFavorite ? "Remove from Favorites" : "Add to Favorites"}
                        onBtnClick={isFavorite ? onRemoveFromFav : onAddToFav}
                    />
                </Col>
            </Row>
        </Container>
    )
}
