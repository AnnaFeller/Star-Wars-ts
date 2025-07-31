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
        //     {['/',navItems[0], `${navItems[0]}/:heroId`].map(path=><Route  key ={path} path={path} element={<Home/>}/>)}
        //     {[`${navItems[1]}`, `${navItems[1]}/:heroId`].map(path => <Route key= {path} path={path} element={<AboutMe/>}/>)}
        //     {[`${navItems[2]}`, `${navItems[2]}/:heroId`].map(path => <Route key = {path} path ={path} element={<StarWars/>}/>)}
        //     {[`${navItems[3]}`, `${navItems[3]}/:heroId`].map(path => <Route key = {path} path={path} element={<Contact/>}/>)}
        //     {/*<Route path="/" element={<Home/>}/>*/}
        //     {/*<Route path={`${navItems[0]}`} element={<Home/>}/>*/}
        //     {/*<Route path={`${navItems[2]}`} element={<StarWars/>}/>*/}
        //     {/*<Route path={`${navItems[3]}`} element={<Contact/>}/>*/}
        //     <Route path={'*'} element={<ErrorPage/>}/>

        </Routes>
    )
}
export default Main;