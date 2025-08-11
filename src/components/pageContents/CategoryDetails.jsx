import ContentCard from "../pageLayout/ContentCard"
import { Row, Col } from "react-bootstrap"

export default function CategoryDetails({ recipes }) {
    if (!recipes) {
        return <p>If you listen closely, you can hear your tummy grumble. Look up another recipe.</p>
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
                        />
                    </Col>
                ))}
            </Row>
        </>
    )
}