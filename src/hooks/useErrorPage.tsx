import {useContext, useEffect} from "react";
import {characters, defaultHero} from "../utils/constant.ts";
import {useParams} from "react-router";
import {SWContext} from "../utils/context.ts";

export const useErrorPage = () => {
    const {heroId = defaultHero} = useParams()
    const {changeHero} = useContext(SWContext)


    useEffect(() => {
        if (!(heroId in characters)) {
            changeHero() //если heroId не правельный , будет страница error
        }else {
            changeHero(heroId);
        }

    },[heroId])

        return{
        isError: !(heroId in characters),
heroId
    };
}



