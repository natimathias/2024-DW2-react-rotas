import { PaiIndireta } from "../../components/comunicacao/indireta/PaiIndireta";
import { Pagina } from "../../components/Pagina";

export function ComunicacaoIndireta() {

    return (
        <Pagina titulo="Comunicação Indireta" subtitulo="Exemplo de comunicação INDIRETA entre componentes">
            <PaiIndireta/>
        </Pagina>
    )
}