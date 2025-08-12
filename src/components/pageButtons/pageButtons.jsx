import { Button } from "react-bootstrap"

export function SearchButton({ onClick }) {
    return (
        <>
            <Button variant="outline-info" onClick={onClick}>Search</Button>
        </>
    )
}

export function FavoriteButton({ onClick }) {
    return (
        <>
            <Button variant="outline-success" onClick={onClick}>Favorite</Button>
        </>
    )
}

export function RemoveButton({ onClick }) {
    return (
        <>
            <Button variant="outline-danger" onClick={onClick}>Remove</Button>
        </>
    )
}