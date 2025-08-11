import { Container, Row, Col } from "react-bootstrap"

export default function ContentContainer({ children }) {
    return (
        <>
            <Container>
                <Row>
                    <Col>{children}</Col>
                </Row>
            </Container>
        </>
    )
}