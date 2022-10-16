import React from 'react'
import { useNavigate } from "react-router-dom";
import styled from "styled-components";


function Header() {
  const navigate = useNavigate();
  return (
    <header>
      <StHeader onClick={()=>{navigate("/")}}>📖 오늘의 책</StHeader>
    </header>
  );
};

const StHeader = styled.span` 
height: 50px;
  width: 100%;
  padding: 0 20px;

  background-color: RGB(38, 38, 38);
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
  color: white;
  font-size: 16px;

  position: fixed;
  top: 0;
  display: flex;
  align-items: center;
 cursor: pointer;
 `; 

export default Header;