import { useState, useEffect } from 'react'
import '../styles/App.css'
import Proyectos from './proyectos'
import Certificaciones from './certificaciones'
import Contacto from './contacto'
import Experiencia from './experiencia'
import Habilidades_stack from './habilidades_stack'
import Sobre_mi from './sobre_mi'

function Inicio () {

  useEffect(() => {
    console.log("Componente de la seccion 'Inicio'✅")
    return () => console.log("Componente de la seccion 'Inicio' cerrado.")
  },)

  return (
    <>
      <header className='encabezado_principal'>
            <h1 className='titulo_principal'>
              Hola, Soy <br/>
              Angel Reyes...
            </h1>
            <p className='descripcion_principal'>
              Desarrollador de software con interés en programación, back end y front end. Mis insignias reflejan la adquisición<br/>
              de habilidades técnicas en programación, resolución de problemas, desarrollo web y fundamentos de inteligencia artificial.
              Me enfoco en el aprendizaje continuo y la aplicación práctica de conocimientos en proyectos reales.<br />               
            </p>
        </header>
    </>
  )
}

export default function Portafolio () {
  const [seccion, setSecciones] = useState('inicio')

  function Menu_boton () {
    const [state, setState] = useState(false)
    return(
      <>
        {state ? (
                  <div className='menu'>
                    <div className='encabezado_menu'>
                      <div className='titulo_menu'>
                        <h2 style={{fontSize: '60px', marginBottom: '-20px'}}>A.R.</h2>
                        <p>Desarrollador de Software</p>
                      </div>
                      <div className='div_boton_cerrar_menu'>
                        <button onClick={() => setState(!state)} className='boton_cerrar_menu'>×</button>
                      </div>
                    </div>
                    <div className='div_ul_menu'>
                      <ul className='ul_menu'>
                        <li onClick={() => setSecciones('habilidades y stack')} className='li_menu'>Habilidades tecnicas y Stack</li>
                        <li onClick={() => setSecciones('sobre mi')} className='li_menu'>Sobre mi</li>
                      </ul>
                    </div>
                    <hr />
                    <div className='div_descargar_cv'>
                      <a>Descargar CV</a>
                    </div>
                  </div>
                  ) : (
                  <button onClick={() => setState(!state)} className={'boton_abrir_menu'}>|||</button>
                  )}
      </>
    )
  }

  useEffect(() => {
    console.log("Pagina iniciada correctamente✅")
    return () => console.log("Has salido de la pagina")
  }, [])

  let secciones = function () {  
    switch (seccion){
      case 'inicio':
        return <Inicio />

      case 'proyectos': 
        return <Proyectos />
      
      case 'certificaciones':
        return <Certificaciones />

      case 'contacto':
        return <Contacto />
      
      case 'experiencia':
        return <Experiencia />

      case 'habilidades y stack':
        return <Habilidades_stack />

      case 'sobre mi':
      default:
        return <Sobre_mi />
    }
  }

  return (
    <>
      <div className='fondo_principal'>
        <Menu_boton />
        <nav className='nav_principal'>
          <ul className='ul_principal'>
            <li onClick={() => setSecciones('inicio')} className={'li_principal'}>Inicio</li>
            <li onClick={() => setSecciones('proyectos')} className={'li_principal'}>Proyectos</li>
            <li onClick={() => setSecciones('experiencia')} className={'li_principal'}>Experiencia</li>
            <li onClick={() => setSecciones('certificaciones')} className={'li_principal'}>Certificaciones</li>
            <li onClick={() => setSecciones('contacto')} className={'li_principal'}>Contacto</li>
          </ul>
        </nav>
        {secciones()}
      </div>
    </>
  )
}
