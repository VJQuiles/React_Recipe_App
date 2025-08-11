import ContentCard from "../pageLayout/ContentCard"
import { Container, Row, Col } from "react-bootstrap"
import { useNavigate } from "react-router-dom"

export default function SearchResults({ searchResults = [] }) {
    const navigate = useNavigate()

    return (
        <Container>
            <h1>Results, fresh and hot!</h1>
            <Row>
                {searchResults.length > 0 ? (
                    searchResults.map((result) => (
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
