import type {ReactNode} from "react";

interface ButtonProps {
    callback?: () => void,
    className?: string,
    children: ReactNode
}

const Button = ({children, callback, className}: ButtonProps) => {
    return (
        <div onClick={callback ?? (() => {})} className={`bg-red-color border-black border-2 rounded-md px-2 py-1 cursor-pointer hover:bg-yellow-500 hover:text-white ${className ?? ''}`}>{children}</div>
    );
};

export default Button;