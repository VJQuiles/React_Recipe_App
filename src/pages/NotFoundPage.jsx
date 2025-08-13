import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";

export default function NotFoundPage() {
    return (
        <Container className="text-center mt-5">
            <h1>404 - Woah, the Big Empty</h1>
            <p className="mb-4">
                "The universe is a pretty big place. If it's just us, seems like an awful waste of space."
                <br />— Carl Sagan
            </p>
            <Link to="/" className="btn btn-primary">
                Go back to where it doesn't feel so existential
            </Link>
        </Container>
    );
}
