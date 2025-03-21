import Tecnologia from "../tecnologia/Tecnologia"
import { Nivel } from "./nivel"
import { Tipo } from "./tipo"

export default interface Projeto {
    id: number
    nome: string
    descricao: string
    imagens: string[]
    tipo: Tipo
    nivel: Nivel
    repositorio: string
    destaque: boolean
    tecnologias: Tecnologia[]
}