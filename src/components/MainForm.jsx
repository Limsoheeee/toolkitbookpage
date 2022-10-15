import React, { useState } from "react";
import { useDispatch} from "react-redux";
import { AddCard } from "../slice/bookslice";

function MainForm() {
  const init = {
    title: "",
    writer: "",
    review: "",
  };

  const dispatch = useDispatch();
  const [post, setPost] = useState(init);

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setPost({ ...post, [name]: value });
  };

  const onClickHandler = (e) => {
    e.preventDefault()
    if(post.title&&post.review&&post.writer !== ""){
      return  dispatch(AddCard(post));
    } else {
      alert("작성자,책이름,감상평 모두 작성해주세요!")
    }   
    setPost(init);
  };

  return (
    <div>
      <h3>작성자</h3>
      <input
        type="text"
        name="writer"
        value={post.writer}
        maxLength = {10}
        onChange={(e) => onChangeHandler(e)}
      />
      <h3>책 이름</h3>
      <input
        type="text"
        name="title"
        value={post.title}
        maxLength = {50}
        onChange={(e) => onChangeHandler(e)}
      />
      <h3>감상평</h3>
      <textarea
        cols="50"
        rows="10"
        name="review"
        value={post.review}
        maxLength = {1000}
        onChange={(e) => onChangeHandler(e)}
      />
      <button onClick={onClickHandler}>추가하기</button>
    </div>
  );
}

export default MainForm;
