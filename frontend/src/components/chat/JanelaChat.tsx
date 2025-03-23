"use client"
import useChat from "@/hooks/useChat";
import { IconMessages, IconReload, IconSend } from "@tabler/icons-react";
import { useState } from "react";

export default function JanelaChat() {
    const {mensagens, adicionarMensagem, limparMensagens} = useChat()
    const [texto, setTexto] = useState("")

    function enviarMensagem() {
        adicionarMensagem(texto)
                    setTexto("")
    }
    return (
        <div className="flex flex-col bg-zinc-300 rounded-2xl text-black overflow-hidden">
            <div className="flex justify-between items-center bg-white p-4">
                <h2 className="text-xl font-bold">Olá visitante!</h2>
                <IconReload size={24} className="text-black cursor-pointer"
                onClick={limparMensagens}/>
            </div>
            {mensagens.length === 0 ? (
                <div className="flex flex-col items-center justify-center min-h-[400px] sm:min-h-[500px]">
                    <IconMessages size={230} stroke={0.2} className="text-black"/>
                    <span>Vamos conversar?</span>
                </div>
            ): (
                <div></div>
            )}
            <div className="h-px bg-zinc-400 mt-4" />
            <div className="flex items-center gap-2 p-1 m-4 rounded-full h-10 bg-white">
                <input type="text" value={texto} className="flex-1 bg-transparent h-8 outline-none pl-3" onChange={(e: any) => {
                    setTexto(e.target.value)
                }} onKeyDown={(e: any) => {
                    if (e.key === "Enter") enviarMensagem()
                    }}/>
                <button className="flex justify-center items-center min-h-8 min-w-8 rounded-full bg-red-500" onClick={enviarMensagem}>
                    <IconSend className="text-white" size={18}/>
                </button>
            </div>
        </div>
    )
}