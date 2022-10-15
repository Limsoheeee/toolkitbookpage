import React from 'react'
import MainItem from './MainItem';
import styled from "styled-components";

function MainList() {
 
  return (
    <PL>
<LT>
  오늘 어떤책을 고르셨나요?
</LT>
      <MainItem />
    </PL>
  );
}

export default MainList;

const PL = styled.div`
  width: 550px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px auto 0 auto;
`;

const LT = styled.div`
  margin-bottom: 20px;
  font-size: 20px;
  font-weight: bold;
`;