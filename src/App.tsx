import './App.css'
import Header from "./components/Header.tsx";
import Main from "./components/Main.tsx";
import Footer from "./components/Footer.tsx";
import {useState} from "react";
import {navItems} from "./utils/constant.ts";
import {StarContext} from "./utils/context.ts";

function App() {
    const [page, setPage] = useState(navItems[0]);

    return (
        <div>
            <StarContext value={{ page,  changePage: setPage }}>
                <Header/>
                <Main/>
                <Footer/>
            </StarContext>
        </div>

    )
}

export default App
