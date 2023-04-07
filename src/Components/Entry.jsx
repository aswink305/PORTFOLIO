import React, { useEffect } from 'react'
import "./Entry.css"
import "./Entry.scss"
import AOS from 'aos';
import 'aos/dist/aos.css';
import "./Aswinport.css"
export default function Entry() {
    useEffect(() => {
       
        AOS.init({
    
          once: true,
        });
    
    
      }, [])
  return (

    <>
    <div className='col-sm-12' >

<div className='row' id='entry-bk'>

<div className='col-sm-12' id='entry-spcr'></div>

    <div id='Entry_alighn2'>
      <div id='Entry_alighn1'>
      <div id='Entry_display_flex'>
            
            <div id='entry_size_1'>
                <div  id='entry-jsty1'>
                  
                <p id='entry-name'>Aswin .k</p>
                </div>
                <div>
                    <marquee direction="left" scrollamount="5"> <p id='entry-p1'>// FULL STACK DEVELOPER //</p>
              
                    </marquee>
                    </div>
            </div>
           &nbsp; <img id='entry-img' src="/images/IMG_1626-1-0123.jpeg" alt="" />
     

      </div>
      </div>
      
   

<div className='col-sm-12'>
<div className='col-sm-12' id='entry-spcr2'></div>
    <div id='entry-jsty2' >
    <a href="/projects">
    <button  id='entry-btn-clr'  class="glow-on-hover" >View Projects </button>

</a>
<div id='display_none'>
&nbsp;
&nbsp;
&nbsp;
&nbsp;
&nbsp;
&nbsp;
&nbsp;
&nbsp;
&nbsp;
&nbsp;
<a href="/profile">
<button type="button"  id='entry-btn-clr' class="glow-on-hover">profile </button>
</a>
</div>

&nbsp;
&nbsp;
&nbsp;
&nbsp;
&nbsp;
&nbsp;
&nbsp;
&nbsp;
&nbsp;
&nbsp;
<a href="#scnd-bk2">
<button type="button"  id='entry-btn-clr' class="glow-on-hover">About Me</button>

</a>

</div>
</div>
</div>
</div>
    </div>

    </>
  )


}
