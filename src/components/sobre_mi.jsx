import '../styles/sobre_mi.scss'
import ImagenAngel from '../assets/imagen_sobre_mi/Imagen sobre mi CV.png'

export default function Sobre_mi () {
    return (
        <>
            <div className="seccion_sobre_mi">
                <div className="tarjeta_sobre_mi">
                    <div className="texto_sobre_mi">
                        <div className='encabezado_sobre_mi'>
                            <h1><b>Sobre mi</b></h1>
                            <hr />
                        </div>
                        <div className='descripcion_sobre_mi'>
                            <img src={ImagenAngel} alt="Imagen de Angel Reyes"/>
                            <p>
                                Mi nombre es Angel y tengo 19 años, soy Ingeniero en Desarrollo de Software en formación por la 
                                Universidad Tecmilenio. Mi enfoque profesional se centra en construir soluciones digitales eficientes y 
                                escalables, integrando el desarrollo Full Stack con la optimización de procesos empresariales.
                                A lo largo de mi trayectoria académica, que actualmente cursa el sexto semestre, 
                                he complementado mi formación técnica con certificaciones internacionales de instituciones líderes
                                como Cisco Networking Academy, IBM y AWS. Esta base me permite abordar proyectos desde una 
                                perspectiva integral, combinando el análisis de requerimientos con las mejores prácticas de programación.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}