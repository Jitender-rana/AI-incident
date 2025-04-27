import styled from "../styles/Navbar.module.scss"
import { Button } from "./Button";
import logo from "../assets/logo.png";
import { useNavigate } from "react-router-dom";

export function Navbar(){
    const navigate=useNavigate();
    return <div className={styled.Navbar}>
        <div className={styled.nav}>
            <img src={logo} alt="logo" />
            <Button variant="secondary" text="Dashboard" onClick={()=>{navigate("/incidents")}}/>

        </div>

    </div>
}