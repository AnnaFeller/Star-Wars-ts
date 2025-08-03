import {createContext} from "react";
import type {SWContextValue} from "./types";
import {defaultHero} from "./constant.ts";

export const SWContext = createContext<SWContextValue>({
    hero: defaultHero,
    changeHero: (hero?: string) => console.log(hero)
});