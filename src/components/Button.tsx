import { ReactElement } from "react";
import styled from "../styles/Button.module.scss"; 

interface ButtonProps {
  variant: "primary" | "secondary";
  text: string;
  startIcon?: ReactElement;
  onClick?: () => void;
  fullWidth?: boolean;
  loading?: boolean;
}

export const Button = (props: ButtonProps) => {
  const { variant, text, startIcon, onClick, fullWidth, loading } = props;

  return (
    <button
      onClick={onClick}
      className={`
        ${styled.button} 
        ${styled[variant]} 
        ${fullWidth ? styled.fullWidth : ""} 
        ${loading ? styled.loading : ""}
      `}
    >
      
      {text}
      {startIcon && <div className={styled.startIcon}>{startIcon}</div>}
    </button>
  );
};
