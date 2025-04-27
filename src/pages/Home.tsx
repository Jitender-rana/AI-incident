import { useNavigate } from "react-router-dom"
import styled from "../styles/Home.module.scss";
import { Navbar } from "../components/Navbar";
import { HeroSection } from "../components/HeroSection";

export function Home(){
    const navigate=useNavigate();
    return <div className={styled.Home}>
        
            <Navbar/>
            <HeroSection/>
        
        

        
       

    </div>
}