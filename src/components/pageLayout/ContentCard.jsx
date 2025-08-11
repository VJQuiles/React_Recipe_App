import { Button, Card } from "react-bootstrap"
import { Link } from "react-router-dom"

export default function ContentCard({
    image,
    title,
    description,
    btnText,
    onBtnClick,
    link }) {
    return (
        <Card style={{ width: '18rem' }}>
            {image && <Card.Img variant="top" src={image} />}
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>{description}</Card.Text>
                {btnText ? (
                    link ? (
                        <Card.Link as={Link} to={link}>{btnText}</Card.Link>
                    ) : (
                        <Button variant="primary" onClick={onBtnClick}>{btnText}</Button>
                    )
                ) : null}
            </Card.Body>
        </Card>
    )
}
