import NavigationBar from "../components/Navbar"
import { Outlet } from "react-router-dom"

export default function MainLayout() {
    return (
        <>
            <NavigationBar />
            <div>
                <Outlet />
            </div>
        </>
    )
}