import useFetch from "../hooks/useFetch"
import ContentCard from "../components/pageLayout/ContentCard"
import { Container, Row, Col } from "react-bootstrap"
import Spinner from "/src/components/pageUtil/Spinners.jsx"


export default function HomePage() {

    const url = "https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata"

    const { data, loading, error } = useFetch(url)

    if (loading) {
        return (
            <Spinner animation="border" role="status" />
        )
    }

    if (error) {
        return (
            <Alert variant="danger">Error: {error.message}</Alert>
        )
    }

    const meals = data?.meals || []

    return (
        <>
            <Container>
                <h1>Prepare to get hungry!</h1>
                <Row xs={1} sm={2} md={3} lg={4}>
                    {meals.map((recipe) => (
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