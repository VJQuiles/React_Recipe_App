import { Container, Row, Col } from "react-bootstrap"
import ContentCard from "/src/components/pageLayout/ContentCard.jsx"
import { mealDetails } from "../libs/fakeData"
import { useParams } from "react-router-dom"


export default function RecipeDetails() {

    const { slug } = useParams()

    const selectedRecipe = mealDetails[slug]

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
                        btnText={"Fave Five"}
                        onBtnClick={() => console.log("Test test")}
                    />
                </Col>
            </Row>
        </Container>
    )
}
