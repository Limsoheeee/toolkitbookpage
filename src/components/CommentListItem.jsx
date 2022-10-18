import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { __getComment, __delComment,__editComment } from "../slice/commentSlice";
import styled from "styled-components";
import { useNavigate, useParams } from "react-router-dom";
import Button, { THEM_DEF, THEM_DEL } from "./element/Button";

function CommentListItem() {
  const [edit, setEdit] = useState(false);
  const [bookEdit, setBookEdit] = useState("");
  const comment = useSelector((state) => state.commentSlice.comment);
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(__getComment(id));
  }, [dispatch, id]);

  return (
    <Wraper>
      {comment.map((item) => {
        return (
          <div>
            <Content key={item?.id}>
              {item.name}님 : {item.ment}
              <ButtonWraper>
                
                <Button
                  type={"submit"}
                  theme={THEM_DEF}
                  on_click={() => {
                  if(edit){
                    setEdit(false);
                    dispatch(__editComment(id, edit));
                  }else{
                    setEdit(true);
                  }
                  }}
                >
                  수정
                </Button>
                <Button
                  type={"button"}
                  theme={THEM_DEL}
                  on_click={() => {
                    dispatch(__delComment(item));
                  }}
                >
                  삭제
                </Button>
              </ButtonWraper>
            </Content>
          </div>
        );
      })}
    </Wraper>
  );
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
