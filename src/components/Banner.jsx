import React from 'react'


import Alpine from 'alpinejs'
 
window.Alpine = Alpine
 
Alpine.start()

import '../assets/style/Banner.css'

import altoque from '../assets/img/altoque.jpg'
import servicios from '../assets/img/servicios.jpg'
import estaciones from '../assets/img/estaciones.png'
import puntos from '../assets/img/puntos.jpg'
import voltex from '../assets/img/voltex.jpg'


const Banner = () => {
  return (
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
        <div className='carrousel_container'></div>
    </div>
  )
}

export default Banner