import React from 'react'
import { useSelector } from 'react-redux';

function MainItem() {
  const BookPost = useSelector((state)=>state.book.book)
  return (
    <div>
      <h1>Post list</h1>
      {BookPost.map((item)=>{
        return(
          <h4 key={item.id}>책제목: {item.title} 작성자: {item.writer}</h4>
        )
      })}
    </div>
  );
}

export default MainItem;