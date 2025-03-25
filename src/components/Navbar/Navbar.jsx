import React from "react";
import "./Navbar.css";
import logo from '../Assets/Img/Asset 3@2000x.png'
export const Navbar = () => {
  return (
    <>
    <nav class="navbar navbar-expand-lg">
  <div class="container-fluid">
  
    <a class="navbar-brand" href="/">
      <img className="pic" src={logo} width={"50px"} alt="" />
      </a>
    <a class="navbar-brand text-white" href="/">StableCoin</a>
    <button class="navbar-toggler btn-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon btn-white"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav me-auto mb-2 mb-lg-0 "> 
        <li className="nav-item"  >
          <a className="nav-link active text-white"  aria-current="page" >Allbridge core</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white" >Stablecoins Class</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white" >Stablecoins</a>
        </li>
    
       
       
      </ul>
      <form class="d-flex" role="search">
        {/* <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"> */}
        <a  class="btn btn-outline-info rounded-pill mx-2" href="https://bit.ly/Resolveict">Developer</a>
        <a  class="btn btn-info rounded-pill mx-2" href="https://bit.ly/Resolveict">Contact</a>
      </form>
    </div>
  </div>
</nav>
    </>
  );
};

