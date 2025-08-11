import ContentCard from "../pageLayout/ContentCard"
import { Row, Col, Alert } from "react-bootstrap"

export default function CategoryDetails({ recipes }) {
    if (!recipes) {
        return <Alert>If you listen closely, you can hear your tummy grumble. Look up another recipe.</Alert>
    }

    return (
        <>
            <Row className="g-3">
                {recipes.map((recipe) => (
                    <Col key={recipe.id} xs={12} sm={6} md={4} lg={3}>
                        <ContentCard
                            image={recipe.image}
                            title={recipe.title}
                            link={`/recipes/${recipe.id}`}
                            btnText="View Recipe"
                        />
                    </Col>
                ))}
            </Row>
        </>
    )
}