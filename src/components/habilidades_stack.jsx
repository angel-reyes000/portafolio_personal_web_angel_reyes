import '../styles/habilidades_stack.scss'
import { useEffect } from 'react'

export default function Habilidades_stack () {

    useEffect(() => {
        console.log("Componente de la seccion 'Habilidades y stack' abierto✅")
        return () => console.log("Componente de la seccion 'Habilidades y stack' abierto✅")
    })

    return (
        <>
            <div className='seccion_habilidades'>
                <div className='tarjeta_habilidades'>
                    <div className='texto_habilidades'>
                        <div className='encabezado_habilidades'>
                            <h1>Habilidades tecnicas y stack</h1>
                            <hr />
                        </div>
                        <ul>
                            <li><b>Lenguajes:</b> Python (Avanzado), JavaScript, SQL, HTML5, CSS3, XML.</li>
                            <li><b>Frameworks & Librerías:</b> React, Odoo, PyQt6, D3.js.</li>
                            <li><b>Herramientas & DevOps:</b> Docker, Git/GitHub, AWS, Jira, Figma (Prototipado).</li>
                            <li><b>IA & Automatización:</b> GPT-4o, Botpress, Zapier, Copilot, Gemini, Chat GPT y Claude.</li>
                            <li><b>Especialidades: </b>Programación Orientada a Objetos (POO), Maquetación Web, Análisis de Requerimientos y Documentación Técnica.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}