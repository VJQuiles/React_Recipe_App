import ContentCard from "../pageLayout/ContentCard"
import { Container, Row, Col } from "react-bootstrap"
import { Link } from "react-router-dom"

export default function Favorites({ favorites }) {
    if (!favorites) {
        return (
            <Container>
                <h3>Hey! Go hit that add button on the pics that look good!</h3>
                <p><Link to="/">Lets head back and take a look</Link></p>
            </Container>
        )
    }

    return (
        <Container>
            <h3>Your Faves🥰</h3>
            <Row xs={1} sm={2} md={3} lg={4}>
                {favorites.map((id, image, title, description) => (
                    <Col key={id}>
                        <ContentCard
                            image={image}
                            title={title}
                            description={description}
                            btnText={"Check it out"}
                            onBtnClick={onclick}
                            link={`recipes/${id}`} />
                    </Col>
                ))}
            </Row>
        </Container>
    )
}