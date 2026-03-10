import '../styles/experiencia.scss'

export default function Experiencia () {
    return (
        <>
            <div className='seccion_experiencia'>
                <div className='tarjeta_experiencia'>
                    <div className='titulo_experiencia'><h1><strong>EXPERIENCIA PROFESIONAL</strong></h1></div>
                    <hr />
                    <div><h2><b>Practicante de Desarrollo Odoo | NSG - Engineering Septiembre 2025 – Marzo 2026</b></h2></div>
                    <div className='descripciones_experiencia'>
                        <ul className='lista_desordenada_experiencia'>
                            <li><b>Desarrollo Full Stack: </b> Personalización de módulos en Odoo utilizando Python, XML, JavaScript, HTML y CSS para adaptar el ERP a necesidades específicas del negocio.</li>
                            <li><b>Arquitectura de Software: </b>Implementación de modelos, vistas, acciones y reglas de seguridad dentro del framework de Odoo.</li>
                            <li><b>Visualización de Datos: </b>Diseño e implementación de dashboards y gráficas interactivas con D3.js para la toma de decisiones.</li>
                            <li><b>Optimización de Procesos: </b>Configuración de módulos de Ventas, Inventario y CRM, automatizando flujos de trabajo mediante scripts de Python y QWeb.</li>
                            <li><b>Metodologías Ágiles:</b>Gestión de ciclo de vida de software con Jira y control de versiones mediante GitHub.</li>
                        </ul>
                    </div>
                    <div><h2><strong>PROYECTOS DESTACADOS</strong></h2></div>
                    <hr />
                    <div className='descripciones_experiencia'>
                        <h3><b>INTELIGENCIA ARTIFICIAL DE ASISTENTE EDUCATIVO</b></h3>
                        <p>Asistente Educativo IA: Plataforma interactiva diseñada para el sector educativo que integra el modelo GPT-4o Mini de OpenAI mediante flujos de automatización en Zapier.</p>
                        <a href='https://asistente-educativo.zapier.app/' target='_blank'>https://asistente-educativo.zapier.app/</a>

                        <h3><b>CHATBOT PERSONALIZADO (BOTPRESS)</b></h3>
                        <p>Agente conversacional inteligente desarrollado con Botpress, enfocado en la atención al usuario y resolución de dudas mediante interfaces de chat modernas</p>
                        <a href='https://cdn.botpress.cloud/webchat/v3.6/shareable.html?configUrl=https://files.bpcontent.cloud/2026/01/23/02/20260123025137-I1NC6KEI.json' target='_blank'>https://cdn.botpress.cloud/webchat/v3.6/shareable.html?configUrl=https://files.bpcontent.cloud/2026/01/23/02/20260123025137-I1NC6KEI.json</a>

                        <h3><b>DESARROLLO WEB (FRONT-END)</b></h3>
                        <p>
                            Portafolio Profesional con React: Aplicación web responsiva que centraliza mi perfil de desarrollador, habilidades técnicas y proyectos 
                            destacados utilizando React.js para una navegación fluida. 
                            Web CV Personal (Legacy): Diseño y desarrollo de sitio web personal para exposición de currículum en línea (Desarrollado con HTML/CSS).
                        </p>
                        <a href='https://angelreyescvv.netlify.app/' target='_blank'>https://angelreyescvv.netlify.app/</a>

                        <h3><b>INTERFACES GRÁFICAS DE USUARIO CON PYTHON (PYQT6)</b></h3>
                        <p>Interfaces Gráficas (GUI) con Python: Colección de herramientas funcionales desarrolladas con PyQt6, incluyendo calculadoras y juegos de 
                            lógica (Tic-Tac-Toe), aplicando principios de Programación Orientada a Objetos (POO).
                        </p>
                        <a href='https://github.com/angel-reyes000/Proyectos-Python-PyQt6.git' target='_blank'>https://github.com/angel-reyes000/Proyectos-Python-PyQt6.git</a>
                    </div>
                </div>
            </div>
        </>
    )
}