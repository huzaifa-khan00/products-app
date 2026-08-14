import Navbar from "./Navbar.jsx";
import { Outlet } from "react-router-dom";

function Layout() {

    return (
        <>
            <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-950 transition-colors duration-300">
                <Navbar />
                <Outlet />
            </div>
        </>    
    )
}

export default Layout;