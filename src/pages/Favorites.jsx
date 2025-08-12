import ContentCard from "/src/components/pageLayout/ContentCard.jsx"
import { Container, Row, Col } from "react-bootstrap"
import { Link } from "react-router-dom"
import useFav from "/src/hooks/useFav.js"

export default function FavoritesPage() {
    const { favorites, removeFromFav } = useFav()

    if (favorites.length === 0) {
        return (
            <Container className="mt-4">
                <h3>Ayo, you gone come here with no faves? Drawn smh 😒</h3>
                <p>
                    <Link to="/">Go head and get you somethin to cook then come back</Link>
                </p>
            </Container>
        )
    }

    return (
        <Container className="mt-4">
            <h2>Yo Faves, All in one place chea 🔥</h2>
            <Row>
                {favorites.map((recipe) => (
                    <Col md={4} key={recipe.idMeal} className="mb-4">
                        <ContentCard
                            image={recipe.strMealThumb}
                            title={recipe.strMeal}
                            description={recipe.strInstructions}
                            btnText="Remove from Fave"
                            onBtnClick={() => removeFromFav(recipe.idMeal)}
                        />
                    </Col>
                ))}
            </Row>
        </Container>
    )
}
