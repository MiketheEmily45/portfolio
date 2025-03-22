import Image from "next/image";

export default function MiniCV() {
    return (
        <div className="flex-1 flex flex-col-reverse md:flex-row lg:flex-col-reverse xl:flex-row items-center md:items-start lg:items-center xl:items-start bg-black border border-zinc-800 rounded-2xl px-6 pt-6">
            <div className="relative min-w-72 h-72 xl:self-end">
                <Image src="/Miguel.jpg" alt="Foto de perfil" fill/>
            </div>
            <div className="flex flex-col gap-5 self-center py-6 items-center md:items-start lg:items-center xl:items-start">
                <div className="flex flex-col items-center md:items-start lg:items-center xl:items-start">
                    <span className="bg-gradient-to-r from-red-500 via-white to-white text-transparent bg-clip-text text-2xl font-bold">Miguel Rodrigues Silva</span>
                    <span>Artista em aspiração</span>
                </div>
                <p className="text-sm text-center md:text-left lg:text-center xl:text-left">
                    Estudante do curso técnico de informática do CEFET-MG unidade Varginha, estive programando desde os 12 anos de idade, experiência de 5 anos progamando.
                    Estou no 2º ano do ensino médio, tive projetos com jogos, sites, e programas simples, objetivo final é me tornar um desenvolvedor de jogos solo. 
                </p>
            </div>
        </div>
    )
}