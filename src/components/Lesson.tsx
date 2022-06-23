import { CheckCircle, Lock } from 'phosphor-react'
import { isPast, format } from 'date-fns'
import  ptBR from 'date-fns/locale/pt-BR'
import { Link } from 'react-router-dom';

interface LessonProps {
    title: string;
    slug: string;
    availableAt: Date;
    type: 'live' | 'class';
}

export function Lesson(props : LessonProps){
    
    const isLessonAvailabe = isPast(props.availableAt);
    const avalableDateFormatted = format(props.availableAt, "EEEE ' • 'd ' de ' MMMM ' • 'K'h'mm", {
        locale: ptBR,
    })
    return(
        <Link to={`/event/lesson/${props.slug}`} className='group'>
            <span className="text-gray-300">
            {avalableDateFormatted}
            </span>
            <div className="rounded border border-gray-500 group-hover:border-sky-400 p-4 mt-2">
                <header className="flex justify-between items-center">
                    {
                        isLessonAvailabe ? (
                            <span className="flex gap-2 justify-between items-center text-sm font-medium text-sky-400">
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
                    
                    <span className="text-xs font-bold text-purple-500 rounded border border-purple-500 py-[2px] px-2">
                       {props.type === 'live' ? 'AO VIVO' : 'AULA PRÁTICA' }
                    </span>
                </header>
                <strong className="text-gray-200 mt-5 block">
                    {props.title}
                </strong>

            </div>
        </Link>
       
    )
}