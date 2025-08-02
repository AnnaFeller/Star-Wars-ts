import Navigation from "./Navigation.tsx";
import {useContext} from "react";
import {SWContext} from "../utils/context.ts";
import {characters} from "../utils/constant.ts";
import {useErrorPage} from "../hooks/useErrorPage.tsx";
import ErrorPage from "./ErrorPage.tsx";

const Header = () => {
    const {hero} = useContext(SWContext)
    const{isError} = useErrorPage();
    return !isError ? (
        <header className="rounded-t-3xl bg-grey-color">
            <Navigation/>
            <h1 className="text-center text-3xl py-6">{characters[hero].name}</h1>
        </header>
    ): <ErrorPage/>;
};

export default Header;