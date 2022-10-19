import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  __getComment,
  __delComment,
  __editComment,
} from "../slice/commentSlice";
import styled from "styled-components";
import { useNavigate, useParams } from "react-router-dom";
import Button, { THEM_DEF, THEM_DEL } from "./element/Button";

function CommentListItem(props) {
  const dispatch = useDispatch();
  const { comment } = props;
  const [edit, setEdit] = useState(false);
  const [bookEdit, setBookEdit] = useState(comment);

  // useEffect(() => {
  //   dispatch(__getComment(id));
  // }, [dispatch, bookEdit]);

  //init = {ment : 1, name"""}
  //ment : 1
  //ment : 12
  // {0: 1, 1:2, ment : 1}

  //init = {title:"", body:""}
  // e.target: {title:"ㅇㄴㄹㄴㅇㄹ", body:"ㄴㅇㄹㄴㅇㄹ"}
  // 전개 {title:"ㄴㅇㄹㄴㅇㄹ", body:"ㄴㅇㄹㄴㅇㄹ"}

  //{ment : 1, name:""} + ment: "abcd" ment만 덮자
  //풀어쓰고 있었던 ...bookEdit {ment : 1, name:""} X "1" O
  const onChangeClick =(e)=>{
    e.preventDefault();
   dispatch(__editComment({...props,coment:bookEdit}));
   setEdit(false);  
  }
  console.log(bookEdit) 

  return (
    <form onSubmit={onChangeClick}>
      <p>
        {comment.name}
        {edit ? (
          <input
            type="text"
            name="ment"
            required
            default_value={comment.ment}
            // value={bookEdit} -> bookEdit {ment:"abcd"}
            // value={bookEdit.ment} -> ment {"abcd"}
            onChange={(e) => setBookEdit(e.target.value)}
          />
        ) : (
          comment.ment
        )}
        {edit ? <button
        onClick={(e)=>{
          e.preventDefault();
          dispatch(__editComment(bookEdit))
          setEdit(false)
        }}
        >완료</button> : <button onClick={()=>{setEdit(!edit)}}>수정</button>}
        <button onClick={() => dispatch(__delComment(comment))}>삭제</button>
      </p>
    </form>
  );
  // const comment = useSelector((state) => state.commentSlice.comment);
  // const [bookEdit, setBookEdit] = useState(comment||{});
  // console.log(useState(comment));
  // const [edit, setEdit] = useState(false);
  // const dispatch = useDispatch();
  // const { id } = useParams();

  // useEffect(() => {
  //   dispatch(__getComment(id));
  // }, [dispatch, id]);

  // const onchangeHandler = (e)=>{
  //   e.preventDefault();
  //   const { name, value } = e.target;
  //   setBookEdit({...bookEdit, [name]: value });
  // };

  // <Wraper tag={edit ? "form" : "div"}>
  //   {comment.map((item) => {
  //     return (
  //       <div key={item?.id}></div>
  //         <Content>
  //         <form>
  //           {edit ? <input type="text" Value={item.ment} name="ment" onChange={onchangeHandler}/> : item.ment}
  //           </form>
  //           <ButtonWraper>
  //             <Button
  //               type={"submit"}
  //               theme={THEM_DEF}
  //               on_click={() => {
  //                 if (edit) {
  //                   setEdit(false);
  //                   dispatch(__editComment(item.id, bookEdit));
  //                 } else {
  //                   setEdit(true);
  //                 }
  //               }}
  //             >
  //               {edit ? "완료" : "수정"}
  //             </Button>
  //             <Button
  //               type={"button"}
  //               theme={THEM_DEL}
  //               on_click={() => {
  //                 dispatch(__delComment(item));
  //               }}
  //             >
  //               삭제
  //             </Button>
  //           </ButtonWraper>
  //         </Content>
  //       </div>
  //     );
  //   })}
  // </Wraper>
}

export default CommentListItem;

const Wraper = styled.div`
  margin: 20px;
  gap: 30px;
  display: flex;

  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
  border-radius: 50px;
  flex-direction: column;
  padding: 50px;
  justify-content: space-between;
  align-items: center;
  font-size: 20px;
  font-weight: bold;
  flex-direction: column-reverse;
  /* margin: 100px auto 0 auto; */
`;
const Content = styled.li`
  display: flex;
  flex-direction: column;
  list-style: none;
  padding-left: 0px;
  display: flex;
  text-align: center;
`;

const ButtonWraper = styled.div`
  display: flex;
  /* justify-content: space-between; */
  gap: 10px;
  margin-bottom: 20px;
  align-items: center;
`;
