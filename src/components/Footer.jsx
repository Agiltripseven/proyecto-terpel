import React from 'react'
import '../assets/style/Footer.css'
import terpe from '../assets/img/terpel.webp'



const Footer = () => {
  return (
    <>
<footer>
    <div class="content">
     
        <section class="logito">
          <img src={terpe} alt=""/>    
        </section>
        <section className='redes'>
          <a href="https://www.facebook.com/Terpel">
          <i class='bx bxl-facebook'></i>
          </a>
          <a href="https://twitter.com/TerpelCol">
          <i class='bx bxl-twitter' ></i>
          </a>
          <a href="https://www.instagram.com/terpelcol/">
          <i class='bx bxl-instagram' ></i>
          </a>
          <a href="https://www.youtube.com/user/TerpelColombia">
            <i class='bx bxl-youtube' ></i>
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
          
          <i class='bx bxs-phone'></i>
            <p>01 8000 518 555 O #462</p>
          </div>
          <div className='ubi'>
          <i class='bx bxs-map'></i>
           <p>oficina corporativa <br />PBX (571) 326 78 79 FAX 376 97 21 <br />
           Cr 7 No. 75 - 51 Bogota - Colombia</p>
          </div>
          <div className='mensa'>
          <i class='bx bx-support'></i>
            <p>Servicioalcliente@terpel.com</p>
          </div>
        </section>
    </div>
    <div class="bottom-details">
      <div class="bottom_text">
        <span class="copyright_text">Copyright © 2023 Terpel todos los derechos reservados</span>
      </div>
    </div>
</footer>

    </>
  )
}

export default Footer