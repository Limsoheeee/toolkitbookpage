import React from 'react'
import styled from "styled-components";
import Button, { LARGE, SMALL, THEM_BLK, THEM_DEF, THEM_DEL } from "./element/Button";


function CommentForm() {
  return (
    <Container>
      <p>댓글작성</p>
      <Button
          type={"submit"}
          theme={THEM_DEF}
          >+</Button> 
    </Container>
  );
}

export default CommentForm;

const Container = styled.div`
 display: flex;
  width: 500px;
  height: 10px;
  background-color: #c8c8c8;
  margin-top: 200px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
  border-radius: 50px;
  /* flex-direction: column; */
  padding: 30px;
  align-items: left ;
  justify-content: space-between;
  font-weight: bold;
  margin: 100px auto 0 auto;
  `;