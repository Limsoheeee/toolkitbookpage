import React from "react";
import DetailBox from "../components/DetailBox";
import CommentForm from "../components/CommentForm";
import CommentList from "../components/CommentList";
import Header from "../components/Header"

function Detail() {
  return (
    <div>
      <Header />
      <DetailBox />
      <CommentForm />
      <CommentList />
    </div>
  );
}

export default Detail;
