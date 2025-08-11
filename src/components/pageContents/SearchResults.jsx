import ContentCard from "../pageLayout/ContentCard"
import { Container, Row, Col } from "react-bootstrap"

export default function SearchResults() {
    const searchResults = []

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
                                onBtnClick={() => console.log(`${result.title}`)}
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
