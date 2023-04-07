import React from 'react'
import Entry from './Entry'
import Navbar from './Navbar'
import "./Aswinport.css"
import Scndsection from './Scndsection'

export default function Aswinport() {
  return (
    <>
    <div id='as-ttl'>
    <Navbar/>

    <div className='col-sm-12'>
    <Entry/>

    </div>
    <section  id='aboutme'>
    <div className='col-sm-12'>
    <Scndsection/>

    </div>
    </section>
   

    </div>
    </>
  )
}
