export default function Experiencia() {
    return (
        <div className="flex sm:flex-col md:flex-row lg:flex-col items-center justify-around gap-6 p-6 bg-black border border-zinc-800 rounded-2xl">
            <Item principal="Inglês" label="intermediário a avançado" />
            <Item principal="5" label="anos de experiência" />
            <Item principal="informática" label="curso técnico"/>
        </div>
    )
}

function Item(props: {principal: string, label: string }){
    return (
        <div className="flex flex-col items-center">
            <span className="text-red-500 text-3xl font-bold leading-6">{props.principal}</span>
            <span className="text-zinc-400 text-sm text-center">{props.label}</span>
        </div>
    )

}