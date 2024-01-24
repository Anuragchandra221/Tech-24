import React from 'react'
import './Navbar.css'

function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg fixed-top py-4 navbar-light bg-light">
        <a class="navbar-brand" href="#">VYVIDH 24</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
            <ul class="navbar-nav">
                <li class="nav-item mx-3 active">
                    <a class="nav-link" href="#">HOME <span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item mx-3">
                    <a class="nav-link" href="#">MAIN EVENTS</a>
                </li>
                <li class="nav-item mx-3">
                    <a class="nav-link" href="#about">ABOUT US</a>
                </li>
                <li class="nav-item mx-3">
                    <a class="nav-link" href="#department_events">DEPARTMENT EVENTS</a>
                </li>
                <li class="nav-item mx-3">
                    <a class="nav-link" href="#">GALLERY</a>
                </li>
                <li class="nav-item mx-3">
                    <a class="nav-link" href="#">D ADDICTION</a>
                </li>
                <li class="nav-item mx-3">
                    <a class="nav-link" href="#">COLLECTOR MESSAGE</a>
                </li>
                <li class="nav-item mx-3">
                    <a class="nav-link" href="#contact">CONTACT</a>
                </li>
            </ul>
        </div>
    </nav>
  )
}

export default Navbar