"use client";

import { useEffect, useState } from "react";

export default function useLocalStorage<T>(chave: string, valorInicial: T) {
    const [valor, setValor] = useState<T>(() => {
        // Garante que só acesse o localStorage no cliente
        if (typeof window !== "undefined") {
            const valorLocal = localStorage.getItem(chave);
            return valorLocal ? JSON.parse(valorLocal) : valorInicial;
        }
        return valorInicial; // No servidor, retorna o valor inicial
    });

    useEffect(() => {
        // Salva no localStorage apenas no cliente
        if (typeof window !== "undefined") {
            localStorage.setItem(chave, JSON.stringify(valor));
        }
    }, [chave, valor]);

    return [valor, setValor] as const;
}