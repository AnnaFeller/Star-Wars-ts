import Hero from "./Hero.tsx";
import DreamTeam from "./DreamTeam.tsx";
import OpeningCrawl from "./OpeningCrawl.tsx";
import {useParams} from "react-router";
import {characters, defaultHero} from "../utils/constant.ts";
import {SWContext} from "../utils/context.ts";
import {useContext, useEffect} from "react";
import ErrorPage from "./ErrorPage.tsx";

const Home = () => {
    const {heroId = defaultHero} = useParams()
    const {changeHero} = useContext(SWContext)

    useEffect(() => {
        if (!(heroId in characters)) {
           return //если heroId не правельный , будет страница error
        }
        changeHero(heroId);

    }, [heroId]);
    return(heroId in characters )? (
        <main className="clearfix">
            <Hero/>
            <DreamTeam/>
            <OpeningCrawl/>
        </main>
    ):<ErrorPage/>;
};

export default Home;