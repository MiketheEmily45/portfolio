import Curriculo from "@/components/curriculo";
import Principal from "@/components/landing/principal"
import Cabecalho from "@/components/shared/Cabecalho"
import Container from "@/components/shared/Container";
import { obterTecnologias } from "@/functions/tecnologias";

export default async function Home() {
  const tecnologias = await obterTecnologias()
  return (
    <div>
      <Principal />
      <Container className="py-16">
        <Curriculo tecnologias={tecnologias.todas}/>
      </Container>
    </div>
  );
}
