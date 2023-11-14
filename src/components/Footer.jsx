import React from 'react'
import '../assets/style/Footer.css'
import terpe from '../assets/img/terpel.webp'
import facebook from '../assets/img/facebook.png'
import instagram from '../assets/img/instagram.png'
import youtube from '../assets/img/youtube.png'
import twitter from '../assets/img/twitter.png'
import linkedin from '../assets/img/linkedin.png'
import ubicacion from '../assets/img/ubicacion.png'
import mensaje from '../assets/img/mensaje.png'
import llamada from '../assets/img/llamada.png'

const Footer = () => {
  return (
    <>
<footer>
    <div class="content">
     
        <section class="logito">
          <img src={terpe} alt="" />    
        </section>
        <section className='redes'>
          <a href="https://www.facebook.com/Terpel">
            <img src={facebook} alt="" />
          </a>
          <a href="https://twitter.com/TerpelCol">
            <img src={twitter} alt="" />
          </a>
          <a href="https://www.instagram.com/terpelcol/">
            <img src={instagram} alt="" />
          </a>
          <a href="https://www.youtube.com/user/TerpelColombia">
            <img src={youtube} alt="" />
          </a>
          <a href="https://www.linkedin.com/company/terpel/?originalSubdomain=co">
            <img src={linkedin} alt="" />
          </a>
        </section>
        <section className='ayuda'>
          <a href=""> Nesesitas ayuda</a> 
          <br />
          <br />
          <a href="">manejo de datos personales web</a>
          <br />
          <br />
          <a href="">Terminos y condiciones</a>
        </section>
        <section className='info'> 
        <h4>INFORMACION</h4>
        <p>
        <br />
        
          Conoce mas <br />
          <br />
          Trabaja con nosotros <br />
          <br />
          Datos personales <br />
          <br />
          Reportes confidenciales
        </p>
        </section>
        <section className='contacto'>
        <h4>CONTACTO</h4>
          <div className='llama'>
          
            <img src={llamada} alt="" />
            <p>01 8000 518 555 O #462</p>
          </div>
          <div className='ubi'>
           <img src={ubicacion} alt="" />
           <p>oficina corporativa <br />PBX (571) 326 78 79 FAX 376 97 21 <br />
           Cr 7 No. 75 - 51 Bogota - Colombia</p>
          </div>
          <div className='mensa'>
          <img src={mensaje} alt="" />
            <p>Servicioalcliente@terpel.com</p>
          </div>
        </section>
    </div>
    <div class="bottom-details">
      <div class="bottom_text">
        <span class="copyright_text">Copyright © 2023 <a href="#">Company name</a>All rights reserved</span>
        <span class="policy_terms">
          <a href="#">Privacy policy</a>
          <a href="#">Terms & condition</a>
        </span>
      </div>
    </div>
</footer>

    </>
  )
}

export default Footer