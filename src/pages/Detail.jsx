import React from "react";
import DetailBox from "../components/DetailBox";
import CommentForm from "../components/CommentForm";
import CommentList from "../components/CommentList";

function Detail() {
  return (
    <div>
      <DetailBox />
      <CommentForm />
      <CommentList />
    </div>
  );
}

export default Detail;
