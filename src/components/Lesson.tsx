import { CheckCircle, Lock } from 'phosphor-react'
import { isPast, format } from 'date-fns'
import  ptBR from 'date-fns/locale/pt-BR'
import { Link, useParams } from 'react-router-dom';

import classesName from'classnames'

interface LessonProps {
    title: string;
    slug: string;
    availableAt: Date;
    type: 'live' | 'class';
}

export function Lesson(props : LessonProps){
    const { slug } = useParams<{slug: string}>()
    
    const isLessonAvailabe = isPast(props.availableAt);
    const avalableDateFormatted = format(props.availableAt, "EEEE ' • 'd ' de ' MMMM ' • 'K'h'mm", {
        locale: ptBR,
    })
    const isActiveLesson = slug === props.slug;

    
    return(
        <Link to={`/event/lesson/${props.slug}`} className='group'>
            <span className="text-gray-300">
            {avalableDateFormatted}
            </span>
            <div className={classesName('rounded border border-gray-500 group-hover:border-sky-400 p-4 mt-2 relative', {
                'bg-sky-500' : isActiveLesson,
            })}>
            <span className={classesName('',{'absolute bg-sky-500 w-3 h-3 top-5 -left-1 rotate-45': isActiveLesson })}/>
                <header className="flex justify-between items-center">
                    {
                        isLessonAvailabe ? (
                            <span className={classesName('flex gap-2 justify-between items-center text-sm font-medium text-sky-400', {
                                'text-white' : isActiveLesson,
                        })}>
                                <CheckCircle size={20}/>
                                Conteúdo liberado
                            </span>

                        ):(
                            <span className="flex gap-2 justify-between items-center text-sm font-medium text-orange-500">
                                <Lock size={20}/>
                                Em breve
                            </span>

                        )
                    }
                    
                    <span className={classesName("text-xs font-bold text-purple-500 rounded border border-purple-500 py-[2px] px-2", {'text-white border-indigo-700 bg-indigo-700' : isActiveLesson})}>
                       {props.type === 'live' ? 'AO VIVO' : 'AULA PRÁTICA' }
                    </span>
                </header>
                <strong className="text-white mt-5 block">
                    {props.title}
                </strong>

            </div>
        </Link>
       
    )
}