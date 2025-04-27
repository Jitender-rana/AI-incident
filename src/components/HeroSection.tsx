import hero from "../assets/hero.png"
import styled from "../styles/HeroSection.module.scss"
import { Right } from "../icons/right"
import { Button } from "./Button"
import { useNavigate } from "react-router-dom"
export function HeroSection(){
    const navigate=useNavigate();
    return <div className={styled.Hero}>
        <div className={styled.herotext}>
            <h1>Navigate AI Risks<br/> with Confidence</h1>
            <h4>Stay ahead of AI incidents effortlessly with real-time monitoring,<br/> smart insights, and user-friendly reporting tools</h4>
            <div style={{marginTop: "2rem"}}><Button text="Go to dashboard" variant="primary" startIcon={<Right/>} onClick={()=>{navigate("/incidents")}}/></div>

        </div>
        <img  className={styled.heroimg} src={hero} alt="hero" />

    </div>

}