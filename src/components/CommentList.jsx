import React, { useEffect, useState } from "react";
import CommentListItem from "./CommentListItem";
import { useSelector, useDispatch } from "react-redux";
import {__getComment} from "../slice/commentSlice";
import { useNavigate, useParams } from "react-router-dom";

function CommentList() {
  const commentList = useSelector((state) => state.commentSlice.comment);
  const dispatch = useDispatch();
  const { id } = useParams();
  useEffect(() => {
    dispatch(__getComment(id));
  }, [dispatch,id]);


  return (
    <div>
      {commentList.map((comment) => (
        <CommentListItem key={comment.id} comment={comment} />
      ))}
    </div>
  );
}

export default CommentList;
