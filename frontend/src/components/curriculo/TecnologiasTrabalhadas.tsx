import { Tecnologia } from "@core";

export interface TecnologiasTrabalhadasProps {
    tecnologias: Tecnologia[]
}

export default function TecnologiasTrabalhadas(props: TecnologiasTrabalhadasProps) {
    console.log(props)
    if (!Array.isArray(props.tecnologias)) {
        console.error("props.tecnologias não é um array:", props.tecnologias);
        return null; // Ou renderize uma mensagem de erro ou um componente alternativo
    }

    return (
        <div className="flex justify-center items-center p-6 w-full lg:w-72 bg-black border border-zinc-800 rounded-2xl">
            <div className="flex justify-center gap-x-3 flex-wrap">
                {props.tecnologias.map((tecnologia) => (
                    <div key={tecnologia.id}>
                        <span className="text-red-500 font-bold">#</span>
                        <span>{tecnologia.nome}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}