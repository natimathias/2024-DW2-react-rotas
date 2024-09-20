import { useState } from "react";
import { Pagina } from "../../components/Pagina";

export function CampoTexto() {
    const [texto, setTexto] = useState("")

    return (
        <Pagina titulo="Campo Texto" subtitulo="Conceito de Esatdo React">
            <div className="flex flex-col gap-4">
                <input type="text" className="bg-black" value={texto}
                onChange={(e) => setTexto(e.target.value)}/>

                <button className="bg-purple-400 rounded-md p-2" onClick={() => setTexto("")}>Limpar</button>
                <span className="text-2xl">{texto}</span>

            </div>

        </Pagina>

    )
}