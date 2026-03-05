import '../styles/proyectos.scss'
import CvAnterior from '../assets/Foto pagina cv anterior.png'
import AutomatizacoinZapier from '../assets/Foto Automatizacion de asistente educativo en zapier.png'
import CalculadoraPyQt6_Python from '../assets/Foto calculadora pyqt6 python.png'
import Chatbot_Botpress from '../assets/Foto chatbot con botpress.png'
import TicTacToePyQt6_Python from '../assets/Foto tic-Tac-Toe PyQt6 Python.png'
import SemaforoPyQt6_Python from '../assets/Foto semaforo PyQt6 Python.png'
import PortafolioReact from '../assets/Foto portafolio React.png'

export default function Proyectos () {
    let ids = 0;
    const proyectos = [
        {id: ids++, foto: PortafolioReact, url: '', titulo: 'Portafolio personal con React', descripcion: 'Es un portafolio web personal donde se presenta el perfil del desarrollador, sus habilidades, algunos proyectos realizados y formas de contacto. Funciona como un currículum digital para mostrar experiencia y trabajo en desarrollo web.\nLa programacion se hizo con el Framework "React" y lemguajes como JavaScript, HTML, CSS y SCSS'},
        {id: ids++, foto: AutomatizacoinZapier, url: 'https://asistente-educativo.zapier.app/', titulo: 'Inteligencia Artificial de asistente educativo', descripcion: 'La página es un asistente educativo basado en inteligencia artificial diseñado para ayudar a estudiantes de la universidad Tecmilenio, especialmente en dudas sobre horarios, gym y carreras. Permite hacer preguntas y recibir orientación sobre los temas.\nConectados con herramientas de inteligencia artificial y automatización.\nInteligencia Artificial (modelo tipo ChatGPT) integrada mediante Zapier'},
        {id: ids++, foto: Chatbot_Botpress, url: 'https://cdn.botpress.cloud/webchat/v3.6/shareable.html?configUrl=https://files.bpcontent.cloud/2026/01/23/02/20260123025137-I1NC6KEI.json&_gl=1*1ty5283*_gcl_au*MTIwNzU1MzY3OS4xNzY5MTM2Mzc4*_ga*MjA3MzM1NTU0Ni4xNzY5MTM2Mzc5*_ga_HKHSWES9V9*czE3NzI2ODgyOTAkbzMkZzEkdDE3NzI2ODgzNDUkajUkbDAkaDEyODYwNjY2Mzg.', titulo: 'Chatbot con Botpress', descripcion: 'La página es un chatbot interactivo que permite conversar con un asistente virtual para responder preguntas o brindar ayuda al usuario simulando ser un supervisor de planta de una empresa de metales. Funciona como una interfaz de chat donde el usuario escribe mensajes y el sistema responde automáticamente, por ejemplo, que hacer en casos de emergencia, protocolos de seguridad, contactar a un supervisor, etc.\nEl chatbot fue creado con Botpress'},
        {id: ids++, foto: CalculadoraPyQt6_Python, url: '', titulo: 'Calculadora con PyQt6 (Python)', descripcion: 'Calculadora hecha con el Framework "PyQt6" en Python, realiza operaciones basicas y tiene estilos CSS'},
        {id: ids++, foto: TicTacToePyQt6_Python, url: '', titulo: 'Tic-Tac-Toe con PyQt6 (Python)', descripcion: 'Juego de Tic-Tac-Toe hecho con el Framework "PyQt6" en Python, usando el modulo "random" para simular el juego automatico de la maquina contra el usuario.'},
        {id: ids++, foto: SemaforoPyQt6_Python, url: '', titulo: 'Semaforo con PyQt6 (Python)', descripcion: 'Simulacion de cambio de colores de un semaforo con el Framework "PyQt6" en Python, tiene un boton para cambiar el color y otro para cerrar la interfaz'},
        {id: ids++, foto: CvAnterior, url: 'https://angelreyescvv.netlify.app/', titulo: 'CV Angel Reyes(Desactualizado)', descripcion: 'Es un portafolio web personal donde se presenta el perfil del desarrollador, sus habilidades, algunos proyectos realizados y formas de contacto. Funciona como un currículum digital para mostrar experiencia y trabajo en desarrollo web.\npublicada en internet mediante Netlify\nLa programacion se hizo con HTML, CSS y SCSS'},
    ]

    return (
        <>
            <div className='fondo_proyectos'>
                <h1>Proyectos (Personales y Escolares)</h1>
                <div className='seccion_scroll'>
                    {proyectos.map(proyecto => (
                            <div key={proyecto.id} className='tarjetas_proyectos'>
                                <a href={proyecto.url} target='_blank'><img src={proyecto.foto} alt={proyecto.titulo}/></a>
                                <div className='cajas_textos_proyectos'>
                                    <h2>{proyecto.titulo}</h2>
                                    <p>{proyecto.descripcion}</p>
                                    {proyecto.url !== '' ? <p>Haz click en la imagen para Ingresar a la pagina.</p> : ''}
                                </div>
                            </div>
                        ) 
                    )}
                </div>
            </div>
        </>
    )
}

//use effect para sabet si se desmontan o montan componentes