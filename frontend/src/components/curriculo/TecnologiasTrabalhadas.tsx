import { Tecnologia } from "@core";

export interface TecnologiasTrabalhadasProps {
    tecnologias: Tecnologia[]
}

export default function TecnologiasTrabalhadas(props: TecnologiasTrabalhadasProps) {
    return props.tecnologias ? (
        <div /*className="flex justify-center items-center p-6 w-full lg:w-72"*/>
            <div /*className="flex justify-center gap-x-3 flex-wrap"*/>
                {props.tecnologias.map((tecnologia) => (
                    <div key={tecnologia.id}> 
                        <span /*className="text:red-500 font-bold"*/>#</span>
                        <span>{tecnologia.nome}</span>
                    </div>
                ))}
            </div>
        </div>
    ) : null
}