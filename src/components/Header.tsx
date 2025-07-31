import Navigation from "./Navigation.tsx";
import {characters} from "../utils/constant.ts";
import {useErrorPage} from "../hooks/useErrorPage.tsx";
import ErrorPage from "./ErrorPage.tsx";


const Header = () => {
    const{isError,heroId} = useErrorPage();

    const nameHero  = isError ? 'Error' : characters[heroId].name
    return !isError ? (
        <header className="rounded-t-3xl bg-grey-color">
            <Navigation/>
            <h1 className="text-center text-3xl py-6">{nameHero}</h1>
        </header>
    ): <ErrorPage/>;
};

export default Header;