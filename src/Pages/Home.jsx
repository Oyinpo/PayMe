import React, {useState} from 'react';
import '../Styles/Home.css'
import { Link } from 'react-router-dom';
import logo from '../assets/Payme.png'
import girl from '../assets/Group 1382.png'
import planday from '../assets/Group 542.png'
import umbraco from '../assets/Group 543.png'
import pearl from '../assets/Group 544.png'
import bright from '../assets/Group 545.png'
import dev from '../assets/Group 1393.png'
import design from '../assets/Group 1394.png'
import data from '../assets/Group 1395.png'
import seo from '../assets/Group 1396.png'
import guy from '../assets/Rectangle 32.png'
import rob from '../assets/Group 1389.png'
import arrows from '../assets/Group 1388.png'
import start from '../assets/Group 556.png'
import teams from '../assets/Group 556(1).png'
import company from '../assets/Group 556(2).png'
import {TfiMinus} from 'react-icons/tfi'
import  {VscAdd} from 'react-icons/vsc'
import pay from '../assets/Payme@2x.png'
import Nav from '../Navbar/Nav';
const Home = () => {

    const [drop, setDrop] = useState(false)
    const dropDown=()=>{
        setDrop(!drop)
    }
    const [drop1, setDrop1] = useState(false)
    const dropDown1=()=>{
        setDrop1(!drop1)
    }
    const [drop2, setDrop2] = useState(false)
    const dropDown2=()=>{
        setDrop2(!drop2)
    }
    const [drop3, setDrop3] = useState(false)
    const dropDown3=()=>{
        setDrop3(!drop3)
    }

    const [mobile, setMobile]= useState(false)
    const handleMobile=()=>{
        setMobile(!mobile)
    }
    const handleClose=()=>{
        setMobile(false)
    }
 
    return(
        <div className='pay'>
             {/* Navbar */}
            <div className='nav'>
                <Nav/>
            </div>
            <div className='proGirl'>
                <div className='prov-web'>
                    <div className='proBest'>
                        <h1>Providing Best</h1>
                    </div>
                    <div className='webs'>
                        <h1>WEB Services</h1>
                    </div>
                    <div className='letter'>
                        <h5>Letter of on become he tended active enable to. Vicinity relation sensible sociable surprise screened no up as.</h5>
                    </div>
                    <div className='get-exp'>
                        <div className='get'>
                            <button>Get Started</button>
                        </div>
                        <div className='exp'>
                        <button>Explore</button>
                        </div>
                    </div>
                </div>
                <div className='girl'>
                    <img src={girl} width={"650kb"} height={"850kb"}/>
                </div>
            </div>
            <div className='brands'>
                <div className='pupbp'>
                    <img src={planday} />
                    <img src={umbraco} />
                    <img src={pearl} />
                    <img src={bright} />
                    <img src={planday} />
                </div>                
            </div>
            <div className='best-web'>
                <div className='bests'>
                    <div className='bescolor'>
                        <span>Best   <div className='serco'>Services</div></span>
                      
                    </div>
                    <h6>Letter of on become he tended active enable to. Vicinity relation sensible sociable surprise screened no up as.</h6>
                </div>
                <div className='web'>
                    <div className='devs'>
                        <div className='dev'>
                            <img src={dev} width={'350kb'} height={'350kb'}/>
                        </div>
                        <div className='des'>
                            <img src={design} width={'350kb'} height={'350kb'}/>
                        </div>
                    </div>
                    <div className='datas'>
                        <div className='data'>
                            <img src={data} width={'350kb'} height={'350kb'}/>
                        </div>
                        <div className='seo'>
                            <img src={seo} width={'350kb'} height={'350kb'}/>
                        </div>
                    </div>
                    <button>Explore All</button>
                </div>
            </div>
            <main className='features'>
                <div className='bests'>
                    <div className='bescolor'>
                        <div className='feat'>
                         <span>Our   <div className='serco'>Features</div></span>
                        </div>
                        <h6>Letter of on become he tended active enable to. Vicinity relation sensible sociable surprise screened no up as.</h6>
                    </div>
                </div>
                <div className='wotico'>
                    <div className='work'>
                        <h2>Work Load</h2>
                        <h4>Outward clothes promise at gravity do excited. Sufficient particular impossible by reasonable oh expression is. Yet preference connection unpleasant yet melancholy but end appearance.                       </h4>
                        <h6>Learn More</h6>
                    </div>
                    <div className='time'>
                        <h2>Time Tracking</h2>
                        <h4>Outward clothes promise at gravity do excited. Sufficient particular impossible by reasonable oh expression is. Yet preference connection unpleasant yet melancholy but end appearance.</h4>
                        <h6>Learn More</h6>
                    </div>
                    <div className='collab'>
                        <h2>Collaborations</h2>
                        <h4>Outward clothes promise at gravity do excited. Sufficient particular impossible by reasonable oh expression is. Yet preference connection unpleasant yet melancholy but end appearance.</h4>
                        <h6>Learn More</h6>
                    </div>
                    <div className='empty'>
                        <h2>empty</h2>
                        <h4>Outward clothes promise at gravity do excited. Sufficient particular impossible by reasonable oh expression is. Yet preference connection unpleasant yet melancholy but end appearance.</h4>
                        <h6>Learn More</h6>
                    </div>
                </div>
                <div className='wot'>
                    <button>Explore All</button>
                </div>
                <div className='client'>
                    <div className='bescolor'>
                        <div className='feat'>
                            <span>What   <div className='serco'>Clients</div>  Say</span>
                        </div>
                            <h6>Letter of on become he tended active enable to. Vicinity relation sensible sociable surprise screened no up as.</h6>
                    </div>
                </div>
                <div className='rob'>
                    <div className='guy'>
                        <img src={guy} width={'400kb'} height={'400kb'}/>
                    </div>
                    <div className='robs'>
                        <h2>Best Developers</h2>
                        <h4>Outward clothes promise at gravity do excited. Sufficient particular impossible by reasonable oh expression is. Yet preference connection unpleasant yet melancholy but end appearance. And excellence partiality estimating terminated day everything.</h4>
                        <img src={rob} />
                        <h3>Robert Johnson</h3>
                        <h6>Director at Behance</h6>
                    </div>
                </div>
                <div className='arrow'><img src={arrows}/></div>
            
                <div className='price'>
                    <div className='bescolor'>
                        <div className='feat'>
                        <span>Our   <div className='serco'>Pricing Plan</div></span>
                        </div>
                    </div>
                </div>
                <div className='pricing'>
                    <div className='start'>
                        <h2>For Starter</h2>
                        <h1>$59</h1>
                        <img src={start} />
                        <button>Request Demo</button>
                    </div>
                    <div className='teams'>
                        <h2>For Teams</h2>
                        <h1>$99</h1>
                        <img src={teams} />
                        <button>Request Demo</button>
                    </div>
                    <div className='company'>
                        <h2>For Company</h2>
                        <h1>Custom</h1>
                        <img src={company} />
                        <button>Contact Us</button>
                    </div>
                </div>
                <div className='mainfaq'>
                    <div className='faq'>
                        <h1>FAQs</h1>
                    </div>
                    <div>
                        <div className='she' onClick={dropDown}>
                            <div className='tfi'><TfiMinus/></div> <h3>she met humoured sir breeding her. Six curiosity day assurance bed necessary.</h3>
                        </div>
                        {drop && <div className='drop1'>
                            <p>Relation so in confined smallest children unpacked delicate. Why sir end believe uncivil respect. Always get adieus nature day course for common. My little garret repair to desire he esteem.</p>
                        </div>}
                    </div>
                    <div>
                        <div className='she' onClick={dropDown1}>
                            <VscAdd/> <h3>And excellence partiality estimating terminated day everything?</h3>
                        </div>
                        {drop1 && <div className='drop1'>
                            <p>Relation so in confined smallest children unpacked delicate. Why sir end believe uncivil respect. Always get adieus nature day course for common. My little garret repair to desire he esteem.</p>
                        </div>}
                    </div>
                    <div>
                        <div className='late' onClick={dropDown2}>
                            <VscAdd/> <h3>Latter person am secure of estate genius at?</h3>
                        </div>
                        {drop2 && <div className='drop1'>
                            <p>Relation so in confined smallest children unpacked delicate. Why sir end believe uncivil respect. Always get adieus nature day course for common. My little garret repair to desire he esteem.</p>
                        </div>}
                    </div>
                    <div>
                        <div className='what' onClick={dropDown3}>
                            <VscAdd/> <h3>Whatever landlord yourself at by pleasure of children be?</h3>
                        </div>
                        {drop3 && <div className='drop1'>
                            <p>Relation so in confined smallest children unpacked delicate. Why sir end believe uncivil respect. Always get adieus nature day course for common. My little garret repair to desire he esteem.</p>
                        </div>}
                    </div>
                </div>

            </main>
            {/* footer */}
            <footer>
                <div className='black'>
                    <div className='people'>
                        <h1> People who are </h1>
                        <h1>ready took these courses!</h1>
                    </div>
                    <button>Schedule Demo</button>
                    <div className='paylink'>
                        <div>
                            <img src={pay} width={'150kb'} />
                        </div>
                        <div className='lincog'>
                            <div className='linko'>
                                <h4>Links</h4>
                                <p>Overons</p>
                                <p>Social Media</p>
                                <p>Counters</p>
                                <p>Contact</p>
                            </div>
                            <div className='coy'>
                                <h4>Company</h4>
                                <p>Terms & Conditions</p>
                                <p>Privacy Policy</p>
                                <p>Contact</p>
                            </div>
                            <div className='getin'>
                                <h4>Get in touch</h4>
                                <p>Crechterwoord K12 182 DK Alknjkcb</p>
                                <p>085-132567</p>
                                <p>info@payme.net</p>
                            </div>
                        </div>
                    </div>
                    <div className='copy'>
                        <p>© 2021 Payme. All rights reserved</p>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Home