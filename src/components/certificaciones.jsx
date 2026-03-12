import { useEffect } from 'react'

import '../styles/certificaciones.scss'
import img1 from '../assets/imagenes_certificaciones/Foto certificado AWS cloud foundations.png'
import img2 from '../assets/imagenes_certificaciones/Foto certificado AWS cloud operations.png'
import img3 from '../assets/imagenes_certificaciones/Foto certificado Explore_Emerging_Tech.png'
import img4 from '../assets/imagenes_certificaciones/Foto certificado IA fundamentals.png'
import img5 from '../assets/imagenes_certificaciones/Foto certificado base de datos.png'
import img6 from '../assets/imagenes_certificaciones/Foto certificado ciberseguridad.png'
import img7 from '../assets/imagenes_certificaciones/Foto certificado ciencia de datos.png'
import img8 from '../assets/imagenes_certificaciones/Foto certificado computacion en la nube.png'
import img9 from '../assets/imagenes_certificaciones/Foto certificado desarrollo de aplicaciones moviles.png'
import img10 from '../assets/imagenes_certificaciones/Foto certificado desarrollo full stack.png'
import img11 from '../assets/imagenes_certificaciones/Foto certificado estructura de datos.png'
import img12 from '../assets/imagenes_certificaciones/Foto certificado fundamentos de C++ 1.png'
import img13 from '../assets/imagenes_certificaciones/Foto certificado fundamentos de CSS.png'
import img14 from '../assets/imagenes_certificaciones/Foto certificado fundamentos de HTML.png'
import img15 from '../assets/imagenes_certificaciones/Foto certificado fundamentos de JS1.png'
import img16 from '../assets/imagenes_certificaciones/Foto certificado fundamentos de analisis de datos.png'
import img17 from '../assets/imagenes_certificaciones/Foto certificado fundamentos de desarrollo web.png'
import img18 from '../assets/imagenes_certificaciones/Foto certificado fundamentos de devops.png'
import img19 from '../assets/imagenes_certificaciones/Foto certificado fundamentos de programacion.png'
import img20 from '../assets/imagenes_certificaciones/Foto certificado fundamentos de python 1.png'
import img21 from '../assets/imagenes_certificaciones/Foto certificado fundamentos de python 2.png'
import img22 from '../assets/imagenes_certificaciones/Foto certificado gestoin de redes.png'
import img23 from '../assets/imagenes_certificaciones/Foto certificado ingenieria en software.png'
import img24 from '../assets/imagenes_certificaciones/Foto certificado ingles 5.png'
import img25 from '../assets/imagenes_certificaciones/Foto certificado intoduccion ciencia de datos.png'
import img26 from '../assets/imagenes_certificaciones/Foto certificado metodologias agiles.png'
import img27 from '../assets/imagenes_certificaciones/Foto certificado prob y estadistica para la ciencia de datos.png'
import img28 from '../assets/imagenes_certificaciones/Foto certificado programacion orientada a objetos.png'
import img29 from '../assets/imagenes_certificaciones/Foto certificado redes basicas.png'
import img30 from '../assets/imagenes_certificaciones/Foto certificado sistemas operativos.png'
import img31 from '../assets/imagenes_certificaciones/Foto certificado_js2.png'

let ids = 0

