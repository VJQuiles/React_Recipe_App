import ContentCard from "../pageLayout/ContentCard"
import { Container, Row } from "react-bootstrap"
import useFav from "../../hooks/useFav"

export default function RecipeDetails({
    id,
    image,
    title,
    description,
}) {

    const { favorites, addtoFav, removeFromFav } = useFav()

    const isFavorite = favorites.some((fav) => fav.id === id)

    const handleAddFav = () => addtoFav({ id, image, title, description })
    const handleRemoveFav = () => removeFromFav(id)

    return (
        <Container>
            <Row>
                <ContentCard
                    image={image}
                    title={title}
                    description={description}
                    btnText={isFavorite ? "Remove" : "Add"}
                    onBtnClick={isFavorite ? handleRemoveFav : handleAddFav}
                />
            </Row>
        </Container>
    )
}