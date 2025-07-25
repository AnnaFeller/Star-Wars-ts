
import Home from "./Home.tsx";
import AboutMe from "./About Me.tsx";
import {navItems} from "../utils/constant.ts";
import StarWars from "./StarWars.tsx";
import Contact from "./Contact.tsx";
import {useContext} from "react";
import {StarContext} from "../utils/context.ts";


const Main = () => {
const{page} = useContext(StarContext)
    switch (page) {
        case navItems[1]:
            return <AboutMe/>
        case navItems[2]:
            return <StarWars/>
        case navItems[3]:
            return <Contact/>
        default:
            return <Home/>
    }
};

export default Main;