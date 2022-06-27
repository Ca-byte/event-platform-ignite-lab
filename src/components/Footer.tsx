import { RocketSeatLogo } from "./RocketseatLogo";

export function Footer(){
    return(
        <footer className="w-full border-t-2 border-gray-500 lg:flex lg:justify-between items-center bg-gray-700 lg:p-8 p-6">
                <div className="lg:flex  justify-center items-center">
                    <div className="flex justify-center my-2">
                        <RocketSeatLogo />
                    </div>
                    <span className="text-base text-gray-200 lg:pl-4 flex justify-center mb-3">
                        Rocketseat - Todos os direitos reservados
                    </span>
                </div>
                <span className="text-gray-200 text-base lg:px-8 flex justify-center">Políticas de privacidade</span>
            </footer>
    )
}