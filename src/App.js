import { useState } from 'react'
import './App.css'


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
                      <li className='li_menu'>Experiencia</li>
                      <li className='li_menu'>Certificaciones</li>
                      <li className='li_menu'>Habilidades tecnicas</li>
                      <li className='li_menu'>Stack</li>
                      <li className='li_menu'>Formacion</li>
                    </ul>
                  </div>
                  <hr style={{width: '70%', marginTop: '50px'}}/>
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

export default function Portafolio () {
  return (
    <>
      <body className='fondo_principal'>
        <Menu_boton />
        <nav className='nav_principal'>
          <ul className='ul_principal'>
            <li className={'li_principal'}>inicio</li>
            <li className={'li_principal'}>Proyectos</li>
            <li className={'li_principal'}>Experiencia</li>
            <li className={'li_principal'}>Sobre mi</li>
            <li className={'li_principal'}>Contacto</li>
          </ul>
        </nav>
        <header className='encabezado_principal'>
          <div>
            <h1 style={{fontSize: '100px', marginBottom: '100px'}}>
              Hola, Soy <br/>
              Angel Reyes...
            </h1>
            <p style={{fontSize: '20px'}}>
              Desarrollador de software con interés en programación, back end y front end. Mis insignias reflejan la adquisición<br/>
              de habilidades técnicas en programación, resolución de problemas, desarrollo web y fundamentos de inteligencia artificial.<br/>
              Me enfoco en el aprendizaje continuo y la aplicación práctica de conocimientos en proyectos reales.<br />               
            </p>
          </div>
        </header>
      </body>
    </>
  )
}