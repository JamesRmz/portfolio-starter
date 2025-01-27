import React from 'react'
import './Intro.css'

import Github from '../../img/github.png'
import LinkedIn from '../../img/linkedin.png'
import Instagram from '../../img/instagram.png'
import Vector1 from '../../img/Vector1.png'
import Vector2 from '../../img/Vector2.png'
import Yo from '../../img/Emoji2.png'
import Thumbup from '../../img/thumbup.png'
import Crown from '../../img/crown.png'
import Emoji1 from '../../img/glassesimoji.png'

import FloatingDiv from '../FloatingDiv/FloatingDiv'

const Intro = () => {
  return (
    <div className="intro">
        <div className="i-left">
            <div className="i-name">
                <span>Hola yo soy</span>
                <span>Jaime Ramírez</span>
                <span>Front End Developerwith high level of experience in web desinging and development, producting the Quality work</span>
            </div>
            <button className="button i-button">Hire me</button>
            <div className="i-icons">
                <img src={Github} alt="" />
                <img src={LinkedIn} alt="" />
                <img src={Instagram} alt="" />
            </div>
        </div>
        <div className="i-right">
        <img src={Vector1} alt="" />
        <img src={Vector2} alt="" />
        <img src={Yo} alt="" />
        <img src={Emoji1} alt="" />
        <div style={{top:'-4%', left:'68%'}}>
            <FloatingDiv image={Crown} txt1='Web' txt2='Developer'/>
        </div>
        <div style={{top:'18.2rem', left: '1rem'}}>
            <FloatingDiv image={Thumbup} txt1='Best Design' txt2='Award'/>
        </div>
         {/* Blur div*/}
         <div className="blur" style={{backgroud: "rgb(238 210 255)"}}></div>
         <div className="blur"
            style={{
                background:'#F2E7DC',
                top: '17rem',
                width:'21rem',
                height:'11rem',
                left:'-9rem'
            }}>
         </div>
        </div>
    </div>
  )
}

export default Intro