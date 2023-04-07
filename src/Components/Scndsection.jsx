import React, { useState } from 'react'
import "./Scndsction.css"
export default function Scndsection() {
  const [trueflse, settrueflse] = useState({
    skill: true,
    education: false,
    experiance: false,
  })

  const skill = () => {
    settrueflse({ skill: true })

  }

  const experiance = () => {
    settrueflse({ experiance: true })


  }
  const education = () => {
    settrueflse({ education: true })


  }
  return (
    <>
      <div id='scnd-bk2' className='container'>
        <div className='col-sm-12' id='scnd-spcr1'></div>
        <div className='row'>

          <div className='col'>

          </div>
          <div className='col-sm-8' id='scnd-bk'>
            <div className='row'>
              <div className='col-sm-4' id='scnd-pic1'>

              </div>
              <div className='col'>

                <p id='scnd-txt'>About <span id='scnd-txt3'>me</span> </p>
                <p id='scnd-txt1'>I am qualified and professional web developer with deep
                  knowledge in web development and website design. I am
                  looking for a good position in the field of Proven
                  experience developing consumer-focused websites
                  using HTML, CSS, JavaScript, Node JS and React JS.
                  Strong creative and analytical skills</p>

                <div id='scnd-gr' className='col-sm-12' >
                  &nbsp;
                  &nbsp;
                  &nbsp;

                  <div className='tab-links'>
                    <button id='scnd-btn' onClick={skill} >
                      <p>Skills</p>


                    </button>

                  </div>
                  &nbsp;
                  &nbsp;
                  &nbsp;

                  <div className='tab-links'>
                    <button id='scnd-btn' onClick={experiance}>
                      <p>Experiance</p>

                    </button>

                  </div>
                  &nbsp;
                  &nbsp;
                  &nbsp;

                  <div className='tab-links'>
                    <button id='scnd-btn' onClick={education}>
                      <p>Education</p>

                    </button>

                  </div>


                </div>
                <div className='col-sm-12'>
                  {trueflse.skill === true ?
                    <>


                      <div className='col' id='scnd-clr'>
                        <div className='row'>
                          <div className='col'>
                            <ul>
                              <li >Web Designing</li>
                              <li>Design Thinking</li>
                              <li>Frond End coding</li>
                              <li>HTML,CSS and BOOTSTRAP</li>
                              <li>lightrooom cc editing</li>

                            </ul>
                          </div>


                          <div className='col'>
                            <ul>
                              <li>Back End Coding</li>
                              <li>Design Thinking</li>
                              <li>Problem Solving</li>
                              <li>JavaScript,Node JS and React JS</li>

                            </ul>

                          </div>
                        </div>
                      </div>
                    </> :
                    ""
                  }



                  {trueflse.education === true ?
                    <>


                      <div className='col' id='scnd-clr'>
                        <div className='row'>
                          <div className='col'>
                            <h5>
                              GOVT ITI KANNUR
                            </h5>
                            <p>EXPERIENCED IN WELDING</p>
                            <p>completed in 2022</p>


                          </div>
                          <div className='col'>
                            <h5>
                              GHSS PUZHATHI,KANNUR
                            </h5>
                            <p>plus two biology science</p>
                            <p>Completed in 2020</p>

                          </div>


                          <div className='col'>
                            <h5>
                              GHSS KANNADIPARAMBA,KANNUR
                            </h5>
                            <p>10 TH</p>
                            <p>Completed in 2018</p>

                          </div>
                        </div>
                      </div>
                    </> :
                    ""
                  }


                  {trueflse.experiance === true ?
                    <>


                      <div className='col' id='scnd-clr'>
                        <div className='row'>
                          <div className='col'>
                            <h4>
                              MERN STACK DEVELOPER INTERN
                            </h4>
                            <h5>Maitexa Info Solutions</h5>
                            <ul>
                              <li>
                                Currently studying MERN Stack Development.
                              </li>
                              <li>
                                Works in a team based environment.
                              </li>
                              <li>
                                Completed around 15 website design sample projects
                              </li>
                              <li>
                                Completed some web development samples

                              </li>
                            </ul>

                          </div>

                        </div>
                      </div>
                    </> :
                    ""
                  }


                </div>
              </div>

            </div>
          </div>
          <div className='col'>

          </div>

        </div>

      </div>
    </>
  )
}
