import React,{useEffect } from "react";
import { useSelector,useDispatch } from "react-redux";
import { __delPost, __getPostId } from "../slice/bookSlice";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import Button, { LARGE, SMALL, THEM_BLK, THEM_DEF, THEM_DEL } from "./element/Button";

function DetailBox() {
  const post = useSelector((state) => state.bookSlice.post);
  const navigate = useNavigate();


  const { id } = useParams();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(__getPostId(id));
  }, [dispatch,id]);

   const onClickDel =() =>{
    console.log("del")
    dispatch(__delPost(id))
    navigate('/');
   };

  return (
        <Container>
          <Content>아이디는??? {id}</Content>
          <Content>작성자는??? {post.writer}</Content>
          <Content> 제목은???{post.title}</Content>
          <Content>감상평은???{post.review}</Content>
          <Wraper>
          <Button
          type={"submit"}
          theme={THEM_DEF}
          >수정</Button> 
          <Button
             type={"button"}
             theme={THEM_DEL}
             on_click={onClickDel}
          >삭제</Button>
          </Wraper>

        </Container>

  );
}

export default DetailBox;

const Container = styled.div`
 display: flex;
  width: 500px;
  height: 200px;
  margin-top: 200px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
  border-radius: 50px;
  flex-direction: column;
  padding: 50px;
  justify-content: space-between;
  align-items: center;
  font-size: 20px;
  font-weight: bold;
  margin: 100px auto 0 auto;
  `;
const Wraper = styled.div`
display: flex;
/* justify-content: space-between; */
gap: 10px;
margin-bottom: 20px;
`;

const Content = styled.li`
text-align: center;
margin-top: 20px;
list-style: none;
padding-left: 0px;
`;