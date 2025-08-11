import { Button } from "react-bootstrap"

export function LoginButton({ onClick }) {
    return (
        <>
            <Button variant="outline-primary" onClick={onClick}>Login</Button>
        </>
    )
}

export function LogoutButton({ onClick }) {
    return (
        <>
            <Button variant="outline-primary" onClick={onClick}>Logout</Button>
        </>
    )
}

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
            <Button variant="outline-danger" onClick={onClick}>Favorite</Button>
        </>
    )
}