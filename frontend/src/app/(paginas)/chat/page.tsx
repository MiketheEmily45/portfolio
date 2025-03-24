"use client"
import useChat from "@/hooks/useChat"
import { useState } from "react"
import Image from "next/image"
import ConteudoMD from "@/components/shared/ConteudoMD"

export default function Chat() {
    const { chatId, mensagens, pensando, adicionarMensagem, limparMensagens } = useChat()
    const [texto, setTexto] = useState("")

    console.log("chegou aqui", mensagens)
    return (
        <div>
            <h1>Chat</h1>
            <h2>Chat ID: {chatId}</h2>
            <button onClick={limparMensagens}>Limpar</button>

            <ul>
                {mensagens.map(mensagem => (
                    <li key={mensagem.id} className="flex flex-col gap-2">
                        <div>{mensagem.autor}: </div>
                        <ConteudoMD markdown={mensagem.texto}/>
                    </li>
                ))}
            </ul>

            {pensando && (
                <div>
                    <Image src="/pensando.gif" alt="Pensado" width={50} height={50}/>
                </div>
            )}

            <input type="text" value={texto} className="border border-gray-700 rounded p-2" onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setTexto(e.target.value)
            }} onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => {
                if (e.key === "Enter") {
                adicionarMensagem(texto)
                setTexto("")
            }}}/>
        </div>
    )
}