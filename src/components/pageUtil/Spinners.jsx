import { Spinner } from "react-bootstrap"

export default function LoadingSpinner() {

    return (
        <Spinner animation="border" role="status">
            <span className="visually-hidden">Round and round we go...</span>
        </Spinner>
    )
}