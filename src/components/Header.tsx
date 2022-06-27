import { Logo } from "./Logo";

export function Header(){
    return(
        <header className="w-full px-4 py-5 flex items-center lg:justify-center bg-gray-700 border-b border-gray-600">
           <Logo />
        </header>

    )
}