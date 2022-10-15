import React from 'react'
import { useSelector } from 'react-redux';
import Button from './element/Button';

function MainItem() {
  const BookPost = useSelector((state)=>state.book.book)
  return (
    <div>
      {BookPost.map((item)=>{
        return(
          <h4 key={item.id}> {item.writer} 님의 오늘의 책은? {item.title}  <Button>수정</Button> <Button>삭제</Button></h4>
        )
      })}
     
    </div>
  );
}

export default MainItem;