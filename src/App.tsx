
import './App.css'

import {useState} from "react";
import {StarContext} from "./utils/context";
import Header from "./components/Header.tsx";
import Main from "./components/Main.tsx";
import Footer from "./components/Footer.tsx";
import {navItems} from "./utils/constant.ts";


function App() {
    const [page , setPage] = useState(navItems[0]);

    return (

        <div>
            <StarContext value={{page:page,changePage:setPage}}>
                <Header />
                <Main />
                <Footer/>
            </StarContext>

        </div>

    )
}

export default App
