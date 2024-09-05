import React from 'react'
import Image1 from "../Images/Jayveer Singh.jpg";
import Image2 from "../Images/Big-Facebook.png";
import Image3 from "../Images/Big-Instagram.png";
import Image4 from "../Images/Big-Twitter.png";
import Image5 from "../Images/Big-Linkedin.png";
import Image6 from "../Images/Small-Facebook.png";
import Image7 from "../Images/Small-Instagram.png";
import Image8 from "../Images/Small-Twitter.png";
import Image9 from "../Images/Small-Linkedin.png";
import { NavLink } from 'react-router-dom';

function Home() {
    return (
        <>
            {/* Start Header */}
            <header>
                <nav>
                    <div className="left">
                        <div className="dot" />
                        <span className="jayveer">
                            <a href={Image1}>Jayveer Singh</a>
                        </span>
                        <span className="slash">/</span>
                        <span className="web">WEB DEVELOPER</span>
                    </div>
                    <div className="right">
                        <ul>
                            <li>
                                <NavLink to={''}>ABOUT ME</NavLink>
                            </li>
                            <li>
                                <NavLink to={'Resume'}>RESUME</NavLink>
                            </li>
                            <li>
                                <NavLink to={'Project'}>PROJECT</NavLink>
                            </li>
                            <li>
                                <NavLink to={'Contact'}>CONTACT</NavLink>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>
            {/* End Header  */}
            {/* Start Main  */}
            <main>
                <section className="firstsection">
                    <div className="firstdiv">
                        <div className="box1">
                            <div className="box2">
                                <a href={Image1}>
                                    <img
                                        src={Image1}
                                        alt=""
                                        title="Jayveer Singh"
                                    />
                                </a>
                                <a href="" id="jayveers">
                                    <p>Jayveer Singh</p>
                                </a>
                                <span id="span1" />
                                <span className="profession">WEB DEVELOPER</span>
                            </div>
                            <div className="box3">
                                <a href="">
                                    <img src={Image2} alt="" />
                                </a>
                                <a
                                    href="https://x.com/Jayveer74857519?t=ZgO9hIG8Cmz9NctHHC9e1g&s=09"
                                    target="_blank"
                                >
                                    <img src={Image4} alt="" />
                                </a>
                                <a
                                    href="https://www.linkedin.com/in/jayveer-singh-87bb28263?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                                    target="_blank"
                                >
                                    <img src={Image5} alt="" />
                                </a>
                                <a
                                    href="https://www.instagram.com/jayveer_singh_93?igsh=MXJ3MmxsbDhxYWt2MQ=="
                                    target="_blank"
                                >
                                    <img src={Image3} alt="" />
                                </a>
                            </div>
                        </div>
                        <div className="box4">
                            <p id="hello">Hello</p>
                            <p id="here">Here's who I am &amp; what I do</p>
                            <div>
                                <NavLink to={'Resume'} className="mainbut" id="butresume">RESUME</NavLink>
                                <NavLink to={'Project'} className="mainbut" id="butprojects">PROJECTS</NavLink>
                            </div>
                            <p className="mytype">
                                I'm a passionate WEB DEVELOPER who thrives on crafting user-centric
                                and aesthetically pleasing websites that deliver exceptional
                                performance across all devices.
                            </p>
                            <p className="mytype">I'm from Borimada, Pali Rajasthan (306023)</p>
                        </div>
                    </div>
                </section>
            </main>
            {/* End Main  */}
            {/* Start Footer  */}
            <footer className="footer">
                <div className="left-footer ">
                    © 2035 by Jayveer Singh.
                    <br />
                    Powered and Secured by Jayveer
                </div>
                <div className="right-footer">
                    <ul className="right-box">
                        <li className="aboutid">
                            <span>Call</span>
                            <ul>
                                <li className="space">9079680620</li>
                            </ul>
                        </li>
                        <li className="aboutid">
                            <span>Write</span>
                            <ul>
                                <li className="space">jayveersinghrawat93512@gmail.com</li>
                            </ul>
                        </li>
                        <li className="aboutid">
                            <span>Follow</span>
                            <ul id="footer-icon">
                                <li className="space">
                                    <img src={Image6} alt="" />
                                </li>
                                <li className="space">
                                    <a
                                        href="https://x.com/Jayveer74857519?t=ZgO9hIG8Cmz9NctHHC9e1g&s=09"
                                        target="_blank"
                                    >
                                        <img src={Image8} alt="" />
                                    </a>
                                </li>
                                <li className="space">
                                    <a
                                        href="https://www.linkedin.com/in/jayveer-singh-87bb28263?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                                        target="_blank"
                                    >
                                        <img src={Image9} alt="" />
                                    </a>
                                </li>
                                <li className="space">
                                    <a
                                        href="https://www.instagram.com/jayveer_singh_93?igsh=MXJ3MmxsbDhxYWt2MQ=="
                                        target="_blank"
                                    >
                                        <img src={Image7} alt="" />
                                    </a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </footer>
            {/* End Footer  */}
        </>

    )
}

export default Home
