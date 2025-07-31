import Hero from "./Hero.tsx";
import DreamTeam from "./DreamTeam.tsx";
import OpeningCrawl from "./OpeningCrawl.tsx";
import ErrorPage from "./ErrorPage.tsx";
import {useErrorPage} from "../hooks/useErrorPage.tsx";

const Home = () => {
    const{isError} = useErrorPage();
    // const {heroId = defaultHero} = useParams()
    // const {changeHero} = useContext(SWContext)
    //
    // useEffect(() => {
    //     if (!(heroId in characters)) {
    //        return //если heroId не правельный , будет страница error
    //     }
    //     changeHero(heroId);
    //
    // }, [heroId]);

    return !isError ? (
        <main className="clearfix">
            <Hero/>
            <DreamTeam/>
            <OpeningCrawl/>
        </main>
    ):<ErrorPage/>;
};

export default Home;