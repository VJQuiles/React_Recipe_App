import ContentCard from "../pageLayout/ContentCard"
import { Container, Row, Col } from "react-bootstrap"
import { useNavigate } from "react-router-dom"
import useQuery from "../../hooks/useQuery"

export default function SearchResults({ searchResults = [] }) {
    const navigate = useNavigate()
    const query = useQuery().get("query") || ""

    const queriedResults = searchResults.filter((meal) => meal.strMeal.toLowerCase().includes(query.toLowerCase())
    )

    return (
        <Container>
            <h1>Results, fresh and hot!</h1>
            <Row>
                {queriedResults.length > 0 ? (
                    queriedResults.map((result) => (
                        <Col key={result.id}>
                            <ContentCard
                                image={result.image}
                                title={result.title}
                                description={result.description}
                                btnText={"Check it out"}
                                link={`/recipes/${result.id}`}
                                onBtnClick={() => navigate(`/recipes/${result.id}`)}
                            />
                        </Col>
                    ))
                ) : (
                    <Col>
                        <p>No results found.</p>
                    </Col>
                )}
            </Row>
        </Container>
    )
}
