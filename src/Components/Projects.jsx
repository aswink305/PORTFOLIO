import React from 'react'
import "./Projects.css"
export default function Projects() {
    return (
        <>
            <div className='col-sm-12' id='projects-spacer'></div>
            <div id='projects-alighn'>

                <p id='projects-title'> Main <span id='projects-title1' >Projects</span> </p>


            </div>
            <div className='container-fluid'>

                <p id='projects-1'>Netflix (React js)</p>
                <ul id='Project_contants'>
                    <li>Netflix clone is a fully react js project only for displaying
                        shows and movies category wised</li>
                    <li>TMDB api is used for fetching datas</li>
                    <li>trailer videos are added</li>
                </ul>
                <div className='col-sm-12'>
                    <div className='row'>
                        <div className='col-sm-1'></div>
                        <div className='col'>
                            <video id='projects-video' controls lupe muted autoPlay="autoplay" >
                                <source src="./images/Netflix (online-video-cutter.com).mp4" type="video/mp4" />
                            </video>
                        </div>
                        <div className='col-sm-1'></div>

                    </div>
                </div>
            </div>
            <div className='container-fluid'>

                <p id='projects-1'>Whether (react js)</p>
                <ul id='Project_contants'>
                    <li >Weather App (React js)
                        Shows realtime weather information of a particular
                        region.
                    </li>
                    <li>Technologies Used: React js, CSS, Bootstrap</li>



                </ul>
                <div className='col-sm-12'>
                    <div className='row'>
                        <div className='col-sm-1'></div>
                        <div className='col'>
                            <video id='projects-video' controls lupe muted autoPlay="autoplay" >
                                <source src="./images/whether app.mp4" type="video/mp4" />
                            </video>
                        </div>
                        <div className='col-sm-1'></div>

                    </div>
                </div>
            </div>

            <div className='container-fluid'>

                <p id='projects-1'>E commerce Website (Mern)</p>
                <ul id='Project_contants'>
                    <li>A fullstack E-Commerce web app created with MERN
                    </li>
                    <li>Technologies Used: React js, Express, Mongo DB, Node js</li>
                    <li>Purchase your Dream vehicle </li>



                </ul>
                <div className='col-sm-12'>
                    <div className='row'>
                        <div className='col-sm-1'></div>
                        <div className='col'>
                            <video id='projects-video' controls lupe muted autoPlay="autoplay" >
                                <source src="./images/Lap46.mp4" type="video/mp4" />
                            </video>
                        </div>
                        <div className='col-sm-1'></div>

                    </div>
                </div>
            </div>




            <div className='col-sm-12' id='projects-spacer'></div>

        </>
    )
}
