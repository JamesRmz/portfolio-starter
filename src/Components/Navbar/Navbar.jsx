import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
   <div className="n-wrapper">
    <div className="n-left">
        <div className="n-name">James</div>
        <span>Root</span>
    </div>
    <div className="n.rigth">
        <div className="n-list">
            <ul style={{listStyleType: 'none'}}>
                <li>Casa</li>
                <li>Servicios</li>
                <li>Experiencia</li>
                <li>Portafolio</li>
                <li>Testimonios</li>
                <button className="button n-buton">
            Contacto
        </button>
            </ul>
        </div>
        
    </div>
   </div>
  )
}

export default Navbar