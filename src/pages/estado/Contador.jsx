import { IconMinus, IconPlus } from "@tabler/icons-react";
import { Pagina } from "../../components/Pagina";
import { useState } from "react";

export function Contador() {

  const [step, setStep] = useState(0)

  function adicionarStep() {
    setStep(step + 1)
  }

  function removerStep() {
    setStep(step - 1)
  }

  const [numero, setNumero] = useState(0)

  function adicionarNumero() {
    setNumero(numero + step)
  }

  function removerNumero() {
    setNumero(numero - step)
  }

  return (
    <Pagina titulo="Contador" subtitulo="Conceito de Estado no React">
      <div className="w-full h-full flex flex-col justify-center items-center gap-5">
        
      <div className="text-6xl font-black">{numero}</div>
      <div className="flex gap-5">
        <button className="rounded-full p-4 bg-blue-600" onClick={removerNumero}><IconMinus size={30}/></button>
        <button className="rounded-full p-4 bg-blue-800" onClick={adicionarNumero}><IconPlus size={30}/></button>
      </div>
      
      <div className="flex items-center gap-5">
        <button className="rounded-full p-2 bg-purple-600" onClick={removerStep}><IconMinus /></button>
        <span>{step}</span>
        <button className="rounded-full p-2 bg-purple-800" onClick={adicionarStep}><IconPlus /></button>
      </div>
      </div>
    </Pagina>
  )
}