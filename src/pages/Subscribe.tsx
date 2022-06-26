import { useState, FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { Footer } from "../components/Footer";
import { Logo } from "../components/Logo";
import { useCreateSubscriberMutation } from "../graphql/generated";


export function Subscribe(){
    const navigate = useNavigate()

    const [name, setName]= useState('')
    const [email, setEmail]= useState('')

    const  [createSubscriber, {loading}] = useCreateSubscriberMutation()

   function handleSubscribe(event: FormEvent){
        event.preventDefault();
        createSubscriber({
            variables: {
                name,
                email,

            }
        })
        navigate('/event')

    }

    return(
        <div className="min-h-screen bg-blur bg-cover bg-no-repeat flex flex-col items-center ">
            <div className="w-full max-w-[1100px] flex items-center justify-between mt-20 mx-auto relative">
                <div className="max-w-[640px]">
                    <Logo />
                    <h1 className="text-[40px] mt-8 leading-tight">
                        Construa uma <strong className="text-purple-500">aplicação completa</strong>, do zero, com <strong className="text-purple-500">React JS</strong>
                    </h1>
                    <p className=" mt-4 leading-relaxed text-gray-200">
                        Em apenas uma semana você vai dominar
                        na prática uma das tecnologias mais
                        utilizadas e com alta demanda para 
                        acessar as melhores oportunidades 
                        do mercado.
                    </p>
                </div>

                <img 
                    className="absolute max-h-[575px] left-16 " 
                    src="/assets/images/react-logo.svg" 
                    alt="React logo" 
                />

                <div className="p-8 bg-gray-700 border border-gray-500 rounded">
                    <strong className="text-2xl mb-6 block">
                        Inscreva Gratuitamente
                    </strong>
                    <form onSubmit={handleSubscribe}className="flex flex-col gap-2 w-full">
                        <input 
                            className="bg-gray-900 rounded px-5 h-14"
                            type="text"  
                            placeholder="Seu nome completo"
                            onChange={event => setName(event.target.value)}
                            />
                        <input 
                            className="bg-gray-900 rounded px-5 h-14" 
                            type="email"  
                            placeholder="Digite seu email"
                            onChange={event => setEmail(event.target.value)}
                            />
                        <button type="submit" 
                        disabled={loading}
                            className="uppercase mt-4 bg-sky-500 py-4 rounded font-bold text-sm hover:bg-sky-600 disabled:opacity-50 transition-colors">
                            garantir minha vaga
                        </button>
                    </form>
                </div>
            </div>
            <img 
            src="/assets/images/code-editor.png" 
            alt="code editor mockup" 
            className="mt-10" 
            />
            <div className="w-full">
                <Footer />
            </div>
        </div>
    )
}