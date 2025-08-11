import NavigationBar from "../components/Navbar"
import { Outlet } from "react-router-dom"
import ContentContainer from "../components/Content"

export default function MainLayout() {
    return (
        <>
            <NavigationBar />
            <h1>🚧Page Under Construction🚧</h1>
            <ContentContainer>
                <Outlet />
            </ContentContainer>
        </>
    )
}