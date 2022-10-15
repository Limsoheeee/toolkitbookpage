import React from 'react'
import { useNavigate } from "react-router-dom";
import styled from "styled-components";


function Header() {
  const navigate = useNavigate();
  return (
    <header>
      <StHeader onClick={()=>{navigate("/")}}>오늘의 책</StHeader>
    </header>
  );
};

const StHeader = styled.span` 
 cursor: pointer;
 `; 



export default Header;