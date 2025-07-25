import {createContext} from "react";
import type {StarContextValue} from "./types";
import {navItems} from "./constant.ts";

export const StarContext = createContext<StarContextValue>({
    page:navItems[0],
    cahangePage:(page:string)=>console.log(page)
})