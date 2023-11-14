import React, { useState } from 'react';
import '../assets/style/Nav.css'
import terpel from '../assets/img/terpel.png'



const Nav = () => {

  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const menuBtnChange = () => {
    if (sidebar.classList.contains("open")) {
      closeBtn.classList.replace("bx-menu", "bx-menu-alt-right");
    } else {
      closeBtn.classList.replace("bx-menu-alt-right", "bx-menu");
    }
  };

  return (
    <div>
      <div class={`sidebar ${sidebarOpen ? 'open' : ''}`}>
        <div class="logo-details">
          <div class="logo_name"><img src={terpel} alt="" /></div>
          <i class='bx bx-menu' id="btn" onClick={toggleSidebar}></i>
        </div>
        <ul class="nav-list">
          <li>
            <i class='bx bx-search'  onClick={toggleSidebar}></i>
            <input type="text" placeholder="Search..." />
            <span class="tooltip">Search</span>
          </li>
          <li>
            <a href="#">
              <i class='bx bx-grid-alt'></i>
              <span class="links_name">Inicio</span>
            </a>
            <span class="tooltip">Inicio</span>
          </li>
          <li>
            <a href="#">
              <i class='bx bxs-news' ></i>
              <span class="links_name">Noticias</span>
            </a>
            <span class="tooltip">Noticias</span>
          </li>
          <li>
            <a href="#">
              <i class='bx bx-gas-pump'></i>
              <span class="links_name">Estaciones de servicios</span>
            </a>
            <span class="tooltip">Estaciones</span>
          </li>
          <li>
            <a href="#">
              <i class='bx bxs-hand-right'></i>
              <span class="links_name">Trabaja con nosotros</span>
            </a>
            <span class="tooltip">Trabaja</span>
          </li>
          <li>
            <a href="#">
              <i class='bx bx-wrench'></i>
              <span class="links_name">Servicios</span>
            </a>
            <span class="tooltip">Servicios</span>
          </li>
          <li>
            <a href="#">
              <i class='bx bx-briefcase-alt-2'></i>
              <span class="links_name">Conoce mas</span>
            </a>
            <span class="tooltip">Conoce mas</span>
          </li>
          <li>
            <a href="#">
              <i class='bx bx-message'></i>
              <span class="links_name">Contactanos</span>
            </a>
            <span class="tooltip">Contactanos</span>
          </li>
          <li class="profile">
            <a href="#">
              <i class='bx bxs-map'></i>
              <span class="links_name">Encuentranos</span>
            </a>
            <span class="tooltip">Encuentranos</span>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Nav