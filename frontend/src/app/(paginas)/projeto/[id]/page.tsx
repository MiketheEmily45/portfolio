import Cabecalho from "@/components/shared/Cabecalho"

export default async function PaginaProjeto(props: { params: Promise<{ id: string}> }) {
    const { id } = await props.params
    return (
        <div className="bg-black">
            <Cabecalho/>
            <div>
                <h1>Projeto {id}</h1>
            </div>
        </div>
    )
}