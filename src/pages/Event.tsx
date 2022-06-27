import {Campfire, Confetti, List, X } from "phosphor-react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { SideBar } from "../components/SideBar";
import { Video } from "../components/Video";


export function Event(){
    const { slug } = useParams<{ slug: string }>();
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        if (menuOpen) {
          document.getElementById('sidebar-div')?.classList.add('sidebar-show');
          document.body?.classList.add('scroll');
          window.scrollTo(0, 0);
        } else {
          document.getElementById('sidebar-div')?.classList.remove('sidebar-show');
          document.body?.classList.remove('scroll');
        }
    }, [menuOpen]);

    useEffect(() => {
    setMenuOpen(false);
    }, [slug]);

    return(
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="lg:flex flex-1">
                { slug ? <Video  lessonSlug={slug} /> 
                :   <div className="flex-1  bg-gray-900  flex justify-center">
                        <div className=" flex-col justify-center max-w-[600px] lg:max-h-[800px] bg-gray-600 mt-14 border-4 border-sky-500">
                            <div className="flex max-w-[500px] mx-auto">
                                <h1 className="lg:text-[40px] text-[25px] text-center font-bold py-4">
                                        Seja Bem vindo, ao evento mais esperado do mês de Junho!
                                </h1>
                            </div>
                            <p className="text-center text-red-500 lg:text-2xl max-w-[600px] p-2 justify-center items-center flex">
                                    Mas quente que quentão, não é mentira! <Campfire size={38} color="#F75A68" className="mx-2" />
                            </p>
                            <h2 className="text-center text-sky-400 lg:text-[38px] text-[28px] font-bold pb-4 underline decoration-purple-500">Ignite Lab | ReactJS</h2>
                            <div className="flex justify-center p-2">
                                <p className="text-center lg:text-2xl text-lg max-w-[600px] p-2">
                                    Resumo das tecnologias que fazem ou vão fazer parte do seu vocabulario.
                                    ReactJs, Typescript, Graphql, GraphCMS, Apollo e ai ainda nem dei spoiler das libs. 
                                </p>
                            </div>
                            <div className="flex justify-center">
                                <span className="font-bold text-2xl text-purple-500">Ficou Curioso? </span> 
                            </div>
                            <div className="max-w-[400px] lg:text-2xl text-lg pt-2.5 flex-col justify-center mx-auto">
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
                <div
                    id="sidebar-div"
                    className={`hidden h-screen lg:flex top-[7rem] right-0 overflow-hidden
                    lg:mr-1 pb-6 z-0 bg-brand-gray-700 border-b border-brand-gray-300
                    `}
                >
                    <SideBar />
                </div>
                <div
                    className={`fixed flex items-center top-[1rem] right-4 z-40
                    lg:hidden gap-1`}
                >
                    {!menuOpen && <span className="text-sm">Aulas</span>}
                    <button
                    type="button"
                    className={`w-10 h-10 flex justify-center items-center
                    ${!menuOpen ? 'text-sky-500' : 'text-sky-500'}`}
                    onClick={() => setMenuOpen(!menuOpen)}
                    >
                    {!menuOpen ? <List size={40} /> : <X size={40} />}
                    </button>
                </div>
            </main>
            <Footer />
        </div>
    )
}