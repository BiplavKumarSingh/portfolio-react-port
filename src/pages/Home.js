import { Fragment, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import video1 from './../assets/video/background.mp4'
import img from './../assets/image/logo/apple-touch-icon.png';
import img1 from './../assets/image/upload/Biplav.png';
import img2 from './../assets/image/upload/figma.png';
import img3 from './../assets/image/logo/facebook-svgrepo-com.svg';
import img4 from './../assets/image/logo/whatsapp-svgrepo-com.svg';
import img5 from './../assets/image/logo/linkedin-round-svgrepo-com.svg';
import img6 from './../assets/image/logo/twitter-x.svg';
import img7 from './../assets/image/logo/gmail-icon-logo-svgrepo-com.svg';
import img8 from './../assets/image/logo/favicon-32x32.png';
function Home() {
    return (
        <Fragment>
            <div className="vi">
            <video src={video1} autoPlay loop muted></video>
            </div>
            <header>
                <div className="logo">
                    <Link to={'/'}><img src={img}/></Link>
                </div>
                <nav>
                    <ul>
                        <li><Link to={'/'}>Home</Link></li>

                        <li><Link to={'#'}>About</Link></li>

                        <li><Link to={'#'}>Projects</Link></li>

                        <li><Link to={'#'}>Certificates</Link></li>
                    </ul>
                </nav>
                <div className="btn"><Link to={'Contact'}>Contact me</Link></div>
            </header>
            <section>
                <div className="container">
                    <div className="content">
                        <div className='parag'>
                        <h1>Hi!<br/>I am <span>Biplav Kumar Singh</span></h1><br/>
                        <span1>I am a web developer and can manage any projects</span1><br/><br/>
                        <p>I can work according to the task given and can perform the task on time and 
                            with team work</p><br/><br/>
                     <div class="btn"><Link to={'Contact'}>Contact me</Link></div>
                        </div>
                     <img src={img1}/>
                    </div>
                </div>
                <div class="info">
                    <div class="knowledge">
                       <h3>Tools & Skills</h3>
                        <div class="logo">
                         <img src={img2}/>
                        </div>
                    </div>
                    <div class="vertical-line"></div>
                    <div class="contact">
                        <h3>Contact</h3>
                        <div class="images">
                            <Link to="https://www.facebook.com/biplav.Kumar.545/"><img
                            src={img3}/></Link>
                            <Link to="#"><img src={img4} alt='Whatsapp'/></Link>
                            <Link to="https://www.linkedin.com/in/biplav-kumar-singh-3948a1262/"><img
                            src={img5}/></Link>
                            <Link to="#"><img src={img6} alt="Twitter"/></Link>
                        </div>
                    </div>
                    <div class="vertical-line"></div>
                    <div class="contactme">
                        <h3>Contact me</h3>
                        <div class="contactme2">
                            <img src={img7} alt="gmail"/>
                            <p>biplavkumarsingh225@gmail.com</p>
                        </div>
                    </div>
                </div>
            </section>
            <footer>
                <div class="f2">
                    <div class="top">
                        <div class="logo">
                         <img src={img8} alt="logo"/>
                          <h4>Biplav Kumar Singh</h4>
                        </div>
                        <div class="word">
                          <p>Can work with passion and work in a group and be productive</p>
                        </div>
                    </div>
                    <div class="pages">
                        <h3>Pages</h3>
                        <Link to={'/'}>
                            <li>About</li>
                        </Link>
                        <Link to={'/'}>
                            <li>Projects</li>
                        </Link>
                        <Link to={'/'}>
                            <li>Certificates</li>
                        </Link>
                    </div>
                    <div class="contact">
                        <h3>Pages</h3>
                        <p>+977-9761683075</p>
                        <p>biplavkumarsingh225@gmail.com</p>
                        <Link to={'/'}>
                            <li>Linkedin</li>
                        </Link>
                        <Link to={'/'}>
                            <li>X</li>
                        </Link>
                    </div>
                </div>
                <hr/>
                <div class="f3">
                    <p>Copyright &copy; 2022 Biplav Kumar Singh. All rights reserved.</p>
                    <div class="social">
                        <a href="https://www.facebook.com/biplav.Kumar.545/"><img
                                src={img3} alt="facebook"/></a>
                        <a href="https://www.linkedin.com/in/biplav-kumar-singh-3948a1262/"><img
                                src={img5} alt="Linkedin"/></a>
                        <a href="#"><img src={img6} alt="Twitter"/></a>
                    </div>
        </div>
     </footer>
        </Fragment>
    )
}

export default Home;