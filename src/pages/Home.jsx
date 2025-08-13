import useFetch from "../hooks/useFetch"
import ContentCard from "../components/pageLayout/ContentCard"
import { Container, Row, Col } from "react-bootstrap"
import Spinners from "/src/components/pageUtil/Spinners.jsx"
import { useNavigate } from "react-router-dom"


export default function HomePage() {

    const navigate = useNavigate()

    const url = "https://www.themealdb.com/api/json/v1/1/search.php?s="

    const { data, loading, error } = useFetch(url)

    const meals = data?.meals || []


    if (loading) {
        return (
            <Spinners animation="border" role="status" />
        )
    }

    if (error || meals === 0) {
        navigate("/not-found")
        return null
    }


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