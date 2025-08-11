import { LoginButton, LogoutButton, SearchButton, FavoriteButton, RemoveButton } from "/src/components/pageButtons/pageButtons.jsx"

export default function HomePage() {
    return (
        <>
            <h1>هذا مجرد عنصر نائب</h1>
            <LoginButton onClick={() => console.log('Login clicked')} />
            <LogoutButton onClick={() => console.log('Logout clicked')} />
            <SearchButton onClick={() => console.log('Search clicked')} />
            <FavoriteButton onClick={() => console.log('Favorite clicked')} />
            <RemoveButton onClick={() => console.log('Remove clicked')} />

        </>
    )
}