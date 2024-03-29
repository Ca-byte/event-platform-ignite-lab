import { DefaultUi, Player, Youtube } from "@vime/react";
import { CaretRight, DiscordLogo, FileArrowDown, Lightning } from "phosphor-react";

import '@vime/core/themes/default.css';

import { useGetLessonBySlugQuery } from "../graphql/generated";



interface VideoProps {
    lessonSlug: string;
}
export function Video(props: VideoProps){
    const { data } = useGetLessonBySlugQuery({
        variables : {
            slug: props.lessonSlug,
            
        }
    })
    if(!data || !data.lesson) {
        return (
            <div className="flex-1">
                <p className="mx-auto text-4xl text-purple-500">Loading...</p> 
            </div>
        )
    }
    return(
        <div className="flex-1">
            <div className="bg-black flex justify-center">
                <div className="h-full w-full max-w-[1100px] max-h-[60vh] aspect-video">
                    <Player>
                      <Youtube videoId={data.lesson.videoId} />  
                      <DefaultUi />
                    </Player>
                </div>
            </div>

            <div className="p-8 max-w-[1100px] mx-auto">
                <div className="lg:flex items-start gap-16">
                    <div className="flex-1">
                        <h1 className="text-2xl font-bold">
                        {data.lesson.title}
                        </h1>
                        <p className="mt-4 text-gray-200 leading-relaxed">
                            {data.lesson.description}
                        </p>
                        {
                            data.lesson.teacher && (

                            
                        <div className="flex items-center gap-4 mt-6 mb-6 ">
                            <img 
                            src={data.lesson.teacher.avatarURL}
                            alt="Diego Fernandes" 
                            className="h-16 w-16 rounded-full border-4 border-purple-500"
                            />
                            <div className="leading-relaxed">
                                <strong className="font-bold text-2xl block">{data.lesson.teacher.name}</strong>
                                <span className="text-gray-200 text-sm block">{data.lesson.teacher.bio}</span>
                            </div>
                        </div>
                        )}
                    </div>
                    <div className="flex flex-col gap-4">
                        <a href="" className="p-4 text-sm bg-gr bg-sky-500 hover:bg-sky-600 transition-colors flex items-center rounded font-bold gap-2 uppercase justify-center">
                            <DiscordLogo size={24}/>
                            Comunidade no discord
                        </a>
                        <a href="" className="p-4 text-sm text-purple-500 bg-gr border border-purple-500 hover:bg-purple-500 hover:text-gray-900 transition-colors flex items-center rounded font-bold gap-2 uppercase justify-center">
                            <Lightning size={24} />
                            Comunidade no discord
                        </a>
                    </div>
                </div>
                <div className="gap-8 mt-20 grid lg:grid-cols-2 pb-[80px]">
                    <a href="" 
                        className="bg-gray-700 rounded overflow-hidden flex items-stretch gap-6 hover:bg-gray-600 transition-colors">
                        <div className="bg-sky-600 h-full p-6 flex items-center">
                            <FileArrowDown size={40}  />
                        </div>
                        <div className="py-6 leading-relaxed">
                        <strong className="lg:text-2xl text-lg">Material Complementar</strong>
                        <p className="lg:text-sm text-xs text-gray-200 mt-2">
                            Acesse o material complementar para acelerar o seu desenvolvimento
                        </p>
                        </div>
                        <div className="h-full p-6 flex items-center">
                            <CaretRight  size={24}/>
                        </div>
                    </a>
                    <a href="" 
                        className="bg-gray-700 rounded overflow-hidden flex items-stretch gap-6 hover:bg-gray-600 transition-colors">
                        <div className="bg-sky-600 h-full p-6 flex items-center">
                            <FileArrowDown size={40}  />
                        </div>
                        <div className="py-6 leading-relaxed">
                        <strong className="lg:text-2xl text-lg">
                            Wallpapers exclusivos
                        </strong>
                        <p className="lg:text-sm text-xs text-gray-200 mt-2">
                            Baixe wallpapers exclusivos do Ignite Lab e personalize a sua máquina
                        </p>
                        </div>
                        <div className="h-full p-6 flex items-center">
                            <CaretRight  size={24}/>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    )
}