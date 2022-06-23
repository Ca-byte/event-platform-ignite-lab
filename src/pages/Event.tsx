import {Campfire, Confetti } from "phosphor-react";
import { useParams } from "react-router-dom";
import { Header } from "../components/Header";
import { SideBar } from "../components/SideBar";
import { Video } from "../components/Video";


export function Event(){
    const { slug } = useParams<{ slug: string }>()

    return(
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex flex-1">
                { slug ? <Video  lessonSlug={slug} /> 
                :   <div className="flex-1  bg-gray-500  flex justify-center">
                        <div className=" flex-col justify-center w-[600px] max-h-[800px] bg-gray-600 mt-14 border-4 border-gray-400">
                            <div className="flex max-w-[500px] mx-auto">
                                <h1 className="text-[40px] text-center font-bold py-4">
                                        Seja Bem vindo, ao evento mais esperado do mês de Junho!
                                </h1>
                            </div>
                            <p className="text-center text-red-500 text-2xl max-w-[600px] p-2 justify-center items-center flex">
                                    Mas quente que quentão, não é mentira! <Campfire size={38} color="#F75A68" className="mx-2" />
                            </p>
                            <h2 className="text-center text-sky-400 text-[38px] font-bold pb-4 underline decoration-purple-500">Ignite Lab | ReactJS</h2>
                            <div className="flex justify-center p-2">
                                <p className="text-center text-2xl max-w-[600px] p-2">
                                    Resumo das tecnologias que fazem ou vão fazer parte do seu vocabulario.
                                    ReactJs, Typescript, Graphql, GraphCMS, Apollo e ai ainda nem dei spoiler das libs. 
                                </p>
                            </div>
                            <div className="flex justify-center">
                                <span className="font-bold text-2xl text-purple-500">Ficou Curioso? </span> 
                            </div>
                            <div className="max-w-[400px] text-2xl pt-2.5 flex-col justify-center mx-auto">
                                <span className="flex text-center">
                                    É só acessar as aulas que já disponíveis aqui do lado e se deliciar!
                                </span>
                                <div className="flex justify-center mt-6">
                                    <Confetti size={92} color="#827EFC" />
                                </div>
                            </div>
                        </div>
                    </div>
                }
                <SideBar />
            </main>
        </div>
    )
}