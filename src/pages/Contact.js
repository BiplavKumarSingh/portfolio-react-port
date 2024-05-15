import { Fragment } from "react";
import './../assets/css/contact.css'
import { Link } from "react-router-dom";
import video1 from './../assets/video/background.mp4'
import img from './../assets/image/logo/apple-touch-icon.png';
import img1 from './../assets/image/logo/facebook-svgrepo-com.svg';
import img2 from './../assets/image/logo/linkedin-round-svgrepo-com.svg';
import img3 from './../assets/image/logo/twitter-x.svg';
import img4 from './../assets/image/logo/favicon-32x32.png';

function Contact() {
    return (
        <Fragment>
            <div class="vi">
               <video src={video1} autoPlay loop muted></video>
            </div>
            <header>
                <div class="logo">
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
                <div class="btn"><Link to={'Contact'}>Contact me</Link></div>
            </header>
            <section>
                <hr/>
                <form>
                   <br/>
                   <div class="detail">
                        <lable>Name:</lable>
                        <input type="text" name="name" required/>
                        <br/>
                        <br/>
                        <label id="email">Email:</label>
                        <input type="email" name="email" required/>
                    </div>
                    <br/>
                    <br/>
                    <div class="gen">
                        <label>Gender:</label>
                        <input type="radio" name="gender" value="M" />male
                        <input type="radio" name="gender" value="F" />Female
                        <input type="radio" name="gender" value="O" />Other
                    </div>
                    <br/>
                    <br/>
                    <div class="detail">
                        <label>Address:</label>
                        <input type="text" name="address"/>
                    </div>
                    <br/>
                    <br/>
                    <label>Query:</label>
                    <textarea name="query" id="query"></textarea>
                    <br/>
                    <br/>
                    <button id="button" type="submit">Submit</button>
                    <br/>
                    <br/>
                </form>
            </section>
            <footer>
                <div class="f2">
                    <div class="top">
                        <div class="logo">
                         <img src={img4} alt="logo"/>
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
                                src={img1} alt="facebook"/></a>
                        <a href="https://www.linkedin.com/in/biplav-kumar-singh-3948a1262/"><img
                                src={img2} alt="Linkedin"/></a>
                        <a href="#"><img src={img3} alt="Twitter"/></a>
                    </div>
                </div>
            </footer>
        </Fragment>
    )
}

export default Contact;