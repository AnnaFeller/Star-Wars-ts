import {Route, Routes} from "react-router";
import Home from "./Home.tsx";
import {navItems} from "../utils/constant.ts";
import AboutMe from "./About Me.tsx";
import StarWars from "./StarWars.tsx";
import Contact from "./Contact.tsx";
import ErrorPage from "./ErrorPage.tsx";


const Main = () => {

//меняет страницы в url
    return (
        <Routes>
            {['/',navItems[0]].map(path=><Route  key ={path} path={path} element={<Home/>}/>)}
            {/*<Route path="/" element={<Home/>}/>*/}
            {/*<Route path={`${navItems[0]}`} element={<Home/>}/>*/}
            <Route path={`${navItems[1]}`} element={<AboutMe/>}/>
            <Route path={`${navItems[2]}`} element={<StarWars/>}/>
            <Route path={`${navItems[3]}`} element={<Contact/>}/>
            <Route path={'*'} element={<ErrorPage/>}/>

        </Routes>
    )
}
export default Main;