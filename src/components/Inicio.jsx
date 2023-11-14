import React from 'react'

import '../assets/style/Inicio.css'
import newspaper from '../assets/img/newspaper.svg'
import arrow from '../assets/img/arrow.svg'
import imgbanner from '../assets/img/banner.jpg'

import gazel from '../assets/img/gazel.png'


import aliado1 from '../assets/img/aliado1.svg'
import aliado2 from '../assets/img/aliado2.jpg'
import aliado3 from '../assets/img/aliado3.png'
import aliado4 from '../assets/img/aliado4.svg'
import aliado5 from '../assets/img/aliado5.svg'
import aliado6 from '../assets/img/aliado6.png'
import aliado7 from '../assets/img/aliado7.png'
import aliado9 from '../assets/img/aliado9.png'
import aliado10 from '../assets/img/aliado10.png'

import '../assets/style/Banner.css'

import altoque from '../assets/img/altoque.jpg'
import servicios from '../assets/img/servicios.jpg'
import estaciones from '../assets/img/estaciones.png'
import puntos from '../assets/img/puntos.jpg'
import voltex from '../assets/img/voltex.jpg'
import Alpine from 'alpinejs'
 
window.Alpine = Alpine
 
Alpine.start()


const Inicio = () => {
  return (
    <>
        <main className='container'>
        <div className='title-sub'>
          <h1>Noticias</h1>
          <div className='subtitle'>
            <img src={newspaper} alt="logo periodico" className='logo_newspaper' />
            <span>Actualidad</span>
          </div>
        </div>
        <section className="banner">
          <div className="content">
            <div className="text">
              <h2>Tendencia <span>Mira</span></h2>
              <p>#DateCuenta la campaña de Terpel para sensibilizar a consumidores sobre posibles engaños y estafas</p>
              <a href="#" className="btn">Ver mas <img src={arrow} alt="arrow" className='logo_arrow' /></a>
            </div>
            <div className="slider">
              <div className="slides active">
                <img src={imgbanner} />
              </div>
            </div>
          </div>
        </section>
        <div className='figura1'></div>
        <div className='figura2'></div>
      </main>
      <div className='carrousel'>
        <hr />
        <h1 class="title">Datos revelantes</h1>
        <div class="slider" x-data="{start: true, end: false}">
        <div class="slider__content" x-ref="slider" x-on:scroll="$refs.slider.scrollLeft == 0 ? start = true : start = false; Math.abs(($refs.slider.scrollWidth - $refs.slider.offsetWidth) - $refs.slider.scrollLeft) < 5 ? end = true : end = false;">
            <div class="slider__item">
            <img class="slider__image" src={altoque} alt="Image"/>
            <div class="slider__infoUno">
                <h2>+120 Tiendas altoque</h2>
            </div>
            </div>
            <div class="slider__item">
            <img class="slider__image" src={servicios} alt="Image"/>
            <div class="slider__infoDos">
                <h2>+15 Electrolineras</h2>
            </div>
            </div>
            <div class="slider__item">
            <img class="slider__image" src={estaciones} alt="Image"/>
            <div class="slider__infoTres">
                <h2>+2000 Estaciones Terpel</h2>
            </div>
            </div>
            <div class="slider__item">
            <img class="slider__image" src={puntos} alt="Image"/>
            <div class="slider__infoCuatro">
                <h2>+2 m inscritos vive terpel</h2>
            
            </div>
            </div>
            <div class="slider__item">
            <img class="slider__image" src={voltex} alt="Image"/>
            <div class="slider__infoCinco">
                <h2>Terpel Voltex</h2>
            </div>
            </div>
        </div>
        <div class="slider__nav">
            <button class="slider__nav__button" x-on:click="$refs.slider.scrollBy({left: $refs.slider.offsetWidth * -1, behavior: 'smooth'});" x-bind:class="start ? '' : 'slider__nav__button--active'">Previous</button>
            <button class="slider__nav__button" x-on:click="$refs.slider.scrollBy({left: $refs.slider.offsetWidth, behavior: 'smooth'});" x-bind:class="end ? '' : 'slider__nav__button--active'">Next</button>
        </div>
        </div>
        <hr />
    </div>
      <div className='parallax'>
      <section class="image"></section>
      <section class="text_parallax">
        <h2 className='h2_parallax'>Nuestros protagonistas al servicio</h2>
        <p className='p_parallax'>
        Lleno de confianza a todos mis clientes, brindando el combustible correcto y la cantidad indicada. 
        Así que, por toda Colombia estoy… ¡A tu servicio con la mejor energía!
        </p>
        <p className='p_parallax'>
          <strong>Transportadores </strong>
          trabajar brindando el bien a todo un país, con el apoyo de mi familia,
           es lo que me inspira. Y con el servicio que me da Terpel me mantengo lleno con la mejor energía.
        </p>
        <p className='p_parallax'>
        <strong>Taxistas </strong>
        ayudar a mis pasajeros a llegar a sus destinos de manera segura y eficiente, 
        me da la satisfacción de tener un servicio de calidad. Con el gas seguro que me da Terpel me mantengo lleno con la mejor
        </p>
      </section>
      <section class="image image-2"></section>
      <section class="text_parallax1">
        <h2 className='h2_parallax'>Educamos para Transformar Vidas</h2>
        <p className='p_parallax'>
        <strong>¿Quienes somos? </strong>
        En la Fundación Terpel, como aliados del país, contribuimos al fortalecimiento de la calidad educativa en Colombia.
         Desde el 2004 realizamos una labor focalizada en mejorar la educación que reciben los niños y niñas en diferentes 
         regiones de nuestro país, implementando programas de alto impacto encaminados a desarrollar competencias básicas 
         en liderazgo, matemáticas y lenguaje para niños y jóvenes en condición de vulnerabilidad.
        </p>
        <p className='p_parallax'>
          <strong>Mision </strong>
          Comprometidos con el progreso de Colombia, fortalecemos las competencias básicas y de 
          liderazgo en niños y jóvenes estudiantes en condición de vulnerabilidad, con programas educativos de alto impacto.
        </p>
      </section>
      </div>
      <div className='figura3'></div>
      <div className='figura4'></div>
      <main className='container_gazel'>
        <section className="banner">
          <div className="content">
            <div className="slider">
              <div className="slides active">
                <img src={gazel} className='img_gazel'/>
              </div>
            </div>
            <div className="text_gazel">
              <h2>Gazel</h2>
              <p>Somos la empresa líder en el sector de GNV en Colombia, con el mayor número de estaciones de servicio interconectadas en 20 departamentos.&nbsp;</p>
              <a href="#" className="btn_gazel">Ver mas <img src={arrow} alt="arrow" className='logo_arrow' /></a>
            </div>
          </div>
        </section>
      </main>
      <div class="logos">
      <div class="logos-slide">
        <img src={aliado1}/>
        <img src={aliado2}/>
        <img src={aliado3}/>
        <img src={aliado4}/>
        <img src={aliado5}/>

      </div>
      <div class="logos-slide">
      <img src={aliado6}/> 
      <img src={aliado7}/> 
      <img src={aliado9}/> 
      <img src={aliado10}/> 
      </div>
    </div>
      
    
    </>
  )
}

export default Inicio