const Certificados = [
    {id: ids++, src: img4, titulo: "Artificial Intelligence Fundamentals", academia: "IBM SkillsBuild"},
    {id: ids++, src: img31, titulo: "JavaScript Essentials 2", academia: "Cisco"},
    {id: ids++, src: img21, titulo: "Python Essentials 2", academia: "Cisco"},
    {id: ids++, src: img17, titulo: "Web Development Fundamentals", academia: "IBM SkillsBuild"},
    {id: ids++, src: img20, titulo: "Python Essentials 1", academia: "Cisco"},
    {id: ids++, src: img14, titulo: "HTML Essentials", academia: "Cisco"},
    {id: ids++, src: img13, titulo: "CSS Essentials", academia: "Cisco"},
    {id: ids++, src: img10, titulo: "Desarrollo Full Stack", academia: "Universidad Tecmilenio"},
    {id: ids++, src: img15, titulo: "JavaScript Essentials 1", academia: "Cisco"},
    {id: ids++, src: img12, titulo: "C++ Essentials 1", academia: "Cisco"},
    {id: ids++, src: img3, titulo: "Explore Emerging Tech", academia: "IBM SkillsBuild"},
    {id: ids++, src: img28, titulo: "Programación Orientada a Objetos", academia: "Universidad Tecmilenio"},
    {id: ids++, src: img19, titulo: "Fundamentos de Programación", academia: "Universidad Tecmilenio"},
    {id: ids++, src: img5, titulo: "Bases de Datos", academia: "Universidad Tecmilenio"},
    {id: ids++, src: img7, titulo: "Ciencia de Datos (Sobresaliente)", academia: "Universidad Tecmilenio"},
    {id: ids++, src: img26, titulo: "Metodologías Ágiles", academia: "Universidad Tecmilenio"},
    {id: ids++, src: img23, titulo: "Ingeniería de Software", academia: "Universidad Tecmilenio"},
    {id: ids++, src: img16, titulo: "Data Analytics Essentials", academia: "Cisco"},
    {id: ids++, src: img18, titulo: "Fundamentos de DevOps (Sobresaliente)", academia: "Universidad Tecmilenio"},
    {id: ids++, src: img25, titulo: "Introduction to Data Science", academia: "Cisco"},
    {id: ids++, src: img27, titulo: "Probabilidad y Estadística para la Ciencia de Datos (Sobresaliente)", academia: "Universidad Tecmilenio"},
    {id: ids++, src: img11, titulo: "Estructura de Datos (Sobresaliente)", academia: "Universidad Tecmilenio"},
    {id: ids++, src: img24, titulo: "Inglés 5", academia: "Universidad Tecmilenio"},
    {id: ids++, src: img30, titulo: "Sistemas Operativos", academia: "Universidad Tecmilenio"},
    {id: ids++, src: img29, titulo: "Networking Basics", academia: "Cisco"},
    {id: ids++, src: img22, titulo: "Gestión de Redes", academia: "Universidad Tecmilenio"},
    {id: ids++, src: img9, titulo: "Desarrollo de Aplicaciones Móviles (Sobresaliente)", academia: "Universidad Tecmilenio"},
    {id: ids++, src: img8, titulo: "Computación en la Nube (Sobresaliente)", academia: "Universidad Tecmilenio"},
    {id: ids++, src: img6, titulo: "Ciberseguridad", academia: "Universidad Tecmilenio"},
    {id: ids++, src: img2, titulo: "AWS Academy Graduate - Cloud Operations", academia: "Amazon Web Services"},
    {id: ids++, src: img1, titulo: "AWS Academy Graduate - Cloud Foundations", academia: "Amazon Web Services"},
]

export default function Certificaciones () {

    useEffect(() => {
        console.log("Componente de la seccion 'Certificaciones' abierto✅")
        return () => console.log("Componente de la seccion 'Certificaciones' cerrado.❎")
    })

    return (
        <>
            <div className='seccion_certificaciones'>
                <div className='scroll_certificaciones'>
                    <div className='encabezado_certificaciones'>
                        <div>
                            <h1>Mis Certificaciones</h1>
                            <p><a href='https://www.credly.com/users/angel-reyes.377142c9' target='_blank' rel="noreferrer">Haz click aqui para mirar mi perfil de Credly con todas mis certificaciones!</a></p>
                        </div>
                        <div className='flechas'>
                            ↕
                        </div>
                    </div>                    
                    {Certificados.map(certificacion => (
                            <div key={certificacion.id} className='certificaciones'>
                                <img src={certificacion.src} alt={certificacion.titulo}/>
                                <h3>{certificacion.titulo}</h3>
                                <p>{certificacion.academia}</p>
                            </div>
                    ))}
                </div>
            </div>
        </>
    )
}

{/* <div className='certificaciones'>
                        <img src={}/>
                        <h3>Artificial Intelligence Fundamentals</h3>
                        <p>IBM-SkillsBuild</p>
                    </div> */}