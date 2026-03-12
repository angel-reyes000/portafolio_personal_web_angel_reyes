import '../styles/contacto.scss'
import iconoWhatsApp from '../assets/imagenes_contacto/Icono de WhatsApp.png'
import iconoGmail from '../assets/imagenes_contacto/Icono Gmail.png'

export default function Contacto () {
    return (
        <>
            <div className="seccion_contacto">
                <div className="tarjeta_contacto">
                    <div className='encabezado_contacto'>
                        <h1>Contactame...</h1>
                    </div>
                    <div className="div_imagen">
                        <a href='mailto:ar731684@gmail.com'><img src={iconoGmail} alt='Imagen de icono de Gmail' rel="noreferrer"/></a>
                    </div>
                    <div className='div_descripcion_imagenes'>
                        <h2>Correo electronico: <br /><a href='mailto:ar731684@gmail.com' target='_blank' rel="noreferrer" className='div_enlaces'>ar731684@gmail.com</a></h2>
                    </div>
                    <div className='div_imagen'>
                        <a href='https://wa.me/528131013783'><img src={iconoWhatsApp} alt='Imagen de icono de WhatsApp' rel="noreferrer"/></a>
                    </div>
                    <div className='div_descripcion_imagenes'>
                        <h2>Numero celular: <br /><a href='https://wa.me/528131013783' target='_blank' rel="noreferrer" className='div_enlaces'>+52 81 3101 3783</a></h2>
                    </div>
                </div>
            </div>
        </>
    )
}