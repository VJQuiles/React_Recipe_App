import { mealsByCategory } from "../libs/fakeData"
import ContentCard from "../components/pageLayout/ContentCard"
import { Container, Row, Col } from "react-bootstrap"


export default function HomePage() {

    const everyRecipe = Object.values(mealsByCategory).flat()

    return (
        <>
            <Container>
                <h1>Prepare to get hungry!</h1>
                <Row xs={1} sm={2} md={3} lg={4}>
                    {everyRecipe.map((recipe) => (
                        <Col key={recipe.idMeal}>
                            <ContentCard
                                image={recipe.strMealThumb}
                                title={recipe.strMeal}
                                btnText="Check it Out"
                                link={`/recipes/${recipe.idMeal}`} />
                        </Col>
                    ))}
                </Row>
            </Container>
        </>
    )
}