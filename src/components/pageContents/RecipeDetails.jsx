import ContentCard from "../pageLayout/ContentCard"
import { Container, Row } from "react-bootstrap"

export default function RecipeDetails({
    image,
    title,
    description,
    onAddtoFaves,
    onRemoveFromFaves,
    isFavorite = false
}) {
    return (
        <Container>
            <Row>
                <ContentCard
                    image={image}
                    title={title}
                    description={description}
                    btnText={isFavorite ? "Remove" : "Add"}
                    onBtnClick={isFavorite ? onRemoveFromFaves : onAddtoFaves}
                />
            </Row>
        </Container>
    )
}