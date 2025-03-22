import { Tecnologia } from "@core";
import TecnologiasTrabalhadas from "./TecnologiasTrabalhadas";
import Experiencia from "./Experiencia";

export interface CurriculoProps {
    tecnologias: Tecnologia[]
}

export default function Curriculo(props: CurriculoProps) {
    return (
        <div className="flex flex-col lg:flex-row gap-4 min-h-72 w-full">
            <div className="flex-1">teste</div>
            <Experiencia />
            <TecnologiasTrabalhadas lista={props.tecnologias} />
        </div>
    )
}