import Curriculo from "@/components/curriculo";
import Principal from "@/components/landing/principal"
import Cabecalho from "@/components/shared/Cabecalho"
import { obterTecnologias } from "@/functions/tecnologias";

export default async function Home() {
  const tecnologias = await obterTecnologias()
  return (
    <div>
      <Principal />
      <Curriculo tecnologias={tecnologias.todas}/>
    </div>
  );
}
