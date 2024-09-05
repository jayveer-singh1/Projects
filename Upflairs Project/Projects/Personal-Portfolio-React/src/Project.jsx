import React from 'react'
import Img1 from './Images/Image 1.png'
import Img2 from './Images/Image 2.png'
import Img3 from './Images/Image 3.png'
import './CSS/Project.css'

function Project() {
    return (
        <>
            <section className="section1">
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <div className="section1-box1">
                    <div id="mainheaading">
                        <div id="bluebox" />
                        <h1 className="projects">Projects</h1>
                    </div>
                    <br />
                    <div id="secondmainheading">
                        I'm a paragraph. Click here to add your own text and edit me. It's easy.
                        Just click “Edit Text” or double click me to add your own content and make
                        changes to the font. I'm a great place for you to tell a story and let
                        your users know a little more about you.
                    </div>
                </div>
                <div className="section1-box2">
                    <div className="div-one">
                        <h2>Project Name 01</h2>
                        <p className="Role">Role Title</p>
                        <div className="div-0" />
                        <p>
                            I'm a paragraph. Click here to add your own text and edit me. It's easy.
                            Just click “Edit Text” or double click me to add your own content and
                            make changes to the font. I'm a great place for you to tell a story and
                            let your users know a little more about you.
                        </p>
                    </div>
                    <div className="div-two">
                        <img className="project-image" src={Img1} alt="" />
                    </div>
                </div>
                <div className="section1-box2">
                    <div className="div-one">
                        <h2>Project Name 02</h2>
                        <p className="Role">Role Title</p>
                        <div className="div-0" />
                        <p>
                            I'm a paragraph. Click here to add your own text and edit me. It's easy.
                            Just click “Edit Text” or double click me to add your own content and
                            make changes to the font. I'm a great place for you to tell a story and
                            let your users know a little more about you.
                        </p>
                    </div>
                    <div className="div-two">
                        <img className="project-image" src={Img2} alt="" />
                    </div>
                </div>
                <div className="section1-box2">
                    <div className="div-one">
                        <h2>Project Name 03</h2>
                        <p className="Role">Role Title</p>
                        <div className="div-0" />
                        <p>
                            I'm a paragraph. Click here to add your own text and edit me. It's easy.
                            Just click “Edit Text” or double click me to add your own content and
                            make changes to the font. I'm a great place for you to tell a story and
                            let your users know a little more about you.
                        </p>
                    </div>
                    <div className="div-two">
                        <img className="project-image" src={Img3} alt="" />
                    </div>
                </div>
            </section>

        </>
    )
}

export default Project
