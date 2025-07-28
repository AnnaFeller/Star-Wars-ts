
import {NavLink} from "react-router";
import Button from "./ui/Button.tsx";
interface NavProps {
    itemTitle: string;

}

const NavItem = ({ itemTitle }: NavProps) => {

    return (
        <NavLink to={`/${itemTitle}`}><Button>{itemTitle}</Button> </NavLink>
    );
    //он меняет адресную строку но не перезапускает аплекацю , но мкеняет тот кто привязан к нему
}
// добавляем промт если есть больше одного придмета , одинаковые только разные название
// };<li
//     onClick={() => changePage(itemTitle)}
//     className="bg-red-color border-black border-2 rounded-md px-2 py-1 cursor-pointer hover:bg-yellow-500 hover:text-white"
// >
//     {itemTitle}
// </li>

export default NavItem;
