import React from 'react'
import "./Navbar.css"
export default function Navbar() {
  return (
    <>
    <nav class="navbar navbar-expand-lg ">
      

  <div class="container-fluid">
    <div>
    <div>
    <a class="navbar-brand" id='navbr-fnt1'>Aswin <span id='nav-name'>k</span> </a>

    </div>

    </div>
    <div>
    <button class="navbar-toggler " type="button" id='namesss' data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    </div>
<div id='navbr-alighns'>
<div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active"  aria-current="page" href="/" id='navbr-fnt2'>Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active"  aria-current="page" href="/projects" id='navbr-fnt2'>Projects</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active"  aria-current="page" href="#scnd-bk2" id='navbr-fnt2'>About me</a>
        </li>
        <li class="nav-item">
          <a class="nav-link"></a>
        </li>
       
      </ul>
      
    </div>
</div>
   
    </div>

</nav>




    </>
  )
}
