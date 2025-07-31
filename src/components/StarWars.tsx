
import {starWarsInfo} from "../utils/constant.ts";
import {useErrorPage} from "../hooks/useErrorPage.tsx";
import ErrorPage from "./ErrorPage.tsx";

const StarWars = () => {
    const{isError} = useErrorPage();
    return !isError ? (
        <div className={'farGalaxy'}>
            {starWarsInfo}
        </div>
    ): <ErrorPage/>;

};

export default StarWars;