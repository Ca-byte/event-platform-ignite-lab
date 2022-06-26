import { RocketSeatLogo } from "./RocketseatLogo";

export function Footer(){
    return(
        <footer className="w-full border-t-2 border-gray-500 flex justify-between items-center bg-gray-700 p-8">
                <div className="flex items-center">
                    <RocketSeatLogo />
                    <span className="text-base text-gray-200 pl-4">
                        Rocketseat - Todos os direitos reservados
                    </span>
                </div>
                <span className="text-gray-200 text-base px-8">Políticas de privacidade</span>
            </footer>
    )
}